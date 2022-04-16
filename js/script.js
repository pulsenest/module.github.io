//меню гамбургер
const hamburger = window.document.querySelector('.hamburger');
const menu = window.document.querySelector('.header__links');
const closeMenu = document.querySelector('.hamburger__close');
const links = document.querySelectorAll('.header__link');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');    
    //overlay.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

links.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});

//модальное окно
const btnsConsultation = document.querySelectorAll("[data-modal='consultation']");
const btnsOrder = document.querySelectorAll("[data-modal='order']");
const overlay = document.querySelector('.overlay');
const consultation = document.querySelector('#consultation');
const order = document.querySelector('#order');
const modalClose = document.querySelectorAll('.modal__close');
const modalThanks = document.querySelector('#thanks')


//модальное окно для консультации
btnsConsultation.forEach(item => {
    item.addEventListener('click', () => {
        overlay.style.display = 'block';
        consultation.style.display = 'flex';
        //console.log('hello')
    })
});


// модальное окно при покупке
btnsOrder.forEach(function (item, i) {
    item.addEventListener('click', () => {
        overlay.style.display = 'block';
        order.style.display = 'flex';
        //находим родителя по классу
        const product = item.closest('.featured__item')
        console.log(i);
        //находим имя элемента
        const productInfo = {
            id: i,
            title: product.querySelector('.featured__name').innerHTML
        }
        console.log(productInfo.title);
        order.querySelector('.modal__descr').innerHTML = productInfo.title;
    })
});


//закрытие модального окна
modalClose.forEach(item => {
    item.addEventListener('click', () => {
        overlay.style.display = 'none';
        consultation.style.display = 'none';
        order.style.display = 'none';
        modalThanks.style.display = 'none';
    })
});


//форма и отправка данных
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', formSend);
    
    const formSubscribe = document.querySelector('#formSubscribe');
    formSubscribe.addEventListener('submit', formSendSubscribe);

    async function formSend(e) {
        e.preventDefault();//запрещаем стандартную отправку формы
        modalThanks.style.display = "block";
        consultation.style.display = 'none';       
    }

    async function formSendSubscribe(e) {
        e.preventDefault();//запрещаем стандартную отправку формы
        modalThanks.style.display = "block";
        overlay.style.display = 'block';
    }
   
})

//слайдер продуктов 

const productItems = document.querySelectorAll('.products__item');
const productPrev = document.querySelector('.products__prev');
const productNext = document.querySelector('.products__next');
let indexItem = 0;

let mql1420 = window.matchMedia('(min-width: 1420px)')
let mql1200 = window.matchMedia('(min-width: 1200px)');
let mql992 = window.matchMedia('(min-width: 992px)');
let mql768 = window.matchMedia('(min-width: 768px)');
let mql320 = window.matchMedia('(min-width: 320px)');



//loadItems(5);

if (mql1420.matches) {
    console.log(">1420")
    loadItems(5);
    addActiveClass(0);
}

if (mql1200.matches && !mql1420.matches) {
   loadItems(4);
    console.log("1200")
    addActiveClass(0);
}

if (mql992.matches && !mql1200.matches && !mql1420.matches) {
    loadItems(3);
    console.log("992")
    addActiveClass(0);
}

if (mql768.matches && !mql992.matches && !mql1200.matches && !mql1420.matches) {
    loadItems(2);
    console.log("768")
    addActiveClass(0);
}
if (!mql768.matches) {
    loadItems(1);
    console.log("320")
    addActiveClass(0);
}

function addActiveClass(n) {
    //console.log(productItems.length)
    
    productItems.forEach((item, i) => {
        if (i == n) {
            item.classList.add('active');
            item.classList.remove('not-visible')
        } else {
            item.classList.remove('active');
        }
    })
}

productNext.addEventListener('click', () => {
    if (indexItem < productItems.length-1) {
        indexItem++;
        addActiveClass(indexItem);
        console.log(indexItem);
        if (4 < indexItem && mql1420.matches) {
            productItems[indexItem-5].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (3 < indexItem && mql1200.matches && !mql1420.matches) {
            productItems[indexItem-4].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (2 < indexItem && mql992.matches && !mql1200.matches && !mql1420.matches) {
            productItems[indexItem-3].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (1 < indexItem && mql768.matches && !mql992.matches && !mql1200.matches && !mql1420.matches) {
            productItems[indexItem-2].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (!mql768.matches) {
            productItems[indexItem-1].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        
    }
    
})

productPrev.addEventListener('click', () => {
    if (indexItem > 0) {
        indexItem--;
        console.log(indexItem)
        addActiveClass(indexItem)
        if (indexItem < 2 && mql1420.matches) {
            productItems[indexItem+5].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (indexItem < 3 && mql1200.matches && !mql1420.matches) {
            productItems[indexItem+4].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (indexItem < 4 && mql992.matches && !mql1200.matches && !mql1420.matches) {
            productItems[indexItem+3].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (indexItem < 5 && mql768 && !mql992.matches && !mql1200.matches && !mql1420.matches) {
            productItems[indexItem+2].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (indexItem < 6 && mql320.matches && !mql768 && !mql992.matches && !mql1200.matches && !mql1420.matches) {
            productItems[indexItem+1].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
        if (indexItem < 7 && !mql768.matches) {
            productItems[indexItem+1].classList.add('not-visible');
            productItems[indexItem].classList.remove('not-visible');
        }
    }
    
})


function screenTest(e) {
    if (mql1420.matches) {
        loadItems(5);
        addActiveClass(0);
        indexItem = 0;
    }
    if (mql1200.matches && !mql1420.matches) {
        loadItems(4);
        addActiveClass(0);
        indexItem = 0;
    }
    if (mql992.matches && !mql1200.matches && !mql1420.matches) {
        loadItems(3);
        addActiveClass(0);
        indexItem = 0;
    }
    if (mql768.matches && !mql992.matches && !mql1200.matches && !mql1420.matches) {
        loadItems(2);
        addActiveClass(0);
        indexItem = 0;
    }
    if (mql320.matches && !mql768.matches && !mql992.matches && !mql1200.matches && !mql1420.matches) {
        loadItems(1);
        addActiveClass(0);
        indexItem = 0;
    }

} 

mql1420.addEventListener('change', screenTest, resOurstar);
mql1200.addEventListener('change', screenTest, resOurstar);
mql992.addEventListener('change', screenTest, resOurstar);
mql768.addEventListener('change', screenTest, resOurstar);
mql320.addEventListener('change', screenTest, resOurstar);
  
function loadItems(items) {
    switch (items) {
        case 5:
            addNotVisible(5);
            break;
        case 4:
            addNotVisible(4);
            break;
        case 3:
            addNotVisible(3);
            break;
        case 2:
            addNotVisible(2);
            break;
        case 1:
            addNotVisible(1);
            break;
    }
}

function addNotVisible(n) {
    productItems.forEach((item, i) => {
        if (i < n) {
            item.classList.remove('not-visible');
        } else {
            item.classList.add('not-visible');
        }
    }
    )
}


//слайдер оурстар
const ourstarItems = document.querySelectorAll('.ourstar__item');
const ourstarPrev = document.querySelector('.ourstar__prev');
const ourstarNext = document.querySelector('.ourstar__next');
let ourstarItem = 0;

ourstarLoadItem(4);


function ourstarLoadItem(n) {
    ourstarItems.forEach((item, i) => {
        if (i < n) {
            item.classList.remove('not-visible')
        } else {
            item.classList.add('not-visible');
        }
    })
};

if (mql1420.matches) {
    loadItemsOutstar(4);
}

if (mql1200.matches && !mql1420.matches) {
    loadItemsOutstar(3);
}

if (mql992.matches && !mql1200.matches && !mql1420.matches) {
    loadItemsOutstar(2);
}

if (mql768.matches && !mql992.matches && !mql1200.matches && !mql1420.matches) {
    loadItemsOutstar(1);
}
if (!mql768.matches) {
    loadItemsOutstar(1);
}

function resOurstar(e) {
    if (mql1420.matches) {
        loadItemsOutstar(4);
        ourstarItem = 0;
    }
    if (mql1200.matches && !mql1420.matches) {
        loadItemsOutstar(3);
        ourstarItem = 0;
    }
    if (mql992.matches && !mql1200.matches && !mql1420.matches) {
        loadItemsOutstar(2);
        ourstarItem = 0;
    }
    if (mql768.matches && !mql992.matches && !mql1200.matches && !mql1420.matches) {
        loadItemsOutstar(1);
        ourstarItem = 0;
    }
    if (mql320.matches && !mql768.matches && !mql992.matches && !mql1200.matches && !mql1420.matches) {
        loadItemsOutstar(1);
        ourstarItem = 0;
    }

} 


function loadItemsOutstar(items) {
    switch (items) {
        case 4:
            ourstarLoadItem(4);
            addActiveClassOurstar(0)
            break;
        case 3:
            ourstarLoadItem(3);
            addActiveClassOurstar(0)
            break;
        case 2:
            ourstarLoadItem(2);
            addActiveClassOurstar(0)
            break;
        case 1:
            ourstarLoadItem(1);
            addActiveClassOurstar(0) 
            break;
    }
}

mql1420.addEventListener('change', resOurstar);
mql1200.addEventListener('change', resOurstar);
mql992.addEventListener('change', resOurstar);
mql768.addEventListener('change', resOurstar);
mql320.addEventListener('change', resOurstar);


ourstarNext.addEventListener('click', () => {
    
    if (ourstarItem < ourstarItems.length - 1) {
        ourstarItem++;
        addActiveClassOurstar(ourstarItem);
        console.log(ourstarItem);
        if (3 < ourstarItem && mql1420.matches) {
            ourstarItems[ourstarItem-4].classList.add('not-visible');
            ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        if (2 < ourstarItem && mql1200.matches && !mql1420.matches) {
            ourstarItems[ourstarItem-3].classList.add('not-visible');
            ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        if (1 < ourstarItem && mql992.matches && !mql1200.matches && !mql1420.matches) {
            ourstarItems[ourstarItem-2].classList.add('not-visible');
            ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        if (!mql992.matches) {
            ourstarItems[ourstarItem-1].classList.add('not-visible');
            ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        
    }
    
})

ourstarPrev.addEventListener('click', () => {
    
    if (ourstarItem > 0) {
        ourstarItem--;
        addActiveClassOurstar(ourstarItem);
        console.log(ourstarItem);
        if (3 > ourstarItem && mql1420.matches) {
            ourstarItems[ourstarItem+4].classList.add('not-visible');
            //ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        if (4 > ourstarItem && mql1200.matches && !mql1420.matches) {
            ourstarItems[ourstarItem+3].classList.add('not-visible');
            ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        if (5 > ourstarItem && mql992.matches && !mql1200.matches && !mql1420.matches) {
            ourstarItems[ourstarItem+2].classList.add('not-visible');
            ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        if (!mql992.matches) {
            ourstarItems[ourstarItem+1].classList.add('not-visible');
            ourstarItems[ourstarItem].classList.remove('not-visible');
        }
        
    }
    
})

function addActiveClassOurstar(n) {
    //console.log(productItems.length)
    
    ourstarItems.forEach((item, i) => {
        if (i == n) {
            item.classList.add('active');
            item.classList.remove('not-visible')
        } else {
            item.classList.remove('active');
        }
    })
}








