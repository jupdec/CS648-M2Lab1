function rockPaperScissors(){
    "use strict";
    var playagain = true;
    while(playagain){
        var comp = Math.floor(Math.random()*3);  // 1 is Rock, 2 is Paper and 3 is Scissor 
        window.console.log(comp);
        var user = parseInt(window.prompt("Enter your choice 1,2 or 3? 1.Rock 2.Paper 3.Scissor"));
        
        var isRock = Boolean (comp==1);
        var isPaper = Boolean (comp==2);
        var isScissors = Boolean (comp==3);

        var isUserRock = Boolean (user==1);
        var isUserPaper = Boolean (user==2);
        var isUserScissors = Boolean (user==3);

        if (isRock) {

            if (isUserRock) {
                window.alert("It's a draw.");
            } else if (isUserPaper) {
                window.alert("You win!");
            } else if (isUserScissors) {
                window.alert("You lose.");
            } else {
                window.alert("Invalid choice.");
            }
        } else if (isPaper) {
            
            if (isUserPaper) {
                window.alert("It's a draw.");
            } else if (isUserScissors) {
                window.alert("You win!");
            } else if (isUserRock) {
                window.alert("You lose.");
            } else {
                window.alert("Invalid choice.");
            }
        } else {

            if (isUserScissors) {
                window.alert("It's a draw.");
            } else if (isUserRock) {
                window.alert("You win!");
            } else if (isUserPaper) {
                window.alert("You lose.");
            } else {
                window.alert("Invalid choice.")
            }
        }
        var play = (window.prompt("Do you want to play again Y/N ?")).toLowerCase();
        if (play == 'n'){
            playagain = false
        }
    }
}
rockPaperScissors();