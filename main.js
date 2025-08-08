const _h1 = document.querySelector('main>#sec1>h1')
const _imgHeader = document.querySelector('main>#sec1>img')
const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')
const sec3 = document.getElementById('sec3')
const textFirst = document.querySelectorAll('.first>div>p')
const textSecond = document.querySelectorAll('.second>div>p')
const header = document.querySelector('header');



////calc offset////
const offsetSec2 = sec2.offsetTop
const offsetSec3 = sec3.offsetTop
sec3.style.top = `${offsetSec3 - window.innerHeight * 0.8}px`;
////calc offset////


let lastScroll = 0;
window.addEventListener('scroll', () => {
    const st = window.scrollY;

    ///header///
    if (st > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = st;
    ///header///


    /////imgsec1////
    const scrollPercent = Math.min(st / 500, 1);
    const scale = 1 + scrollPercent * 0.4;
    _imgHeader.style.transform = `scale(${scale})`;
    /////imgsec1////

    ////sec2////
    const headerHight = 83

    if ((st + headerHight) >= offsetSec2) {
        sec2.classList.add('fix')
    } else {
        sec2.classList.remove('fix')
    }
    /////////
    if (st >= (offsetSec2 + 240)) {
        textFirst.forEach((val) => {
            val.style.opacity = 0
            val.style.transform = `translateY(-100%)`
        })
        textSecond.forEach((val) => {
            val.style.opacity = 1
            val.style.transform = `translateY(0)`
        })

    } else {
        textFirst.forEach((val) => {
            val.style.opacity = 1
            val.style.transform = `translateY(0)`
        })
        textSecond.forEach((val) => {
            val.style.opacity = 0
            val.style.transform = `translateY(-100%)`
        })
    }


    /////
    if (st >= (offsetSec2 + 480)) {
        sec2.classList.remove('fix')
        sec2.style.top = `${offsetSec2 - 400}px`;
    } else {
        sec2.style.top = '';
    }

    ////sec2////

    ////star///
    const starLine = document.querySelector('.star>img');    

    let starRotate = st / 5;
    starLine.style.transform = `rotate(${starRotate}deg)`;


    const starLine2 = document.querySelector('.star2>img');    

    let starRotate2 = st / 5;
    starLine2.style.transform = `rotate(${starRotate2}deg)`;


})



