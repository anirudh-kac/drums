var n = document.querySelectorAll(".drum").length; // find number of drums

//add event listener to all the drums to detect mouse click and run function handleClick()
for (i = 0; i < n; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

// define function handleClick
function handleClick() {

  var buttonInnerHTML = this.innerHTML;
  play(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);


}

// add event listener to the documnet to sense key press and run functio  handleKeyPress
document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
  var pressedKey=event.key;
  play(pressedKey);
  buttonAnimation(pressedKey);

}

// define function to play sound based on value of KEY

function play(KEY) {

  switch (KEY) {
    case 'w':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'a':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 's':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'd':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'j':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'k':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 'l':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(KEY);
  }

}

// function for animation of buttonAnimation

function buttonAnimation(n){
  var activeButton =document.querySelector("."+n);
  activeButton.classList.add("pressed");
  setTimeout( function(){
    activeButton.classList.remove("pressed");
  },100);
}
