/// sio_emit_quick_play(username)
/*
    @descr Tell the server that we want to play
    @param0 username:string
*/

var username = argument0;

var eventName = Net_QuickPlay;

// This is our packet
var data = ds_map_create();
  data[? "username"] = username;
  data[? "x"] = x;
  data[? "y"] = y;
  sio_emit(eventName, json_encode(data));
ds_map_destroy(data);
