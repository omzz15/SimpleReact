from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_restful import Api
from server.src.Message import Message

import sqlite3
from sqlite3 import Error
import os

app = Flask(__name__, static_url_path='', static_folder='../client/build')
CORS(app)
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

api.add_resource(Message, "/message")

if __name__ == '__main__':
    try:
        conn = sqlite3.connect("main.db")
        app.run(host='0.0.0.0', port='8080', debug=True)
        conn.close()
    except Error as e:
        print(e)
