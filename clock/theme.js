 
 // SCRIPT FOR THEME MUSIC (play, pause on click)

 function play() {
    var audio = document.getElementById("audio");

    if(audio.paused)
    {
      audio.play();
      audio.loop=true;
       }
    else {
      audio.pause();
    }
  }