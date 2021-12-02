from flask_restful import Resource, request
from database import Database
from requestHandler import RequestHandler

class AddUser(Resource):
    def get(self):
        return {"status": 403}
    
    def post(self):
        db = Database()
        try:
            db.addUser(request.json['email'], request.json['username'], request.json['fname'], request.json['lname'], request.json['password'])
        except Exception as e:
            return RequestHandler.getResponse(None, e)
        db.close()
        return RequestHandler.getResponse(None)