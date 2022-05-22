const books = [{
    title: "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language",
    autors: ['David Flanagan'],
    subjects: ['JavaScript (Computer program language)', 'Web site development.'],
    numberOfPages: 706,
    publishYear: 2020,
    isBorrowed: false
}, {
    title: "Eloquent JavaScript",
    autors: ['Marijn Haverbeke', 'Madalina Tantareanu'],
    subjects: ['JavaScript (Computer program language)', 'Web site development.'],
    numberOfPages: 345,
    publishYear: 2018,
    isBorrowed: true
},
{
    title: "You Don't Know JS: Scope & Closures",
    autors: ['Kyle Simpson'],
    subjects: ['JavaScript (Computer program language)', 'Web site development.'],
    numberOfPages: 456,
    publishYear: 2014,
    isBorrowed: false
}
]

const makeTimeFromNum = (num) => {

    const mins = num % 60;
    const hours = Math.floor(num / 60);
    const time = hours + ':' + mins;

    return time;

}

const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];
const departures2 = [
    { time: { hrs: 8, mins: 14 }, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: 'On Time', track: 2 },
    { time: { hrs: 8, mins: 20 }, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14 },
    { time: { hrs: 8, mins: 37 }, train: 'Northeast Regional', no: 155, to: 'New York, NY - Penn Station', status: 'On Time', track: 23 },
    { time: { hrs: 8, mins: 40 }, train: 'Northeast Regional', no: 194, to: 'Roanoke, VA', status: 'On Time', track: 3 },
    { time: { hrs: 8, mins: 43 }, train: 'New Haven Line', no: 142, to: 'Miami, FL', status: 'On Time', track: 15 },
    { time: { hrs: 8, mins: 50 }, train: 'Vermonter', no: 1541, to: 'St. Albans, VT', status: 'On Time', track: 12 },
    { time: { hrs: 9, mins: 16 }, train: 'Northeast Regional', no: 153, to: 'Newport News, VA', status: 'On Time', track: 1 },
    { time: { hrs: 9, mins: 23 }, train: 'Acela Express', no: 2248, to: ' Boston, MA - South Station', status: 'On Time', track: 5 },
    { time: { hrs: 9, mins: 36 }, train: 'Crescent', no: 19, to: 'New York, NY - Penn Station', status: 'On Time', track: 6 },
    { time: { hrs: 9, mins: 46 }, train: 'New Haven Line', no: 1545, to: 'Washington, DC - Union Station', status: 'On Time', track: 8 },
    { time: { hrs: 10, mins: 13 }, train: 'Carolinian / Piedmont', no: 79, to: 'Charlotte, NC', status: 'On Time', track: 11 },
    { time: { hrs: 10, mins: 25 }, train: 'Acela Express', no: 2252, to: 'Boston, MA - South Station', status: 'On Time', track: 9 }
    // etc ...
]


const container = document.createElement('table');
container.classList.add('departures');
document.body.appendChild(container);

const tableHead = document.createElement('tr');
tableHead.classList.add('departures_header');
tableHead.innerHTML += `<th class="header_item">Time</th>
<th class="header_item">Train</th>
<th class="header_item">No</th>
<th class="header_item">to</th>
<th class="header_item">Status</th>
<th class="header_item">Track</th>
<th class="header_item"> </th>`;
container.appendChild(tableHead);

const tableBody = document.createElement('tbody');
tableBody.classList.add('departures_body');
container.appendChild(tableBody);



departures2.forEach((item) => {
    //console.log(item);
    // console.log(makeTimeFromNum(item));

    //const departureTime = makeTimeFromNum(item);

    const tableRow = document.createElement('tr');
    tableRow.classList.add('table_row');
    tableBody.appendChild(tableRow);

    tableRow.innerHTML += `<td class="table_data">${item.time.hrs}:${item.time.mins}</td>
    <td class="table_data">${item.train}</td>
    <td class="table_data">${item.no}</td>
    <td class="table_data">${item.to}</td>
    <td class="table_data status">${item.status}</td>
    <td class="table_data">${item.track}</td>
    <td class="table_data"><button class="delay_btn">Delay</button></td>`


    const delayBtn = tableRow.querySelector('.delay_btn');

    //console.log(delayBtn);
    const delayStatus = tableRow.querySelector('.status');

    //console.log(delayStatus);


    delayBtn.addEventListener('click', () => {

        //tableRow.classList.toggle('delayed');

        delayStatus.innerHTML = ` <input class="input_el" type="text" placeholder="min of the delay">`

        delayStatus.addEventListener('keydown', (e) => {
            //console.log(e);

            if (e.key === 'Enter') {
                const inputField = delayStatus.querySelector(".input_el");
                //console.log(inputField);
                const inputFieldVal = Number(inputField.value);

                if (inputFieldVal != false && inputFieldVal > 0 && inputFieldVal !== 'NaN') {
                    delayStatus.innerHTML = `${inputFieldVal} min delay`;
                    item.status = inputFieldVal + "min delay";
                    tableRow.classList.add('delayed');
                } else {
                    delayStatus.innerText = "On Time";
                    tableRow.classList.remove('delayed');
                }

            }

        })

        // if (item.status === 'Delayed') {
        //     item.status = 'On Time';
        //     delayStatus.innerText = "On Time";

        // } else if (item.status === 'On Time') {

        //     item.status = "Delayed";
        //     delayStatus.innerText = "Delayed";

        // }

    })
})

    // Object.keys(item).forEach((key) => {

    //     const tableData = document.createElement('td');
    //     tableData.classList.add('table_data');
    //     tableRow.appendChild(tableData);

    //     tableData.innerHTML = item[key];







