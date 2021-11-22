import sqlite3

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
        c.execute(f"INSERT INTO users (email, username, fname, lname, password) VALUES ('{email}', '{username}', '{fname}', '{lname}', '{password}');")
        if(commit):
            self.conn.commit()

    def getUsers(self):
        c = self.conn.cursor()
        c.execute("SELECT * FROM users;")
        

    def commit(self):
        self.conn.commit()

    def close(self):
        self.conn.close()