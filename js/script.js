

if (document.querySelector('.js-choice')) {
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
        searchEnabled: false,
    })
}
if (document.querySelector('.js-choice2')) {
    const element = document.querySelector('.js-choice2');
    const choices2 = new Choices(element, {
        searchEnabled: false,
    })
}
if (document.querySelector('.js-choice3')) {
    const element = document.querySelector('.js-choice3');
    const choices3 = new Choices(element, {
        searchEnabled: false,
    })
}

// mobile selects 
if (document.querySelector('.js-choice-mob')) {
    const element = document.querySelector('.js-choice-mob');
    const choices = new Choices(element, {
        searchEnabled: false,
    })
}
if (document.querySelector('.js-choice2-mob')) {
    const element = document.querySelector('.js-choice2-mob');
    const choices2 = new Choices(element, {
        searchEnabled: false,
    })
}
if (document.querySelector('.js-choice3-mob')) {
    const element = document.querySelector('.js-choice3-mob');
    const choices3 = new Choices(element, {
        searchEnabled: false,
    })
}

if (document.querySelector('.header-body__col-burger')) {
    
    const burgerBtnOpen = document.querySelector('.header-body__col-burger')
    const burgerBtnClose = document.querySelector('.mobile-menu__top-close')
    const mobileMenu = document.querySelector('.mobile-menu')
    const body = document.querySelector('body')

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



if (document.querySelector('.mobile-filter__btn')) {
    
    const filterBtnOpen = document.querySelector('.mobile-filter__btn')
    const filterBtnClose = document.querySelector('.mobile-filter__close')
    const mobileFilter = document.querySelector('.mobile-filter__body')
    const body = document.querySelector('body')

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

if (document.querySelectorAll('.js-tab-trigger')) {
    var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
        jsContents = document.querySelectorAll('.js-tab-content');
    jsTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            var id = this.getAttribute('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');
        
          activeTrigger.classList.remove('active'); // 1
          trigger.classList.add('active'); // 2
        
          activeContent.classList.remove('active'); // 3
          content.classList.add('active'); // 4
        });
    });
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