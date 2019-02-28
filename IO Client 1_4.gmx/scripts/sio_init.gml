gml_pragma("global", "sio_init()");

//Global vars
global.ip = "localhost";
global.port = 3000;

// Enums



//SocketIO
sio_connect(global.ip, global.port);

//Add events
sio_addEvent(NET_QuickPlay);
sio_addEvent(NET_Register);
