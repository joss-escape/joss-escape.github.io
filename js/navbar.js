window.onscroll = function() {
    scrolling()
}

var hOmbre = 775;

var navbar = document.getElementById("navbar");

function scrolling {
    if (window.pageYOffset >= hOmbre) {
        navbar.classList.add("ombre");
    } else {
        navbar.classList.remove("ombre");
    }
}