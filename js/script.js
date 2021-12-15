
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

if (burgerBtnOpen) {
    burgerBtnOpen.addEventListener('click', () => {
        mobileMenu.classList.contains('active') 
        ? mobileMenu.classList.remove('active')
        : mobileMenu.classList.add('active') 
    })
    burgerBtnClose.addEventListener('click', () => {
        mobileMenu.classList.contains('active') 
        ? mobileMenu.classList.remove('active')
        : mobileMenu.classList.add('active') 
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