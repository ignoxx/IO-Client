///scr_string_thousands(real)
///Returns argument0 as a string with commas at every thousand digit
///eg 1234567890 becomes 1,234,567,890
///Created by Andrew McCluskey

var str,stl,rtn,place;

//String to be passed
if(is_real(argument[0])){
    str = string(round(argument0)); 
}else{
    str = argument[0];
}

stl=string_length(str) //Char length of that string
rtn="" //What to return (ignored if string is under four digits long)

if stl<=3
{
    return str;
}

else
{
    place=((stl-1) mod 3)+1;
    
    rtn+=string_copy(str,1,place)
    
    while(place<string_length(str))
    {
        rtn+=","
        rtn+=string_copy(str,place+1,3)
        place+=3
    }
    
    return rtn;
}
