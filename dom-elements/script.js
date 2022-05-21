const clickButton = document.getElementById('click_me');
const clickButton2 = document.getElementById('click_me_too');
const container = document.querySelector('.container');
let paragraphCount = 0;
let theLastAddedParagraph = null;

clickButton.addEventListener('click', () => {
    //console.log('click');
    //container.innerHTML += "<p>Hi, I'm new here</p>";

    const myNewElement = document.createElement('p');
    paragraphCount++;
    console.log(myNewElement);

    // myNewElement.textContent = "Hi! I'm new here";
    myNewElement.innerHTML = "<strong>Hi,</strong> I'm no" + paragraphCount + " here";
    myNewElement.classList.add('new');
    //myNewElement.textContent += '!';
    theLastAddedParagraph.textContent += '!';
    //container.appendChild(myNewElement);

    //container.insertBefore(myNewElement, clickButton);

    console.log(container.firstChild);
    //container.insertBefore(myNewElement, container.firstChild,);

    clickButton.parentElement.insertBefore(myNewElement, clickButton.parentElement.firstChild);

})

clickButton2.addEventListener('click', () => {
    theLastAddedParagraph.textContent += '!';

})


