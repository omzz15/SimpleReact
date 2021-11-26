import json
import flask
from flask_restful import Resource, request
from database import Database

class LoginUser(Resource):
    def get(self):
        return {"status": 403}
    
    def post(self):
        db = Database()
        try:
            userDict = db.login(request.json['username'], request.json['password'])
        except Exception as e:
            return {"status": {"error": str(e), "field": e.field} , "payload": None}
        db.close()
        jd = {"status": "OK", "payload": userDict}
        response = flask.make_response(jd)
        response.headers['content-type'] = 'application/json'
        return response
