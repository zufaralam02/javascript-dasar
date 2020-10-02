// alert('What');
// alert('Do');
// alert('You');
// alert('Mean');

// var name = prompt('Username');
// alert(name);

// var test = confirm('Are you sure ?');
// if (test === true) {
//     alert('ok');
// } else {
//     alert('cancel');
// }

alert('Welcome');

var again = true;

while (again) {
    var name = prompt('name');

    alert('Hello ' + name);

    again = confirm('again ?');
}

alert('Thanks');