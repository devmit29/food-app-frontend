const video = document.querySelector('#video');
const playpause = document.querySelector('#play-pause');
const icon = document.querySelector('.play-pause');
const cartbtn = document.querySelector('.cart-btn');
const cartClosebtn = document.querySelector('.cart-close-btn');
const requestbtn = document.querySelector('.request-dish-btn');
const reqClosebtn = document.querySelector('.req-cancel-btn');
const reqSubmitbtn = document.querySelector('.req-submit-btn');
const hamburger = document.querySelector('.hamburger-menu');


hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu').style;
    if (menu.display === 'none') {
        menu.display = 'flex';
    } else {
        menu.display = 'none';
    }
})

cartbtn.addEventListener('click', () => {
    document.querySelector('.cart-modal').classList.add('pop-up');
    document.querySelector('body').style.overflow = 'hidden';
})
 
cartClosebtn.addEventListener('click', () => {
    document.querySelector('.cart-modal').classList.remove('pop-up');
    document.querySelector('body').style.overflow = 'auto';
})


requestbtn.addEventListener('click', () => {
    document.querySelector('.request-dish-modal').classList.add('req-pop-up');
    document.querySelector('body').style.overflow = 'hidden';
})

reqClosebtn.addEventListener('click', () => {
    document.querySelector('.request-dish-modal').classList.remove('req-pop-up');
    document.querySelector('body').style.overflow = 'auto';
})
 
reqSubmitbtn.addEventListener('click', () => {
    document.querySelector('.request-dish-modal').classList.remove('req-pop-up');
    document.querySelector('body').style.overflow = 'auto';
 })
 

new Swiper('.card-wrapper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, 
    centeredSlides: true, 
    navigation: {
        nextEl: '.right-arrow-container',
        prevEl: '.left-arrow-container',
    },
    breakpointsBase: 'container',
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        531: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 56,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    
});

video.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        icon.classList.add('hide');
    } else {
        video.pause();
        icon.classList.remove('hide');
    }
})
icon.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        icon.classList.add('hide');
    }
 })
 
let isPlaying = false;

function TogglePlay() {
    if (isPlaying) {
        video.pause();
        icon.classList.add('hide');

    } else {
        video.play();
        icon.classList.remove('hide');
    }
    isPlaying = !isPlaying;
}