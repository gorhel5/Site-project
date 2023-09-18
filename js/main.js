const navList = document.querySelector('.nav-list');
const header = document.querySelector('.header');
const gamesBlock = document.querySelector('.games-block');
const body = document.querySelector('body');
const navListGamesEl = document.querySelector('.nav-list--games');
const navListItems = document.querySelectorAll('.nav-list__item');
const navButton = document.querySelector('.nav-button');
const navButtonImg = document.querySelector('.nav-button__image');

function createMenuElement (text) {

    const li = document.createElement('li');
    const a = document.createElement('a');

    li.className = `nav-list__item jj`;
    a.className = 'nav-list__link ';

    li.append(a);
    navList.append(li);
    a.innerText = `${text}`;
}
function deleteMenuElements () {

    document.querySelectorAll(`.jj`).forEach(el => {
        el.remove()
    });

    const li = document.createElement('li');
    const a = document.createElement('a');

    li.className = 'nav-list__item nav-list__item--games';
    a.className = 'nav-list__link';

    li.append(a);
    navList.append(li);
    a.innerText = `Games`;

}

navButton.addEventListener('click', () => {
    if (navList.classList.toggle('active')) {
        navButtonImg.src = './img/icons/close.svg';
        gamesBlock.style.display = 'none';
        body.style.overflow = 'hidden';

        createMenuElement('Sprint');
        createMenuElement('Audio-call');
        document.querySelector('.nav-list__item--games').remove();
    } else {
        navButtonImg.src = './img/icons/Burger.svg';
        body.style.overflow = '';
        gamesBlock.style.display = 'flex';

        deleteMenuElements();
    }
});