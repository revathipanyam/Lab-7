function init(){
//add your javascrip between these two lines of code
 function nameAlert(){
    var userInput = document.getElementById('entryinput').value;
    alert(" Revathi Panyam : " + userInput);
    var alertOutput = document.getElementById('textoutput');
    alertOutput.innerHTML = userInput;
  }
  //Call the nameAlert function when we click the button
  var alertButton = document.getElementById('entrybutton');
  alertButton.addEventListener('click',nameAlert);
}
window.addEventListener('load', init);
