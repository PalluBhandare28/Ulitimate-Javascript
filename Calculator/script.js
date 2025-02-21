function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
let string=document.getElementById('input')

function appendtoDisplay(input){
  string.value += input   
}
function clearDisplay(){
  string.value='';
}
function Calculate(){
  string.value=eval(string.value);
}
function Delete(){
  string.value=string.value.slice(0,-1)
}
