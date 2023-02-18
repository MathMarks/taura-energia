
window.addEventListener('DOMContentLoaded', function() {

    var slider = document.getElementById('swiper-aprenda');

    new Swiper("#swiper-aprenda", {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        lazyLoading: true,
        loop: true,
        keyboard:{
            enabled: true,
        },
        autoplay: {
            delay: 5000,
        }

    });
});