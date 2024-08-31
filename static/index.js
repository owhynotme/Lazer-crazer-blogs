$(window).on("load", () => {
    $("#arrow-container").addClass("finished");

    let x = 200; //y-axis pixel displacement
    const y = 2700; //delay in milliseconds

    setTimeout(() => {
        window.scroll(0, x);
        x += 5; //if you want to increase speed simply increase increment interval
    }, y);
});

// PRICING
const addClass = (x, className) => x.classList.add(className);
const removeClass = (x, className) => x.classList.remove(className);

const glow = (x) => addClass(x, "active");
const unglow = (x) => removeClass(x, "active");
const bookA = (x) => addClass(x, "active");
const book = (x) => removeClass(x, "active");

// NAVBAR HIDE ON SCROLL
let lastScroll = 0;
window.addEventListener("scroll", () => {
    const value = window.scrollY;

    $("#move").css("top", value * 0.20 + "px");
    $("#move2, #move3").css("top", value * 0.07 + "px");
    $("#move4").css("top", value * 0.08 + "px");
    $("#move5, #move6").css("top", value * 0.1 + "px");
    $("#move7, #move8, #move9, #move10").css("top", value * 0.13 + "px");
    $("#move11, #move12, #move13, #move14, #move15").css(
        "top",
        value * 0.15 + "px"
    );
    $("#gallery-row1").css("left", value * -0.5 + "px");
    $("#gallery-row2").css("left", value * 0.5 + "px");

    const header = $("#mobile-navbar")[0];
    if (value <= lastScroll || value < 100) {
        addClass(header, "active");
        removeClass(header, "hidden");
    } else {
        addClass(header, "hidden");
        removeClass(header, "active");
    }

    lastScroll = value;
});

// CTAs
const incSize = (x) => addClass(x, "active");
const decSize = (x) => removeClass(x, "active");
const incSize2 = (x) => addClass(x, "activeM");
const decSize2 = (x) => removeClass(x, "activeM");

// TESTIMONIALS
$("#testimonials-box-content, #testimonials-box-content2").slick({
    prevArrow:
        "<img src= '../static/img/prevArrow.png'class='slick-prev pull-left' alt='not-found'></img>",
    nextArrow:
        "<img src= '../static/img/nextArrow.png' class='slick-next pull-right' alt='not-found'></img>",
    settings: { arrows: true },
});

const contactForm = document.querySelector("#contactForm");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitButton = document.querySelector("#sendRequest");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        message: message.value,
    };
    const xhr = new XMLHttpRequest();
    const thankYou = () => window.location.assign("/thank");

    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(formData));
    xhr.onload = () => {
        console.log(xhr.responseText);
        if (xhr.responseText == "success") {
            name.value = "";
            email.value = "";
            phone.value = "";
            message.value = "";
        } else {
            alert("Something went wrong!");
        }
        thankYou();
    };
});