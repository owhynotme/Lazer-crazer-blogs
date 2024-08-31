// LOADER

$(window).on("load", function () {
    move();
    $("#loading").delay(1000).fadeOut(800)
    $("#logo-background").addClass('active')
    $("#arrow1").addClass('active')
    $("#arrow2").addClass('active')
    $("#arrow3").addClass('active')
});

// Hamburger click events
const hamburger = document.querySelector("#hamburger-icon");
const items = document.querySelector("#nav-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    items.classList.toggle("active")
});


var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress");
        var perc = document.getElementById("progress-perc");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                perc.innerHTML = width + "%";
            }
        }
    }
}


// Fixed Country Code '+91'
var input = document.querySelector('input[type="tel"]');

input.addEventListener("keydown", function () {
    var oldVal = this.value;
    console.log(oldVal);
    var field = this;
    console.log("funciona");

    setTimeout(function () {
        if (field.value.indexOf('+91') !== 0) {
            field.value = oldVal;
        }
    }, 1);
});
