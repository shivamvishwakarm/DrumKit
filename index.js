//Detecting Button Press

var numberOfDrumButton = document.querySelectorAll('.drum').length; //Storing the length of the class-drum in numberOfDrumButton variable 

var i = 0; //Initialing the variable for while loop.
while (i < numberOfDrumButton) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {


        var buttonInnerHtml = this.innerHTML; //Abstracting the innerhtml in drum class for example w,a,s,d,j,k,l.
        makesound(buttonInnerHtml); //Calling  makesound function and giving the this.innehtml as a parameter.
        buttonAnimation(buttonInnerHtml);
    });
    i++;

}

// Detecting Keyboard Press
document.addEventListener("keypress", function(event) { //event gives whole information about which keyboard button is pressed.
    // Calling the makesound function and give event.key as a parameter.
    makesound(event.key); //event.key gives which key character is pressed.\
    buttonAnimation(event.key);
})


//Checking the keyword and play sound related to that 
function makesound(key) {

    switch (key) {
        case "w":
            var tom1audio = new Audio("tom-1.mp3");
            tom1audio.play();
            break;
        case "a":
            var tom2audio = new Audio("tom-2.mp3");
            tom2audio.play();
            break;
        case "s":
            var tom3audio = new Audio("tom-3.mp3");
            tom3audio.play();
            break;
        case "d":
            var tom4audio = new Audio("tom-4.mp3");
            tom4audio.play();
            break;
        case "j":
            var snareaudio = new Audio("snare.mp3");
            snareaudio.play();
            break;
        case "k":
            var crashaudio = new Audio("crash.mp3");
            crashaudio.play();
            break;
        case "l":
            var kickaudio = new Audio("kick-bass.mp3");
            kickaudio.play();
            break;


        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");


    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100)
}