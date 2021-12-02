import flask
from flask_restful import Resource, request
from database import Database
from requestHandler import RequestHandler

class LoginUser(Resource):
    def get(self):
        return {"status": 403}
    
    def post(self):
        db = Database()
        try:
            userDict = db.login(request.json['username'], request.json['password'])
        except Exception as e:
            return RequestHandler.getResponse(None, e)
        db.close()
        return RequestHandler.getResponse(userDict)