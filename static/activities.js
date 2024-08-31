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
let select1 = document.getElementById("select1");
let message = document.getElementById("message");
let submitButton = document.querySelector("#sendRequest");


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
        window.location.assign("/otheractThank");
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