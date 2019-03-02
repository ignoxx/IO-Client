///scr_get_msub(sub)
var nsub = image_number;
if(argument_count > 0){
    nsub = argument[0];
}
return round( round(direction)*nsub/360 );
