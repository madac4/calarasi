@@include('slider.js', {});
@@include('ellipsis.min.js', {});

AOS.init();


if(document.querySelector('.language')){
    const languageToggler = document.querySelector('.current-lang');
    
    languageToggler.addEventListener('click', () =>{
        languageToggler.classList.toggle('open');
        languageToggler.nextElementSibling.classList.toggle('open')
    })
}

if(document.querySelector('.header')){
    const header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const main = document.querySelector('main');

    document.addEventListener('scroll', () =>{
        const scrollPos = window.pageYOffset;
        const headerH = header.offsetHeight;

        if(scrollPos >= headerH){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }

        if (header.classList.contains('white')) {
            if(scrollPos >= headerH){
                header.classList.add('fixed');
                main.style.marginTop = `${headerH}px`
            }else{
                header.classList.remove('fixed')
                main.style.marginTop = `0px`
            }
            
        }
    })

    burger.addEventListener('click', () =>{
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}

