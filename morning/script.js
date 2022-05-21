//const padlok = document.querySelector('.padlock');
const text = document.querySelector('.text');

const displayText = (e) => {

    text.classList.add('text_visible');

}

const hideText = (e) => {

    //const padlock = document.querySelector('.padlock');

    if (text.classList.contains('clicked')) {
        console.log(text);


    } else { text.classList.remove('text_visible'); }


}

const makeVisibleForever = (e) => {

    displayText();
    text.classList.add('clicked');
    padlock.classList.add('padlock_clicked');

}


const padlock = document.querySelector('.padlock');
console.log(padlock);

padlock.addEventListener('mouseenter', displayText);
padlock.addEventListener('mouseleave', hideText);
padlock.addEventListener('click', makeVisibleForever);
