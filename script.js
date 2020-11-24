var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button")



function setColor(){

   color1.setAttribute("value", "#0093E9");
   color2.setAttribute("value", "#fdfd04");
} 


function setGradient(){
    body.style.background = 
    "linear-gradient(to right,"
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background +";";

   setColor();
   
}
css.textContent
color1.addEventListener("input",  
    setGradient
 )
 
color2.addEventListener("input",  setGradient
 )

 button.addEventListener("click", function(){
    var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);

    body.style.background = 
    "linear-gradient(to right,"
    +  randomColor1 
    + "," 
    +  randomColor2 
    + ")";

    css.textContent = body.style.background +";";

    color1.setAttribute("value", `${randomColor1}`);
    color2.setAttribute("value", `${randomColor1}`);
 })

 
 setColor();
