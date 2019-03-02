/// emit_login(dx, dy)
/*
    @description Join game session
    @arg0 dx
    @arg1 dy
*/
var i = ds_map_create();
i[? "dx"] = argument[0];
i[? "dy"] = argument[1];

 socket_emit("move", json_encode(i));
 
ds_map_destroy(i);

