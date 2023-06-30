var swiper = new Swiper(".banner__swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 6,
    freeMode: true,
    navigation: {
        nextEl: ".banner-swiper__next",
        prevEl: ".banner-swiper__prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 6,
        },
        1270: {
            slidesPerView: 5,
        },
        1070: {
            slidesPerView: 4.4,
        },
        770: {
            slidesPerView: 4,
        },
        480: {
            slidesPerView: 3.4,
        },
        320: {
            slidesPerView: 3,
        },
    }
});