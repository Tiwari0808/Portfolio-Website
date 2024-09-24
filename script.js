console.log('hello');

let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

opentab = (tabname, event) => {
    tablinks.forEach(tablink => {
        tablink.classList.remove("active-link");
    });

    Array.from(tabcontents).forEach(tabcontent => {
        tabcontent.classList.remove("active-tab");
    });

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};


let xMark = document.querySelector('.fa-solid');
let menuIcon = document.querySelector('.fa-bars');
let sidemenu = document.querySelector('#sidemenu');

function openMenu(){
    sidemenu.style.right = '0';
}

closeMenu = () => {
    sidemenu.style.right = '-40%';
};


const scriptURL = 'https://script.google.com/macros/s/AKfycbyKE8sPjkKmLzQhAiPQABpevxHdgL7XR4waeLC3iUM52FNykgd-yjT7194HcIaA-zgS/exec';
const form = document.forms['submit-to-google-sheet'];
const formResponse = document.querySelector('.form-response');


form.addEventListener('submit', e => {
    e.preventDefault();
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        formResponse.innerHTML = 'Form submitted successfully!';
        form.reset(); 
    })
    .catch(error => {
        formResponse.innerHTML = 'Form submitted successfully!';
    });
});




