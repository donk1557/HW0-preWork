
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "300px";
})

document.getElementById("button2").addEventListener("click", function(){
   
    document.getElementById("box").style.backgroundColor = "blue";
})

document.getElementById("button3").addEventListener("click", function() {

    document.getElementById("box").style.opacity = "0.35";
})

document.getElementById("button4").addEventListener("click", function() {

    document.getElementById("box").style.borderRadius = "50%";
})

document.getElementById("button5").addEventListener("click", function() {

    document.getElementById("box").style.background = 
    "url(https://img.favpng.com/15/8/21/rabbit-magic-clip-art-png-favpng-ceuwe6xPnQGcS92AUS808Vupc.jpg)";

    document.getElementById("box").style.backgroundSize = "cover";
    document.getElementById("box").style.backgroundRepeat = "no-repeat";
    document.getElementById("comText").innerHTML = "Hocus Pocus!";

})

document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box").style.background = "none";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1.0";
    document.getElementById("box").style.borderRadius = "0%";
    document.getElementById("comText").innerHTML = "Press the buttons to change the box!";
    
})