var noofDrums = document.querySelectorAll("button").length;

for (var i = 0 ;i<noofDrums ; i++){
    
    // screen button
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        // var  audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        // this.style.color = "red";
        // alert("clicked bruh");
        var buttonInnerHtml = this.innerHTML;
        // console.log(buttonInnerHtml);
        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

    // keyboard button
    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonAnimation(event.key);
    });



    function makesound(buttonInnerHtml){
        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                var kickbass = new Audio("sounds/kick-bass.mp3");
                kickbass.play();
                break;
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
    
        }
    }
}


function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
