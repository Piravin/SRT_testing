from config import Configs
from checks import Checker
from time import sleep
from flask import (
    Flask,
    redirect,
    url_for,
    request,
    session,
    render_template,
    flash)
from threading import Thread
from datetime import timedelta
from flask_socketio import SocketIO, emit
import socket
import websockets
import asyncio
from multiprocessing import Process
import requests
from flask_restful import Api,Resource

app = Flask(__name__)
app.config['SECRET_KEY'] = Configs.FlaskSecretKey
app.permanent_session_lifetime = timedelta(minutes=3)
api = Api(app)
socio = SocketIO(app)

class live_handler(Resource):
    def post(self):
        socio.emit('msg','gotit')
        print("triggered")
        return {}
api.add_resource(live_handler,'/data')

@app.route("/login/",methods=['POST','GET'])
def login():
    if request.method == 'POST':
        user = request.form['username']
        password = request.form['password']
        if Checker.pass_chk(user,password):
            session['user'] = user
            flash("Password accepted","info")
            return redirect(url_for('home'))
        else:
            flash("Invalid username or password","info")
    else:
        if 'user' in session:
            return render_template('dashboard.html')
        else:
            return render_template("login.html")

@socio.on('connect')
def preinter(): 
    print("Connected")
    sleep(5)
    printer('fadsdaf')
@socio.on('msg')
def printer(msge): 
    print(msge)
    emit('msg',msge)

@socio.on('connect',namespace='/pi')
def preinter(): 
    print("Connected")
    sleep(5)
    printer('fadsdaf')
@socio.on('msg',namespace='/pi')
def printer(msge): 
    print(msge)
    emit('msg',msge)
@socio.on('disconnect')
def dis():
    print("disconnected")

@app.route('/')
@app.route('/home/')
def home():
    if 'user' in session:
        print(session)
        return render_template('dashboard.html',session=session)
    else:
        return redirect(url_for('login'))

# async def conn(websocket,path):
#     while True:
#         data = await websocket.recv()
#         print(data)
#         await websocket.send(data)

class Udp():
    @classmethod
    def udp(self):
        soc = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        soc.bind(('localhost',8080))
        print("socket bound")
        while True:
            data, addr = soc.recvfrom(1024)
            if len(data.decode('utf-8'))>0:
                print(data)
                requests.post('http://localhost:8000/data',data=str.encode('process'))
                # emit('msg',data.decode('utf-8'))


if __name__ == '__main__':
    # p2 = Process(target=app.run(host='localhost',port='8000',debug=True))
    # p2.start()
    # server = websockets.serve(conn,'localhost',3000)
    # asyncio.get_event_loop().run_until_complete(server)
    # asyncio.get_event_loop().run_forever()
    # print("p1")
    # p2.join()
    # print("p2")
    s = Process(target=Udp.udp)
    s.start()
    p = Process(target=socio.run(app,host='localhost',port='8000'))
    p.start()

