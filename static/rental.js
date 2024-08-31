// TESTIMONIALS

$('#testimonials-box-content').slick({
    prevArrow: "<img src= '../static/img/prevArrow.png'class='slick-prev pull-left'  alt='not-found'></img>",
    nextArrow: "<img src= '../static/img/nextArrow.png' class='slick-next pull-right'  alt='not-found'></img>",
    settings: {
        arrows: true
    }
});
$('#testimonials-box-content2').slick({
    prevArrow: "<img src= '../static/img/prevArrow.png'class='slick-prev pull-left' alt='not-found' ></img>",
    nextArrow: "<img src= '../static/img/nextArrow.png' class='slick-next pull-right' alt='not-found' ></img>",
    mobileFirst: true,
    settings: {
        arrows: true
    }
});

window.addEventListener('scroll', function () {
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

const contactForm = document.querySelector("#contactForm");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitButton = document.querySelector("#sendRequest");


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        message: message.value,
    }
    let xhr = new XMLHttpRequest();
    function thankYou() {
        window.location.assign("/thank");
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
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
        thankYou();
    }
});