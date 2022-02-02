let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
/*** player radio */
let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector('.player-radio');
let caja = document.querySelector('.caja');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

closePlayer.onclick = () => {
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    caja.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

closePlayer.onclick = () => {
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    caja.classList.toggle('active');
}

let boxes = document.querySelectorAll('.caja');

boxes.forEach(caja => {

    caja.onclick = () => {
        let src = caja.getAttribute('data-src');
        let text = caja.querySelector('.btn').innerText;
        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        caja.classList.add('active');
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }

});