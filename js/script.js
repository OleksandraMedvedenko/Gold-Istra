const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
})

const productsSwiper = document.querySelector('.swiper-products');

if (productsSwiper) {
    const swiper = new Swiper('.swiper-products', {
        slidesPerView: 3,
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && swiper.params.slidesPerView !== 2) {
            swiper.destroy(); // Уничтожьте текущий экземпляр свайпера
            swiper = new Swiper('.swiper-products', {
                slidesPerView: 2,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        } else if (window.innerWidth > 768 && swiper.params.slidesPerView !== 3) {
            swiper.destroy();
            swiper = new Swiper('.swiper-products', {
                slidesPerView: 3,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2, 
                    }
                }
            });
        }
    });
}
