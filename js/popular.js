var swiper = new Swiper(".popular-swiper", {
    slidesPerView: 7,
    spaceBetween: 5,
    // centeredSlides: true,
    freeMode: true,
    navigation: {
        nextEl: ".popular-btn-next",
        prevEl: ".popular-btn-prev",
    },
    breakpoints: {
        1660: {
            slidesPerView: 7,
        },
        1496: {
            slidesPerView: 6,
        },
        // 895: {
        //     slidesPerView: 4,
        // },
        // 680: {
        //     slidesPerView: 4,
        // },
        1008: {
            slidesPerView: 4,
        },
        680: {
            slidesPerView: 3,
        },
        460: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1.5,
        },
    },
});