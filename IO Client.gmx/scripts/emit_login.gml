/// emit_login(username, password)
/*
    @description Join game session
    @arg0 username
    @arg1 password
*/
var i = ds_map_create();
i[? "username"] = argument[0];
i[? "password"] = argument[1];

 socket_emit("login", json_encode(i));
 
ds_map_destroy(i);

