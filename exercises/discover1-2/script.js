// const employee = {
//     first_name: 'Alfred',
//     last_name: 'Pennyworth',
//     age: 67,
//     occupation: 'butler',
//     place_of_residence: 'Gotham',
//     photo_url: 'https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg'
// }

// console.log('Hello');

// const employeesContainer = document.querySelector('.employees');

// console.log(employeesContainer);

// employeesContainer.innerHTML +=
//     `<div class="employee">
// <div class="employee__photo">
//     <img src="${employee.photo_url}" alt="${employee.first_name} ${employee.last_name}">
// </div>
// <div class="employee_info">
//     <div class="employee__full-name">${employee.first_name} ${employee.last_name}</div>
//     <div class="employee__occupation">${employee.occupation}</div>
//     <div class="employee__residence">Last known place of residence: ${employee.place_of_residence}</div>
//     <div class="employee__age">Age: ${employee.age} years old</div>
// </div>
// </div>`

////////////Discover - style and classList///////

const alerts = [
    'Unable to access resource. User is not authorized.',
    'You are missing proper user permissions.',
    'Administrators have been notified of this action.',
    'Please remain where you are, police is on the way.'
];

const alertsContainer = document.querySelector('.alerts');
//console.log(alertsContainer);

//alertsContainer.innerHTML = '';

alerts.forEach((item) => {

    console.log(item);
    const newAlert = document.createElement('div');
    newAlert.classList.add('alert');
    newAlert.classList.add('alert--error');

    const alertText = document.createElement('div');
    alertText.classList.add('alert__text');
    alertText.innerHTML = item;
    newAlert.appendChild(alertText);

    const alertClose = document.createElement('div');
    alertClose.classList.add('alert__close');
    alertClose.innerHTML = '&times;';
    newAlert.appendChild(alertClose);

    alertsContainer.appendChild(newAlert);

    // alertsContainer.innerHTML +=
    //     `<div class="alert">
    //     <div class="alert__text">${item}</div>
    //     <div class="alert__close">&times;</div>
    // </div>`;

})

console.log(alertsContainer);

const alertItems = document.querySelectorAll('.alert');
console.log(alertItems);

let isClicked = false;

alertItems.forEach((item) => {

    item.addEventListener('click', () => {

        // item.style.backgroundColor = 'green';
        // item.style.color = 'white';

        if (isClicked === false) {
            isClicked = true;

            item.classList.add('alert--seen');

        } else {
            isClicked = false;
            item.classList.toggle('alert--seen')
        }
    })

    // const alertCloseItem = document.querySelectorAll('.alert__close');

    // alertCloseItem.addEventListener('click', () => {
    //     item.style.display = 'none';
    // })

})

const alertCloseItems = document.querySelectorAll('.alert__close');

console.log(alertCloseItems);

alertCloseItems.forEach((item) => {

    item.addEventListener('click', () => {
        item.parentElement.style.display = 'none';
    })
})






