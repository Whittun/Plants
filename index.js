console.log(
`

При нажатии на кнопки:Gargens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50

Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50

В разделе contacts реализован select с выбором городов +25

`
);

const burger = document.querySelector('.main-header__burger');
const menu = document.querySelector('.main-header__nav-list');
const body = document.body;
const links = document.querySelectorAll('.main-header__nav-link');

burger.addEventListener('click', toggleMenu);

body.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menu) || e.composedPath().includes(burger);
    if (!click && menu.classList.contains('main-header__nav-list--active')) {
        toggleMenu()
    }
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', toggleMenu);
}

function toggleMenu() {
    if (window.innerWidth <= 500) {
        menu.classList.toggle('main-header__nav-list--active');
        burger.classList.toggle('main-header__burger--close');
    }
}

// Услуги

const cards = document.querySelectorAll('.service__item');
const gardensCard = document.querySelectorAll('.service__item--garden');
const plantingCard = document.querySelectorAll('.service__item--planting');
const lawnCard = document.querySelector('.service__item--lawn');

const gardensButtom = document.querySelector('.service__button--gardens');
const lawnButtom = document.querySelector('.service__button--lawn');
const plantingButtom = document.querySelector('.service__button--planting');
const servicesButton = document.querySelectorAll('.service__button');

for (let i = 0; i < servicesButton.length; i++) {
    servicesButton[i].addEventListener('click', changeCards);
}

function changeCards(event) {
    let buttonsCount = document.querySelectorAll('.service__button--active');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('blur');
        
    }
    
    if (buttonsCount.length < 2) {
        if (event.target.classList[1] === 'service__button--gardens') {
            gardensButtom.classList.toggle('service__button--active');
            for (let i = 0; i < gardensCard.length; i++) {
                gardensCard[i].classList.toggle('noblur');
            }
        } else if (event.target.classList[1] === 'service__button--lawn') {
            lawnButtom.classList.toggle('service__button--active');
            lawnCard.classList.toggle('noblur');
        } else if (event.target.classList[1] === 'service__button--planting') {
            plantingButtom.classList.toggle('service__button--active');
            for (let i = 0; i < plantingCard.length; i++) {
                plantingCard[i].classList.toggle('noblur');
            }
        }
    } else if (buttonsCount.length >= 2 && event.target.classList[3] === 'service__button--active') {
        if (event.target.classList[1] === 'service__button--gardens') {
            gardensButtom.classList.toggle('service__button--active');
            for (let i = 0; i < gardensCard.length; i++) {
                gardensCard[i].classList.toggle('noblur');
            }
        } else if (event.target.classList[1] === 'service__button--lawn') {
            lawnButtom.classList.toggle('service__button--active');
            lawnCard.classList.toggle('noblur');
        } else if (event.target.classList[1] === 'service__button--planting') {
            plantingButtom.classList.toggle('service__button--active');
            for (let i = 0; i < plantingCard.length; i++) {
                plantingCard[i].classList.toggle('noblur');
            }
        }
    }
    let noblurCards =  document.querySelectorAll('.noblur');
    if (noblurCards.length === 0) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('blur');
        }
    }
}

// Аккордеон
const pricesItem = document.querySelectorAll('.prices__item');

for (let i = 0; i < pricesItem.length; i++) {
    pricesItem[i].addEventListener('click', accordeon);
}

function accordeon(event) {
    if (event.target.classList.value !== 'prices__item-order' && event.target.classList[1] !== 'prices__item--active') {
        for (let i = 0; i < pricesItem.length; i++) {
            pricesItem[i].classList.remove('prices__item--active');
        }
    }

    let elem = event.target;
    elem.classList.toggle('prices__item--active');
}

// select с выбором городов
const select = document.querySelector('.contacts__cities-title');
const selectText = document.querySelector('.contacts__cities-text');
const cities = document.querySelector('.contacts__cities');

select.addEventListener('click', showCities);

function showCities() {
    cities.classList.toggle('contacts__cities--active');
}

const citiesItems = document.querySelectorAll('.contacts__cities-item');

for (let i = 0; i < citiesItems.length; i++) {
    citiesItems[i].addEventListener('click', changeCity);
    citiesItems[i].addEventListener('click', changeCityCard);
}

function changeCity(event) {
    selectText.classList.add('contacts__cities-text--active')
    let cityContent = event.target.innerHTML.trim();
    selectText.innerHTML = cityContent;
    cities.classList.add('contacts__cities--active-style');
    showCities()
}

const cityCard = document.querySelector('.contacts__city-card');
const cityName = document.querySelector('.contacts__city-name');
const cityPhone = document.querySelector('.contacts__city-phone');
const cityAdress = document.querySelector('.contacts__city-adress');
const cityCall = document.querySelector('.contacts__city-call');

function changeCityCard(event) {
    let cityContent = event.target.innerHTML.trim();
    cityName.innerHTML = cityContent;
    switch(cityContent) {
        case 'Canandaigua, NY':
            cityPhone.innerHTML = '+1 585 393 0001';
            cityAdress.innerHTML = '151 Charlotte Street';
            cityCall.setAttribute('href', 'tel:+1 585 393 0001');
            break;  
        case 'Yonkers, NY':
            cityPhone.innerHTML = '+1 914 678 0003';
            cityAdress.innerHTML = '511 Warburton Ave';
            cityCall.setAttribute('href', 'tel:+1 914 678 0003');
            break;
        case 'Sherrill, NY':
            cityPhone.innerHTML = '+1 315 908 0004';
            cityAdress.innerHTML = '14 WEST Noyes BLVD';
            cityCall.setAttribute('href', 'tel:+1 315 908 0004');
            break;
        case 'New York City':
            cityPhone.innerHTML = '+1 212 456 0002';
            cityAdress.innerHTML = '9 East 91st Street';
            cityCall.setAttribute('href', 'tel:+1 212 456 0002');
            break;
    }
    let background = document.querySelector('.contacts .container');
    cityCard.classList.add('contacts__city-card--active');
    if (window.innerWidth <= '500') {
        background.style.background = 'none';
    }
}