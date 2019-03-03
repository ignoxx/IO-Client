gml_pragma("global", "sio_init()");

//Global vars
global.ip = "localhost";
global.port = 5000;

//SocketIO
sio_connect(global.ip, global.port);

//Add events
sio_addEvent(Net_QuickPlay);
sio_addEvent(Net_SessionId);


