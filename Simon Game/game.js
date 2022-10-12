var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;


//Starting the game and calling the main function
$(document).keydown(function(){
    nextSequence();
});


//Generating a random number and using it to choose a color from the array
function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    if(level===0){
    level+=1;
    var gameTitle=$("h1").text("Level "+level);
    }
    //Chosing the random color from the array
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    //Flash the random chosen color box
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
};

//Restarting the game
function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    level=0;  
}

//User choosing a button, pushing it into array and playing sound
$(".btn").click(function(){       
        var userChosenColor=this.id;
        playSound(userChosenColor);
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
        var gameTitle=$("h1").text("Level "+level);
     }); 

//Function for playing random and user chosen sound
function playSound(chosenSound){
    var sound=new Audio("sounds/"+chosenSound+".mp3");
    sound.play();
};

//Animate the clicked button
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100);
    
};

//Check the users answer
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000);
            level+=1;
        }         

    }else{
        var gameOverSound=new Audio("sounds/wrong.mp3");
        gameOverSound.play();
        $("#level-title").text("Game Over, Press any key to restart!");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
            $("h1").text("Game Over, Press Any Key To Restart!");
            startOver();
        },200);
    }
};


