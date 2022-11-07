function init(){
//add your javascrip between these two lines of code
  function nameAlert(){
   var userInput = document.getElementById('entryinput').value;
    alert("Revathi Panyam: " + userInput);
   var alertOutput = document.getElementById('textoutput');
    alertOutput.innerHTML = userInput;
   //call the function 'nameAlert' when we click the alert
    var alertButton = document.getElementById('entrybutton');
  alertButton.addEventListener('click',nameAlert);
}
window.addEventListener('load', init);
