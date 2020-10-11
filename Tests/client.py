import socketio

socio = socketio.Client()

@socio.on('connect')
def connect():
    print("Connected")

@socio.on('disconnect')
def disconnect():
    print("Disconnected")
    try:
        socio.connect('http://localhost:5000',namespaces=['/rasp'])
    except:
        print("Failed.. \n trying to reconnect")
        socio.connect('http://localhost:5000',namespaces=['/rasp'])

@socio.on('data')
def mes(data):
    print(data)

socio.connect('http://localhost:5000',namespaces=['/rasp'])
socio.emit('msg','clientuhhh')
while True:
    cmd = input()
    socio.emit('data',f"from python: {cmd}")
    if(cmd == 'close'):
        break
        


