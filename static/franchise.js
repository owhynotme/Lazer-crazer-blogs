const contactForm = document.querySelector("#contactForm");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let select1 = document.getElementById("select1");
let message = document.getElementById("message");
let submitButton = document.querySelector("#sendRequest");


// STONES PARALLAX
const franchiseParallax1 = document.getElementById("move1");
const franchiseParallax2 = document.getElementById("move2");
const franchiseParallax3 = document.getElementById("move3");
const franchiseParallax4 = document.getElementById("move4");
const franchiseParallax5 = document.getElementById("move5");
const franchiseParallax6 = document.getElementById("move6");
const franchiseParallax7 = document.getElementById("move7");
const franchiseParallax8 = document.getElementById("move8");
const franchiseParallax9 = document.getElementById("move9");
const franchiseParallax10 = document.getElementById("move10");
const franchiseParallax11 = document.getElementById("move11");
const franchiseParallax12 = document.getElementById("move12");

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    franchiseParallax1.style.top = value * 0.09 + 'px';
    franchiseParallax2.style.top = value * 0.09 + 'px';
    franchiseParallax3.style.top = value * 0.09 + 'px';
    franchiseParallax4.style.top = value * 0.09 + 'px';
    franchiseParallax5.style.top = value * 0.09 + 'px';
    franchiseParallax6.style.top = value * 0.09 + 'px';
    franchiseParallax7.style.top = value * 0.09 + 'px';
    franchiseParallax8.style.top = value * 0.09 + 'px';
    franchiseParallax9.style.top = value * 0.09 + 'px';
    franchiseParallax10.style.top = value * 0.09 + 'px';
    franchiseParallax11.style.top = value * 0.05 + 'px';
    franchiseParallax12.style.top = value * 0.08 + 'px';

    // navbar visibility on scroll up and down
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('#mobile-navbar');

    if(scrollY <= this.lastScroll) {
        // header.style.visibility = 'visible'
        header.classList.add('active')
        header.classList.remove('hidden')
    }
    else if (scrollY < 100){
        // header.style.visibility = 'visible'
        header.classList.add('active')
        header.classList.remove('hidden')
    } 
    else {
        // header.style.visibility = 'hidden';
        header.classList.add('hidden')
        header.classList.remove('active')
    }  

    this.lastScroll = scrollY;
});




contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        select1: select1.value,
        message: message.value,
    }
    let xhr = new XMLHttpRequest();
    function thankYou() {
        window.location.assign("/franchiseThank");
    };

    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(formData));
    xhr.onload = function () {
        console.log(xhr.responseText);
        
        if (xhr.responseText == 'success') {
            name.value = '';
            email.value = '';
            phone.value = '';
            select1.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
        thankYou();
    }
});