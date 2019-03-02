gml_pragma("global", "sio_init()");

//Global vars
global.ip = "localhost";
global.port = 3000;

//SocketIO
sio_connect(global.ip, global.port);

//Add events
//sio_addEvent("pong");


