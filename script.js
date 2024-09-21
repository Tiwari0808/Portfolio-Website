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
    event.currentTarget.classList.add("expand");  // Add expand class for full width

}