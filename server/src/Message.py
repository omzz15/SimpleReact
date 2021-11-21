from flask_restful import Api, Resource

class Message(Resource):
    def get(self):
        return {"message": "hello world"}

