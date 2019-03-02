///scr_turn(sub)
var nsub = image_number;
if(argument_count > 0){
    nsub = argument[0];
}

//TURN
if (sub != msub)
{
    if (sub < msub)
    {
        if ((sub - msub) < (-(nsub/2)))
        {
            sub -= 1;
            if (sub < 0) sub = nsub;
        }
        else
        {
            sub += 1;
            if (sub > nsub) sub = 0;
        }  
    }
    
    if (sub > msub)
    {
        if ((msub - sub) < (-(nsub/2)))
        {
            sub += 1;
            if (sub > nsub) sub = 0;
        }
        else
        {
            sub -= 1;
            if (sub < 0) sub = nsub;
        }  
    }
}
