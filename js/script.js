const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector ('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
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
        },
        navigation: {
            nextEl: ".next", // Селектор элемента для кнопки "Следующий слайд"
            prevEl: ".prev"  // Селектор элемента для кнопки "Предыдущий слайд"
        },
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            425: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
}
