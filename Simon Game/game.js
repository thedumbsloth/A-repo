userClickedPattern = [];
var level = 0;
gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;

function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();

playSound(randomChosenColour);


level++;
$("h1").text("Level " + level);

}

$(".btn").click(function(){
   
    userChosenColour = this.id;
userClickedPattern.push(userChosenColour);
checkAnswer(userClickedPattern.length-1);
playSound(userChosenColour);
animatePress(userChosenColour);
});

function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel] == gamePattern[currentLevel])
console.log("success");
else
{

    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    startover();
    $("h1").text("Game Over, Press Any Key to Restart");
    
}

if(currentLevel == gamePattern.length-1){
    userClickedPattern = [];

setTimeout(function() {
    nextSequence();
}, 1000);
}

}

function startover(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}




$("body").keydown(function(){
    if(started == false)
    nextSequence();
    started = true;
   
})



function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
    // console.log("ok");
}

