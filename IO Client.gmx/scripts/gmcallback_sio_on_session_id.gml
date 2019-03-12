// Decode the received JSON string to DS Map
var data = json_decode(argument[0]);

global.sessionId = data[? "sessionId"];

log("sessionId: " + string(global.sessionId));
