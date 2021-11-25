import json
import flask
from flask_restful import Resource, request
from database import Database

class LoginUser(Resource):
    def get(self):
        return {"status": 403}
    
    def post(self):
        print(request.json)
        db = Database()
        userDict = db.login(request.json['username'], request.json['password'])
        db.close()
        jd = json.dumps(userDict)
        response = flask.make_response(jd)
        response.headers['content-type'] = 'application/json'
        return response
