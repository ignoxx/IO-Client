// on_disconnect()
/* 
   @description Gets called after a client leaves the session
   @arg0 event name
   @arg1 data
*/

var name = argument[0]; 
var data = argument[1];

var player = global.players[? data[? "id"]];

if(instance_exists(player)){
    with(player){
        instance_destroy();
    }
    
    ds_map_delete(global.players, data[? "id"]);
}

