// on_move()
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
        if(player != oPlayer){
            dx = data[? "dx"];
            dy = data[? "dy"];
            
            direction = point_direction(x, y, dx, dy);
            msub = scr_get_msub();
        }
    }
}

