// Decode the received JSON string to DS Map
var data = json_decode(argument[0]);

if(jchtml5_session_storage_get("uniqueId") == "undefined") {
    global.uniqueId = data[? "uniqueId"];
    jchtml5_session_storage_set("uniqueId", global.uniqueId);
    
    log("set new uid " + string(global.uniqueId));
}
