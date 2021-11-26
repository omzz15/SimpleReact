from flask import Flask, render_template
from flask_cors import CORS
from flask_restful import Api

from addUser import AddUser
from loginUser import LoginUser
from database import Database

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(AddUser, '/add-user')
api.add_resource(LoginUser, '/login')

if __name__ == '__main__':
    db = Database()
    db.make()
    db.close()
    app.run(port='80', debug=True)
        
