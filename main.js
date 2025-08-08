const _h1 = document.querySelector('main>#sec1>h1')
const _imgHeader = document.querySelector('main>#sec1>img')
const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')
const textFirst = document.querySelectorAll('.first>div>p')
const textSecond = document.querySelectorAll('.second>div>p')



////calc offset////
const offsetSec2 = sec2.offsetTop
////calc offset////


window.addEventListener('scroll', () => {
    const st = window.scrollY;
    /////imgHeader////
    const scrollPercent = Math.min(st / 500, 1);
    const scale = 1 + scrollPercent * 0.4;
    _imgHeader.style.transform = `scale(${scale})`;


    ////sec2////
    const headerHight = 83

    if ((st + headerHight) >= offsetSec2) {
        sec2.classList.add('fix')
    } else {
        sec2.classList.remove('fix')
    }
    /////////
    if (st >= (offsetSec2 + 280)) {
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
})

