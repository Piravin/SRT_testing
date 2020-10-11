from flask import Blueprint
checks = Blueprint('checks',__name__)

class Checker():
    
    @staticmethod
    def pass_chk(user, password):
        return True