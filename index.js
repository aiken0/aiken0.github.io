const sideNav = document.querySelector(".sideNav");
const overlay = document.querySelector(".overlay");
const ham = document.querySelector(".ham");
const x = document.querySelector(".x");
const d = document.querySelectorAll(".do");

ham.addEventListener("click", toggleHamburger);
x.addEventListener("click", toggleHamburger);
overlay.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    overlay.classList.toggle("showOverlay");
    sideNav.classList.toggle("showNav");

}
const ham_men = document.querySelector('.ham>svg');
const r_size = window.onresize = () => {
    if (window.innerWidth <= '786') {
        ham_men.style.display = 'block';
        for (var i = 0; i < d.length; i++) {
            d[i].innerHTML = " Download for Phone";
        }

    } else {
        ham_men.style.display = 'none';
        for (var i = 0; i < d.length; i++) {
            d[i].innerHTML = " Download for Windows";
        }
    }
}

if (window.innerWidth <= '786') {
    ham_men.style.display = 'block';
    for (var i = 0; i < d.length; i++) {
        d[i].innerHTML = ' Download for Phone';
    }

} else {
    ham_men.style.display = 'none';
    for (var i = 0; i < d.length; i++) {
        d[i].innerHTML = ' Download for Windows';
    }

}