
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    drawChessBoard();

    //Draw pawns
    placeFigure("wolf", 4, 8);
    placeFigure("sheep", 1, 1);
    placeFigure("sheep", 3, 1);
    placeFigure("sheep", 5, 1);
    placeFigure("sheep", 7, 1);

    //Add movement
    setEventListeners();
    //Reset
    setResetButton();
    //One party moves at time

    //Winning condition checking

});