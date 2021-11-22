from flask import Flask, render_template
from flask_cors import CORS
from flask_restful import Api

from addUser import AddUser
from database import Database

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

api.add_resource(AddUser, '/add-user')

if __name__ == '__main__':
    db = Database()
    db.make()
    db.close()
    app.run(port='80', debug=True)
        
