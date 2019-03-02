// on_connect()
/* 
   @description Gets called after a new client joins the session
   @arg0 event name
   @arg1 data
*/

var name = argument[0]; 
var data = argument[1]; 

global.session = data[? "sid"];


