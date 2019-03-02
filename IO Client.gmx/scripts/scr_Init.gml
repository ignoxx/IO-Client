gml_pragma("global", "scr_Init()"); 

global.server_ip = "127.0.0.1";//192.168.4.4
global.server_port = 5000;
global.session = "not connected";
global.keep_socket_update = true;
global.logged_in = false;

//Game related
global.players = ds_map_create();
global.screen_shake = false;
global.__deltaTime = 1;


