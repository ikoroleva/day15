const alerts = document.querySelectorAll('.alert');

console.log(alerts);

const addClassByAttribute = (element, alertType) => {
    if (alertType === 'error') {
        element.classList.add('alert--error');
    } else if (alertType === 'success') {
        element.classList.add('alert--success');
    } else if (alertType === 'warning') {
        element.classList.add('alert--warning');
    }

}

alerts.forEach((item) => {

    const alertType = item.getAttribute('data-type');

    addClassByAttribute(item, alertType);
    //console.log(alertType);
});