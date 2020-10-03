var input = prompt('number');

if (input % 2 === 0) {
    alert(input + ' is an even number');
} else if (input % 2 === 1) {
    alert(input + ' is an odd number');
} else {
    alert(input + ' is not a number');
}