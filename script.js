console.log('hello')

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
}

let xMark = document.querySelector('.fa-solid');
let menuIcon = document.querySelector('.fa-bars');
let sidemenu = document.querySelector('#sidemenu');

function openMenu(){
sidemenu.style.right = '0';
// console.log('open')

}

closeMenu =()=>{
    sidemenu.style.right = '-40%';
    // console.log('close')

    }