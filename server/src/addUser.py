from flask_restful import Resource, request
from database import Database

class AddUser(Resource):
    def get(self):
        return {"message": "Hello, World!"}
    
    def post(self):
        db = Database()
        form = request.form
        db.addUser(form.get("email"), form.get("username"), form.get("fname"), form.get("lname"), form.get("password"))
        db.close()