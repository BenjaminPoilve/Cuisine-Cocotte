document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("cocotte").src = "/static/images/illustration/cocottes/r"+Math.floor(Math.random() * Math.floor(6))+".png";
  var letters = document.getElementsByClassName("letter");
  var i;
  maxindex=0;
  for (i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseenter", function( event ) {
    // on met l'accent sur la cible de mouseenter
    maxindex+=1
    event.target.style.zIndex=maxindex;
    }, false);
  }



});
