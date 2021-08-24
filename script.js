var cookieBox = document.querySelector(".cookieDisclaimerBox")

function hide(button) {
    cookieBox.remove(".cookieDisclaimerBox");
}

var tempF2C = document.querySelector(".highTemp");
function degreeSelection() {  
            tempF2C.innerText = "Celsius";
}