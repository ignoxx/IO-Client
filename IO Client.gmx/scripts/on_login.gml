// on_login()
/* 
   @description Gets called after a new client joins the game
   @arg0 event name
   @arg1 data
*/

var name = argument[0]; 
var data = argument[1]; 

var player = oOther;
if(data[? "sid"] == global.session){
    if(!instance_exists(oPlayer)){
        player = oPlayer;
        global.logged_in = true;
    }
}

var i = instance_create(data[? "x"], data[? "y"], player);

with( i ){
    sid = data[? "sid"];
    playerid = data[? "id"];
    name = data[? "name"];
    spd = data[? "spd"];
    dx = data[? "dx"];
    dy = data[? "dy"];
    
    sub = scr_get_msub();
    
    log("id: " + string(playerid) + " name: " + string(name));
    
    global.players[? string(playerid)] = id;
}

