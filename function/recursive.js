// function showNumber(number) {
//     if (number === 0) return;

//     console.log(number);

//     return showNumber(number - 1);
// }

// showNumber(10);

function faktorial(number) {
    if (number === 0) return 1;

    return number * faktorial(number - 1);
}

console.log(faktorial(5));