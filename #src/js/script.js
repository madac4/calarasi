@@include('slider.js', {});
@@include('defaultSelect.js', {});

if (document.querySelector('.language')) {
    const languageToggler = document.querySelector('.current-lang');

    languageToggler.addEventListener('click', () => {
        languageToggler.classList.toggle('open');
        languageToggler.nextElementSibling.classList.toggle('open')
    })
}

if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const main = document.querySelector('main');

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
            if (scrollPos + headerH >= wrapperPosition) {
                header.classList.remove('fixed')
                main.style.marginTop = `0px`
                horizontalWrapper.classList.add('sticky')
            } else{
                horizontalWrapper.classList.remove('sticky')
            }
            
        }
    })

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
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


