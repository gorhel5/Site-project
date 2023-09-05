
const sprintEl = document.querySelector('.sprint-image');
const sprintButtonEl = document.querySelector('.sprint-button')
const audiocallEL = document.querySelector('.audio-call__image');
const audiocallbuttonEl = document.querySelector('.audio-call__button');

const firstTextItemEL = document.querySelector('.first-text_item');
const firstImageItemEl = document.querySelector('.first-image_item');

const TextItemsEL = document.querySelectorAll('.text_items');

const leftImageItemsEl = document.querySelectorAll('.left-image_items');
const rightImageItemsEl = document.querySelectorAll('.right-image_items');


function staticAnimations () {
    sprintButtonEl.addEventListener('mouseover', () => {
        sprintEl.style.transform = 'translateY(-10px)';
    });
    
    sprintButtonEl.addEventListener('mouseout', () => {
        sprintEl.style.transform = 'translateY(0px)';
    });
    
    audiocallbuttonEl.addEventListener('mouseover', () => {
        audiocallEL.style.transform = 'translateY(-10px)';
    });
    
    audiocallbuttonEl.addEventListener('mouseout', () => {
        audiocallEL.style.transform = 'translateY(0px)';
    });
}

function scrollTextAnimation () {
    let windowCenter = (window.innerHeight / 1.2) + window.scrollY;

    firstTextItemEL.classList.add('text-animation');

    TextItemsEL.forEach(el => {
        let scrollOffset = el.offsetTop + (el.offsetHeight / 2);

        if ( windowCenter >= scrollOffset) {
            el.classList.add('text-animation');
        } else {
            el.classList.remove('text-animation');
        }
    });
}

function scrollImageAnimation () {
    let windowCenter = (window.innerHeight / 1.1 ) + window.scrollY;
    
    firstImageItemEl.classList.add('image-animation');


    leftImageItemsEl.forEach(el => {
        let scrollOffset = el.offsetTop + (el.offsetHeight / 2.5);
        
        if ( windowCenter >= scrollOffset) {
            el.classList.add('image-animation');
        } else {
            el.classList.remove('image-animation');
        }
    });

    rightImageItemsEl.forEach(el => {
        let scrollOffset = el.offsetTop + (el.offsetHeight / 2.5);
        
        if ( windowCenter >= scrollOffset) {
            el.classList.add('image-animation');
        } else {
            el.classList.remove('image-animation');
        }
    })


}




staticAnimations();
scrollTextAnimation();
scrollImageAnimation();

window.addEventListener('scroll', () => {
    scrollTextAnimation();
    scrollImageAnimation();
});

