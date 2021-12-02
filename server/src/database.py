import sqlite3
import requests
from enum import Enum

from requestHandler import RequestError

class Database:
    sql_create_user_table = """ CREATE TABLE IF NOT EXISTS users (
                                        id integer PRIMARY KEY,
                                        email text NOT NULL,
                                        username text,
                                        fname text NOT NULL,
                                        lname text,
                                        password text NOT NULL
                                    ); """

    sql_create_recipe_table = """ CREATE TABLE IF NOT EXISTS recipes (
                                        id integer PRIMARY KEY,
                                        name text NOT NULL,
                                        author text NOT NULL,
                                        ingredients text,
                                        time integer,
                                        instructions text NOT NULL
                                    ); """

    def __init__(self):
        self.conn = sqlite3.connect('main.db')

    def make(self):
        c = self.conn.cursor()
        c.execute(self.sql_create_user_table)
        c.execute(self.sql_create_recipe_table)
        self.conn.commit()

    def addUser(self, email, username, fname, lname, password, commit=True):
        c = self.conn.cursor()

        # validate that all required fields are populated
        if self.isFieldBlank(email):
            raise BlankError(Field.EMAIL)
        
        if self.isFieldBlank(username):
            raise BlankError(Field.USERNAME)

        if self.isFieldBlank(fname):
            raise BlankError(Field.F_NAME)

        if self.isFieldBlank(password):
            raise BlankError(Field.PASSWORD)

        # validate username and email is free
        c.execute("SELECT username, email FROM users WHERE username = ? OR email = ?", [
                  username, email])
        rows = c.fetchall()
        for row in rows:
            if(row[0] == username):
                raise AlreadyUsedError(Field.USERNAME)
            if(row[1] == email):
                raise AlreadyUsedError(Field.EMAIL)

        # validate username is not an email
        #TODO check usename is not an email
        #if self.validEmail(username):
        if False:
            raise IncorrectError(Field.EMAIL)

        # validate fields
        if not self.isFieldValid(username):
            raise InvalidError(Field.USERNAME)

        if not self.isFieldValid(fname):
            raise InvalidError(Field.F_NAME)

        if not self.isFieldValid(lname):
            raise InvalidError(Field.L_NAME)

        if not self.isFieldValid(password):
            raise InvalidError(Field.PASSWORD)

        # validate the email
        if not self.validEmail(email):
            raise InvalidError(Field.EMAIL)

        # add user
        c.execute("INSERT INTO users (email, username, fname, lname, password) VALUES (?,?,?,?,?)", [
                  email, username, fname, lname, password])
        if(commit):
            self.conn.commit()

    def validEmail(self, email):
        return True
        # for development email check is off(TURN BACK ON!!)
        #TODO turn email validater back on
        response = requests.get(
            "https://isitarealemail.com/api/email/validate",
            params={'email': email})

        status = response.json()['status']
        if status == "valid":
            return True
        return False

    def isFieldValid(self, field):
        # checks for these chars in field
        letters = ["\"", "'", ";", ":", "%", "\\", "/", "<", ">", "|", " "]
        for x in field:
            if(x in letters):
                return False
        return True

    def isFieldBlank(self, field):
        if(field == '' or field == None):
            return True
        return False

    def login(self, username, password):
        self.conn.row_factory = sqlite3.Row
        c = self.conn.cursor()

        # get user
        c.execute("select * FROM users WHERE username = ? OR email = ?",
                  [username, username])
        aRow = c.fetchone()

        # make sure the usename/email is there
        if(aRow == None):
            raise NotFoundError(Field.USERNAME)

        # make sure password is correct
        d = dict(aRow)
        if(d["password"] != password):
            raise IncorrectError(Field.PASSWORD)

        # return user
        return d

    def getUsers(self):
        c = self.conn.cursor()
        c.execute("SELECT * FROM users;")
        return c.fetchall()

    def commit(self):
        self.conn.commit()

    def close(self):
        self.conn.close()


##############
##exceptions##
##############
class AlreadyUsedError(RequestError):
    def __init__(self, field, message="Value is Already Used", error_ID=1):
        super().__init__(message, error_ID, field.value)


class NotFoundError(RequestError):
    def __init__(self, field, message="Value Can't be Found", error_ID=2):
        super().__init__(message, error_ID, field.value)


class IncorrectError(RequestError):
    def __init__(self, field, message="Value is Incorrect", error_ID=3):
        super().__init__(message, error_ID, field.value)


class InvalidError(RequestError):
    def __init__(self, field, message="Value is Invalid", error_ID=4):
        super().__init__(message, error_ID, field.value)


class BlankError(RequestError):
    def __init__(self, field, message="Value Can't be Blank", error_ID=5):
        super().__init__(message, error_ID, field.value)


class Field(Enum):
    NONE = 0
    EMAIL = 1
    USERNAME = 2
    F_NAME = 3
    L_NAME = 4
    PASSWORD = 5
