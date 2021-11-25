import sqlite3
from sqlite3.dbapi2 import DatabaseError

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

    def addUser(self, email, username, fname, lname, password, commit = True):
        c = self.conn.cursor()
        #validate username and email is free
        c.execute("SELECT username, email FROM users WHERE username = ? OR email = ?", [username, email])
        rows = c.fetchall()
        for row in rows:
            if(row[0] == username):
                raise AlreadyUsedError("username")
            if(row[1] == email):
                raise AlreadyUsedError("email")
 
        c.execute("INSERT INTO users (email, username, fname, lname, password) VALUES (?,?,?,?,?)", [email,username,fname, lname, password])
        if(commit):
            self.conn.commit()
    
    def login(self, username, password):
        self.conn.row_factory = sqlite3.Row
        c = self.conn.cursor()
        c.execute("select * from users where username = ?", [username])
        aRow = c.fetchone()
        if(aRow == None):
            raise NotFoundError("username")

        d=dict(aRow)
        if(d["password"] != password):
            raise IncorrectError("password")

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
class DatabaseError(Exception):
    def __init__(self, message, field):
        super().__init__(message)
        self.field = field

    def toString(self):
        return f"The {self.field} field {super}"

class AlreadyUsedError(DatabaseError):
    def __init__(self, field, message = "Value is Already Used"):
        super().__init__(message, field)

class NotFoundError(DatabaseError):
    def __init__(self, field, message = "Value Can't be Found"):
        super().__init__(message, field)

class IncorrectError(DatabaseError):
    def __init__(self, field, message = "Value is Incorrect"):
        super().__init__(message, field)

class InvalidError(DatabaseError):
    def __init__(self, field, message = "Value has Invalid Characters"):
        super().__init__(message, field)