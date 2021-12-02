import flask

class RequestHandler:
    @classmethod
    def getResponse(self, payload, error = None):
        if error == None:
            status = 0
            value = 0
        elif issubclass(type(error), RequestError):
            status = error.error_ID
            value = error.value
        else:
            status = -1
            value = 0

        jd = {"status": {"status": status, "value": value}, "payload": payload}
        response = flask.make_response(jd)
        response.headers['content-type'] = 'application/json'
        return response
    
class RequestError(Exception):
    def __init__(self, message, error_ID, value):
        super().__init__(message)
        self.error_ID = error_ID
        self.value = value