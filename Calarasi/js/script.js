let sliders = document.querySelectorAll('.swiper');
if(sliders){
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')){
            let slider_items = slider.children;
            if(slider_items){
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');                 
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if(slider.classList.contains('swiper_scroll')){
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if(slider.classList.contains('gallery')){
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) {}

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if(sliderScollItems.length > 0){
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar:{
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) {}


if(document.querySelector('.slider-main__body')){
    new Swiper('.slider-main__body', {
        // effect: 'fade',
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        preloadImages: false,
        pagination: {
            el: '.slider-main-controls__dots',
            clickable: true,
        },
        navigation:{
            nextEl: '.slider-main-controls__arrows .slider-arrow__next',
            prevEl: '.slider-main-controls__arrows .slider-arrow__prev',
        },
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
        //         autoHeight: true,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     992: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        //     1268: {
        //         slidesPerView: 4,
        //         spaceBetween: 30,
        //     },
        // },
    })
}
if(document.querySelector('.slider-collection__body')){
    new Swiper('.slider-collection__body', {
        // effect: 'fade',
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 'auto',
        loop: true,
        speed: 800,
        preloadImages: false,
        navigation:{
            nextEl: '.slider-collection-controls__arrows .slider-arrow__next',
            prevEl: '.slider-collection-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            320: {
                autoHeight: true,
                centeredSlides: true,
                spaceBetween: 0,
            },
            992: {
                centeredSlides: false,
                spaceBetween: 30,
            },
        },
    })
}

if(document.querySelector('.slider-awards__body')){
    new Swiper('.slider-awards__body', {
        // effect: 'fade',
        observer: true,
        observeParents: true,
        loop: true,
        preloadImages: false,
        navigation:{
            nextEl: '.slider-awards-controls__arrows .slider-arrow__next',
            prevEl: '.slider-awards-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            320: {
                centeredSlides: true,
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
        },
    })
}

;
!function(){"use strict";function a(a){var c=k(b,a||{});this.create(c),this.add()}var b={ellipsis:"…",debounce:0,responsive:!0,className:".clamp",lines:2,portrait:null,break_word:!0},c=0,d=!!window.requestAnimationFrame,e=function(){return c+=1},f=function(a,b){a.setAttribute("data-ellipsis-id",b)},g=function(a){return a.getAttribute("data-ellipsis-id")},h=function(a,b){var c=e();f(b,c),a[c]=a[c]||{},a[c].element=b,a[c].innerHTML=b.innerHTML},i=function(a,b){return a?a[g(b)]:null},j=function(a){return Object.keys(a).map(function(b,c){return a[b].element})},k=function(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c};a.prototype={conf:{},prop:{},lines:{},temp:null,listener:null,create:function(a){if(this.conf=a,this.lines={get current(){return a.portrait&&window.innerHeight>window.innerWidth?a.portrait:a.lines}},this.conf.responsive){this.temp={};var b,c=this.conf.debounce;if(d&&!c){this._isScheduled=!1;var e=this;b=function(a){e._isScheduled||(e._isScheduled=!0,window.requestAnimationFrame(function(){e._isScheduled=!1,e.add(j(e.temp))}))}}else{c=c||16;var f;b=function(a){clearTimeout(f),f=setTimeout(function(){this.add(j(this.temp))}.bind(this),c)}}this.listener=b.bind(this),window.addEventListener("resize",this.listener,!1),window.removeEventListener("beforeunload",this.listener,!1)}},destroy:function(){this.listener&&window.removeEventListener("resize",this.listener,!1)},createProp:function(a){this.prop={get height(){var b=a.getBoundingClientRect();return parseInt(b.bottom-b.top,10)},get lineheight(){var b=getComputedStyle(a).getPropertyValue("line-height");return String("normal|initial|inherit").indexOf(b)>-1&&(b=parseInt(getComputedStyle(a).getPropertyValue("font-size"),10)+2),parseInt(b,10)}}},add:function(a){if(!a&&this.conf.className&&(a=document.querySelectorAll(this.conf.className)),a)if(a.length)for(var b=0;b<a.length;b++)this.addElement(a[b]);else void 0===a.length&&this.addElement(a)},addElement:function(a){if(this.conf.responsive){var b=i(this.temp,a);b?a.innerHTML!==b.innerHTML&&(a.innerHTML=b.innerHTML):h(this.temp,a)}this.createProp(a),this.isNotCorrect()&&(a.childNodes.length&&a.childNodes.length>1?this.handleChildren(a):a.childNodes.length&&1===a.childNodes.length&&3===a.childNodes[0].nodeType&&this.simpleText(a))},breakWord:function(a,b,c){var d=a.split(" ");if(d.pop(),c&&d.pop(),!b)return d[d.length-1]&&(d[d.length-1]=d[d.length-1].replace(/(,$)/g,"").replace(/(\.$)/g,"")),d.push(this.conf.ellipsis),d.join(" ");if(d[d.length-1])return d[d.length-1]=d[d.length-1].replace(/(,$)/g,"").replace(/(\.$)/g,""),d.push(this.conf.ellipsis),[d.join(" "),b];if(!d[d.length-1]&&b){var e=" "+b.trim().replace(/(,$)/g,"").replace(/(\.$)/g,"")+" ";return d.push(this.conf.ellipsis),[d.join(" "),e]}},simpleText:function(a){for(var b=a.childNodes[0].nodeValue;this.prop.height>this.prop.lineheight*this.lines.current;)a.childNodes[0].nodeValue=b.slice(0,-1),b=a.childNodes[0].nodeValue;this.conf.break_word?(a.childNodes[0].nodeValue=b.slice(0,-this.conf.ellipsis.length)+this.conf.ellipsis,this.isNotCorrect()&&(a.childNodes[0].nodeValue=" "+a.childNodes[0].nodeValue.slice(0,-(this.conf.ellipsis.length+1)).trim().slice(0,-this.conf.ellipsis.length)+this.conf.ellipsis)):(a.childNodes[0].nodeValue=this.breakWord(a.childNodes[0].nodeValue),this.isNotCorrect()&&(a.childNodes[0].nodeValue=this.breakWord(a.childNodes[0].nodeValue,null,!0)))},isNotCorrect:function(){return this.prop.height>this.prop.lineheight*this.lines.current},processBreak:function(a,b,c){var d=this.breakWord(a.innerText||a.nodeValue,b.innerText||b.nodeValue,c);a.innerText?a.innerText=d[0]:a.nodeValue=d[0],b.innerText?b.innerText=d[1]:b.nodeValue=d[1]},handleChildren:function(a){for(var b,c=a.childNodes,d=c.length-1;d>=0;d--){var e;if(8!==c[d].nodeType){if(3===c[d].nodeType?(e=c[d].nodeValue,c[d].nodeValue=""):(e=getComputedStyle(c[d]).getPropertyValue("display"),c[d].style.display="none"),this.prop.height<=this.prop.lineheight*this.lines.current){if(3===c[d].nodeType){for(c[d].nodeValue=e,b=c[d].nodeValue;this.prop.height>this.prop.lineheight*this.lines.current;)c[d].nodeValue=b.slice(0,-1),b=c[d].nodeValue;if(this.conf.break_word){if(c[d].nodeValue=b.slice(0,-this.conf.ellipsis.length)+this.conf.ellipsis,this.isNotCorrect()){if(c[d].nodeValue=" "+c[d].nodeValue.slice(0,-this.conf.ellipsis.length).trim().slice(0,-this.conf.ellipsis.length),!(c[d].nodeValue.length>1))continue;c[d].nodeValue=c[d].nodeValue.slice(0,-this.conf.ellipsis.length)+this.conf.ellipsis}}else{if(!c[d].innerText&&!c[d].nodeValue)continue;if(this.processBreak(c[d],c[d-1]),this.isNotCorrect()&&(this.processBreak(c[d],c[d-1],!0),this.isNotCorrect())){a.removeChild(c[d]);continue}}}else{for(c[d].style.display=e,b=c[d].innerText;this.prop.height>this.prop.lineheight*this.lines.current;)c[d].innerText=b.slice(0,-1),b=c[d].innerText;if(this.conf.break_word){if(c[d].innerText=b.slice(0,-this.conf.ellipsis.length)+this.conf.ellipsis,this.isNotCorrect()){if(c[d].innerText=" "+c[d].innerText.slice(0,-this.conf.ellipsis.length).trim().slice(0,-this.conf.ellipsis.length),!(c[d].innerText.length>1))continue;c[d].innerText=c[d].innerText.slice(0,-this.conf.ellipsis.length)+this.conf.ellipsis}}else{if(!c[d].innerText&&!c[d].nodeValue)continue;if(this.processBreak(c[d],c[d-1]),this.isNotCorrect()&&(this.processBreak(c[d],c[d-1],!0),this.isNotCorrect())){a.removeChild(c[d]);continue}}}break}a.removeChild(c[d])}}}};var l=function(b){return new a(b)};"function"==typeof define&&define.amd&&define("ellipsis",[],function(){return l}),self.Ellipsis=l}();;

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

