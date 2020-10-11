from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room, leave_room, Namespace
from datetime import timedelta
from flask_restful import Api, Resource
import socket
import asyncio
from concurrent.futures import ThreadPoolExecutor
import functools
import nest_asyncio
nest_asyncio.apply()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ASDFKAJSGJHA3W9845769QERFALKJDHSFO8Q74'
app.permanent_session_lifetime = timedelta(minutes=3)
api = Api(app)
socketio = SocketIO(app)

@app.route('/')
def home():
    return render_template('index.html')

@socketio.on('connect',namespace='/rasp')
def rasp_connect():
    join_room('rasp')
    print('Raspberry is connected')
    emit('msg',"Raspberry is connected",room='web')
@socketio.on('disconnect',namespace='/rasp')
def rasp_disconnect():
    leave_room('rasp')
    print("Raspberry is disconnected")
    emit('msg','Raspberry is disconnected',room='web')
@socketio.on('data',namespace='/rasp')
def rasp_data(data):
    emit('msg',data,room='web')

@socketio.on('connect',namespace='/web')
def connect():
    join_room('web')
    print("Connected to web")

@socketio.on('disconnect',namespace='/web')
def disconnect():
    leave_room('web')
    print("Disconnected web")

@socketio.on('msg',namespace='/web')
def mes(msg):
    emit('msg',msg,room='web')
    print(f"A new message {msg}")
    print("message sent")

@socketio.on('data')
def dat(data):
    emit('msg',data,room='web')
    emit('msg',{"msg":f"New data {data}"})
    print("data updated")

_executor = ThreadPoolExecutor(1)
def receiver(conn):
    return conn.recv(1024)

# async def listener(conn, loop):
#     data = await loop.run_in_executor(_executor,functools.partial(receiver,conn))
    
#     if(len(data)>0):
#         socketio.emit('msg',{"msg":data.decode("utf-8")})
#         if data.decode('utf-8') == 'close':
#             return
#     loop.run_until_complete(listener(conn, loop))



# @app.before_first_request
# def connector():
#     soc = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    # soc.bind(('localhost',8000))
    # soc.listen()
    # print("Bound")
    # conn, addr = soc.accept()
    # print("Accepted")
    # loop = asyncio.new_event_loop()
    # asyncio.set_event_loop(loop)
    # loop.run_until_complete(listener(conn, loop))



# class Conn(Resource):
#     def post(self):
#         print("REQUESTED")
#         self.conn = connector()
#         listener(self.conn)
#         return {}
# api.add_resource(Conn,'/connect')

if __name__ == "__main__":
    socketio.run(app)
