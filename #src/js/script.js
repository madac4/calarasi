@@include('slider.js', {});
@@include('defaultSelect.js', {});

window.__forceSmoothScrollPolyfill__ = true;


if (document.querySelector('.language')) {
    const languageToggler = document.querySelector('.current-lang');

    languageToggler.addEventListener('click', () => {
        languageToggler.classList.toggle('open');
        languageToggler.nextElementSibling.classList.toggle('open')
    })
}

if (document.querySelector('.header')) {
    var header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const main = document.querySelector('main');
    const toTop = document.querySelector('.to-top');


    document.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset;
        const headerH = header.offsetHeight;

        if (scrollPos >= headerH) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }

        if (header.classList.contains('white')) {
            if (scrollPos >= headerH) {
                header.classList.add('fixed');
                main.style.marginTop = `${headerH}px`
            } else {
                header.classList.remove('fixed')
                main.style.marginTop = `0px`
            }
        }

        const horizontalWrapper = document.querySelector('.horizontal-wrapper');
        if (horizontalWrapper) {
            const wrapperPosition = horizontalWrapper.offsetTop
            if (scrollPos + headerH >= wrapperPosition + 100) {
                header.classList.remove('fixed')
                main.style.marginTop = `0px`
                horizontalWrapper.classList.add('sticky')
            } else {
                horizontalWrapper.classList.remove('sticky')
            }

        }

        // if (document.documentElement.scrollTop <= headerH) {
        //     toTop.style.display = "none"
        // } else {
        //     toTop.style.display = "block"
        // }
    })

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('lock');
    })



    let options = { top: 0, left: 0, behavior: 'smooth' }; // left and top are coordinates
    // toTop.addEventListener('click', () => { window.scroll(options) });

}


AOS.init();



// document.addEventListener('DOMContentLoaded', () =>{
//     const modalSubmit = document.querySelector('#check-modal')
//     const overlay = document.querySelector('.overlay');
//     const modal = document.querySelector('.modal');
//     modal.classList.add('open');
//     overlay.classList.add('open')
//     document.body.classList.add('lock')

//     modalSubmit.addEventListener('click', () =>{
//         modal.classList.remove('open')
//         overlay.classList.remove('open')
//         document.body.classList.remove('lock')
//     })
// })

if ("ontouchstart" in document.documentElement){ 
    const header = document.querySelector('.header')
    if (header) {
        const withMenu = header.querySelectorAll('.with-submenu');
        const withSublist = header.querySelectorAll('.with-sublist');
        withMenu.forEach(item =>{
            item.querySelector('a').addEventListener('click', () =>{
                item.classList.toggle('open');
            });
        })
        withSublist.forEach(el =>{
            el.querySelector('a').addEventListener('click', () =>{
                el.querySelector('.small-list').classList.toggle('open');
            });
        })
    }
    
}