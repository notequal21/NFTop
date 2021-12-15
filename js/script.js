
const element = document.querySelector('.js-choice');
const element2 = document.querySelector('.js-choice2');
const element3 = document.querySelector('.js-choice3');
const choices = new Choices(element, {
    searchEnabled: false,
})
const choices2 = new Choices(element2, {
    searchEnabled: false,
})
const choices3 = new Choices(element3, {
    searchEnabled: false,
})

const burgerBtnOpen = document.querySelector('.header-body__col-burger')
const burgerBtnClose = document.querySelector('.mobile-menu__top-close')
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')

if (burgerBtnOpen) {
    burgerBtnOpen.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active')
            body.classList.remove('_lock')
        } else {
            mobileMenu.classList.add('active')
            body.classList.add('_lock')
        }
    })
    burgerBtnClose.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active')
            body.classList.remove('_lock')
        } else {
            mobileMenu.classList.add('active')
            body.classList.add('_lock')
        }
    })
}



const filterBtnOpen = document.querySelector('.mobile-filter__btn')
const filterBtnClose = document.querySelector('.mobile-filter__close')
const mobileFilter = document.querySelector('.mobile-filter__body')

if (filterBtnOpen) {
    filterBtnOpen.addEventListener('click', () => {
        if (mobileFilter.classList.contains('active')) {
            mobileFilter.classList.remove('active')
            body.classList.remove('_lock')
        } else {
            mobileFilter.classList.add('active')
            body.classList.add('_lock')
        }
    })
    filterBtnClose.addEventListener('click', () => {
        if (mobileFilter.classList.contains('active')) {
            mobileFilter.classList.remove('active')
            body.classList.remove('_lock')
        } else {
            mobileFilter.classList.add('active')
            body.classList.add('_lock')
        }
    })
}



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});