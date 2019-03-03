$(() => {
    let setGameNamePos = function() {
        let gameName = $(".game-name");
        let stringWidth = gameName.width();
        let windowWidth = $(window).width();

        $(".game-name").css("left", (windowWidth/2) - (stringWidth/2) );
    }

    let enableGameCanvas = function() {
        let gameCanvas = $("#game");
        GameMaker_Init();
        gameCanvas.show();
    }

    let disableGameCanvas = function() {
        let gameCanvas = $("#game");
        gameCanvas.hide();
    }

    // Init
    disableGameCanvas();
    setInterval(setGameNamePos, 10);
    


    // Events
    $("#btnUsername").click(() => {
        let username = $("#txtUsername")
        if( username.val().length > 0 ) {
            enableGameCanvas();
            gml_Script_gmcallback_start_game(-1, -1, username.val());
        }
    });

    $( window ).resize(setGameNamePos);
    
    
});
