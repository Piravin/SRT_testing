import socket 
soc = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
soc.connect(("localhost",5000))
soc.send(str.encode("codket"))