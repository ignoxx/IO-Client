gml_pragma("global", "sio_init()");

//Global vars
global.ip = "localhost";
global.port = 5000;
global.sessionId = "";
global.uniqueId = jchtml5_session_storage_get("uniqueId");

//SocketIO
sio_connect(global.ip, global.port);

//Add events =)
sio_addEvent(Net_QuickPlay);
sio_addEvent(Net_SessionId);
sio_addEvent(Net_Disconnect);
sio_addEvent(Net_UniqueId);

