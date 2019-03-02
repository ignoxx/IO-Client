///scr_calc_rank_sprite(id)
with(argument[0]){
    if(rank_position == 1){rank_sprite = 14;} else //Krone
    if(rank_position == 2){rank_sprite = 13;} else //Flash
    if(rank_position == 3){rank_sprite = 12;} else //Double sword
    
    if(rank_position > 3 && rank_position < 6){rank_sprite = 11}; else // 3 stars  // 2 players
    if(rank_position > 5 && rank_position < 10){rank_sprite = 10}; else // 2 stars // 4 player
    if(rank_position > 9 && rank_position < 14){rank_sprite = 9}; else // 1 stars // 4 player
    
    if(rank_position > 13 && rank_position < 18){rank_sprite = 8}; else // x-3 // 2 player
    if(rank_position > 17 && rank_position < 22){rank_sprite = 7}; else // x-2 // 4 player
    if(rank_position > 21 && rank_position < 26){rank_sprite = 6}; else // x-1 // 4 player
    
    if(rank_position > 25 && rank_position < 30){rank_sprite = 5}; else// 3 arrows // 4 player
    if(rank_position > 29 && rank_position < 38){rank_sprite = 4}; else// 2 arrows  // 8 player
    if(rank_position > 37 && rank_position < 46){rank_sprite = 3}; else// 1 arrows // 8 player
    
    if(rank_position > 45 && rank_position < 54){rank_sprite = 2}; else// 3 lines // 8 player
    if(rank_position > 53 && rank_position < 62){rank_sprite = 1}; else// 2 lines // 8 player
    {rank_sprite = 0};// 1 line // all other players
    
}
