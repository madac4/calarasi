let sliders = document.querySelectorAll('.swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
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

            if (slider.classList.contains('swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) {}

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if (sliderScollItems.length > 0) {
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
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


if (document.querySelector('.slider-main__body')) {
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
        navigation: {
            nextEl: '.slider-main-controls__arrows .slider-arrow__next',
            prevEl: '.slider-main-controls__arrows .slider-arrow__prev',
        },
        autoplay: {
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
if (document.querySelector('.slider-collection__body')) {
    new Swiper('.slider-collection__body', {
        // effect: 'fade',
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 'auto',
        loop: true,
        speed: 800,
        preloadImages: false,
        navigation: {
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

if (document.querySelector('.slider-awards__body')) {
    new Swiper('.slider-awards__body', {
        // effect: 'fade',
        observer: true,
        observeParents: true,
        loop: true,
        preloadImages: false,
        navigation: {
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

if (document.querySelector('.slider-gallery__body')) {
    new Swiper('.slider-gallery__body', {
        observer: true,
        observeParents: true,
        preloadImages: false,
        draggable: true,
        navigation: {
            nextEl: '.slider-gallery-controls__arrows .slider-arrow__next',
            prevEl: '.slider-gallery-controls__arrows .slider-arrow__prev',
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1110: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            // 1480: {
            //     slidesPerView: 5,
            // },
        },
    })
}

if (document.querySelector('.slider-history__body')) {
    new Swiper('.slider-history__body', {
        observer: true,
        observeParents: true,
        preloadImages: false,
        draggable: true,
        loop: true,
        speed: 1200,
        slidesPerView: 4,
        centeredSlides: true,
        freeMode: true,
        navigation: {
            nextEl: '.slider-history-controls__arrows .slider-arrow__next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                spaceBetween: 0,
            },
            1110: {
                slidesPerView: 4,
            },
        },
    })
}
if (document.querySelector('.slider-product__body')) {
    new Swiper('.slider-product__body', {
        observer: true,
        observeParents: true,
        preloadImages: false,
        speed: 1200,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider-product-controls__arrows .slider-arrow__next',
            prevEl: '.slider-product-controls__arrows .slider-arrow__prev',
        },
    })
}


if (document.querySelector('.slider-horizontal__body')) {
    new Swiper('.slider-horizontal__body', {
        observer: true,
        observeParents: true,
        preloadImages: false,
        speed: 1200,
        slidesPerView: "auto",
        mousewheel: true,
        freeMode: true,
        spaceBetween: 100,
    })
}