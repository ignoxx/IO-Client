$(() => {
    let setGameNamePos = function() {
        let gameName = $(".game-name");
        let stringWidth = gameName.width();
        let windowWidth = $(window).width();

        $(".game-name").css("left", (windowWidth/2) - (stringWidth/2) );
    }

    // Init
    setGameNamePos();


    // Events
    $("#btnUsername").click(() => {
        console.log("penis");
    });

    $( window ).resize(setGameNamePos);
    
    
});
