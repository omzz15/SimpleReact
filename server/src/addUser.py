from flask_restful import Resource, request
from database import Database

class AddUser(Resource):
    def get(self):
        return {"status": 403}
    
    def post(self):
        db = Database()
        try:
            db.addUser(request.json['email'], request.json['username'], request.json['fname'], request.json['lname'], request.json['password'])
        except Exception as e:
            return {"status": {"error": str(e), "field": e.field}, "payload": None}
        db.close()
        return {"status": "OK", "payload": None}