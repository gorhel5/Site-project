const topPanelButtons = document.querySelectorAll('.btn');
const topPanelImages = document.querySelectorAll('.svg');

const levelPanelButtons = document.querySelectorAll('.level-panel_levels');
const levelPanelText = document.querySelectorAll('.level-panel_levels a');
const levelPanelBlocks = document.querySelectorAll('.level-panel_levels div');

const settingsButtonEl = document.querySelector('.settings-button');
const settingsButtonBackground = document.querySelector('.settings-back');
const settingsButtonImage = document.querySelector('.settings-img');
const settingsBlock = document.querySelector('.settings-block');

const addToLearnedButtonFirst = document.querySelector('.add-to-learned-f');
const addToLearnedButtonSecond = document.querySelector('.add-to-learned-s');
const addToLearnedButtonThird = document.querySelector('.add-to-learned-t');

const addToDictionaryButtonFirst = document.querySelector('.add-to-dictionary-f');
const addToDictionaryButtonSecond = document.querySelector('.add-to-dictionary-s');
const addToDictionaryButtonThird = document.querySelector('.add-to-dictionary-t');

const infoBlockFirst = document.querySelector('.info-block-f');
const infoBlockSecond = document.querySelector('.info-block-s');
const infoBlockThird = document.querySelector('.info-block-t');

const settingsCheckbox = document.querySelector('.settings-checkbox');
const addRemoveButtons = document.querySelectorAll('.add-button');

const textbookButton = document.querySelector('.textbook-button');
const dictionaryButton = document.querySelector('.dictionary-button');

const cardEl = document.querySelector('.cards');
const dictionaryBlock = document.querySelector('.dictionary-block');
const cardBlocks = document.querySelectorAll('.card-block');

const topPanelAnimBlocks = document.querySelectorAll('.top-panel_anim-block');
const levelPanelAnimBlocks = document.querySelectorAll('.level-panel_anim-block');
const cardAnimBlocks = document.querySelectorAll('.card_anim-block');


async function blocksAnimation () {
    for( let i = 0; i < topPanelAnimBlocks.length; i++) {
        await new Promise(resolve=> {
            setTimeout(() => {
                topPanelAnimBlocks[i].classList.add('top-panel-animation');
                resolve()
            }, 100);
        })
    };

    for ( let i = 0; i < levelPanelAnimBlocks.length; i++ ) {
        await new Promise(resolve => {
            setTimeout(() => {
                levelPanelAnimBlocks[i].classList.add('level-panel-animation');
                resolve();
            }, 100);
        })
    }; 

    for ( let i = 0; i < cardAnimBlocks.length; i++ ) {
        await new Promise(resolve => {
            setTimeout(() => {
                cardAnimBlocks[i].classList.add('card-animation');
                resolve();
            }, 100);

        })
    };


}

function isChecked () {
    addRemoveButtons.forEach(el => {
        if (settingsCheckbox.checked) {
            el.classList.remove('active');
            
        } else {
            el.classList.add('active');
        }
    });
}
    
function activeButtons() {
    topPanelButtons.forEach((el, index) => {
        el.addEventListener('click', function () {
            topPanelButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            topPanelImages.forEach(image => {
                image.classList.remove('active');
            });

            topPanelImages[index].classList.add('active');
        });
    });

    levelPanelButtons.forEach((el, index) => {
        el.addEventListener('click', function () {
            levelPanelButtons.forEach(btn => {
                btn.classList.remove('active');
            })
            this.classList.add('active');

            levelPanelText.forEach(text => {
                text.classList.remove('active');
            })
            levelPanelText[index].classList.add('active');

            levelPanelBlocks.forEach(block => {
                block.classList.remove('active');
            })
            levelPanelBlocks[index].classList.add('active');

        })
    })

}

function settingsButton () {
    let isToggled = false;
    settingsButtonEl.addEventListener('click', () => {
        if (isToggled) {
            settingsButtonBackground.classList.remove('sett-active');
            settingsButtonImage.classList.remove('sett-active');
            settingsBlock.classList.remove('active');

            isToggled = false;
        } else {
            settingsButtonBackground.classList.add('sett-active');
            settingsButtonImage.classList.add('sett-active');
            settingsBlock.classList.add('active');

            isToggled = true;
        }
    })
}


class InfoButtons {
    constructor(addButton, removeButton, infoBlock) {
        this.addButton = addButton;
        this.removeButton = removeButton;
        this.infoBlock = infoBlock;
        this.isToggled = false;

        this.addButton.addEventListener('click', this.addToLearned.bind(this));
        this.removeButton.addEventListener('click', this.addToDictionary.bind(this));
    }

    addToLearned () {
        if (this.isToggled) {
            this.addButton.classList.remove('remove-from-learned');
            this.addButton.classList.add('add-to-learned');
            this.infoBlock.classList.remove('learned');

            this.isToggled = false;
        } else {
            this.addButton.classList.add('remove-from-learned');
            this.addButton.classList.remove('add-to-learned');
            this.infoBlock.classList.add('learned');

            this.isToggled = true;
        }
    }

    addToDictionary () {
        if (this.isToggled) {
            this.removeButton.classList.remove('remove-from-dictionary');
            this.removeButton.classList.add('add-to-dictionary');
            this.infoBlock.classList.remove('compaund');

            this.isToggled = false;
        } else {
            this.removeButton.classList.add('remove-from-dictionary');
            this.removeButton.classList.remove('add-to-dictionary');
            this.infoBlock.classList.add('compaund');

            this.isToggled = true;
        }
    }

}


function switchDictionary () {
    dictionaryButton.addEventListener('click', () => {

        cardBlocks.forEach(el => {

            el.style.display = 'none';
            el.style.visibility = 'hidden';
            
        });

        dictionaryBlock.style.display = 'flex';
        dictionaryBlock.style.visibility = 'visible';
    });

    textbookButton.addEventListener('click', () => {
        dictionaryBlock.style.display = 'none';
        dictionaryBlock.style.visibility = 'hidden';


        cardBlocks.forEach(el => {

            el.style.display = 'flex';
            el.style.visibility = 'visible';
            
        });
    })
}

isChecked();
switchDictionary();
activeButtons();
settingsButton();
blocksAnimation();


new InfoButtons(addToLearnedButtonFirst, addToDictionaryButtonFirst, infoBlockFirst);
new InfoButtons(addToLearnedButtonSecond, addToDictionaryButtonSecond, infoBlockSecond);
new InfoButtons(addToLearnedButtonThird, addToDictionaryButtonThird, infoBlockThird);