/// gmcallback_start_game(username)
/*
    @descr This script will be called after the user passed his username over the form
    @param0 username:string
*/

var username = argument0;

if(string_length(username) > 0){
    sio_emit_quick_play(username);
}
