// Manipulasi array

// 1. menambah isi array

// var arr = ['a', 1, true];

// var arr = [];
// arr[0] = 'Rofiif';
// arr[1] = 'Zufar';
// arr[2] = 'Allam';
// arr[4] = 'Fulan';

// 2. menghapus isi array

// var arr = ['Rofiif', 'Zufar', 'Allam'];
// arr[1] = undefined;

// console.log(arr);

// 3. menampilkan isi array

// var arr = ['Rofiif', 'Zufar', 'Allam', 'Fulan'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('mahasiswa ke ' + (i + 1) + ' ' + arr[i]);
// }

// 4. method pada array
// 1. join

// var arr = ['Rofiif', 'Zufar', 'Allam', 'Fulan', 'Fulanah'];

// console.log(arr.join(' - '));

// 2. push & pop

// arr.push('Fulan', 'Fulanah');
// arr.pop();
// arr.pop();

// console.log(arr.join(' - '));

// 3. unshift & shift

// arr.unshift('Fulan');
// arr.shift();

// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)

// arr.splice(2, 0, 'Fulan', 'Fulanah');
// arr.splice(1, 2, 'Fulan', 'Fulanah');

// console.log(arr.join(' - '));

// 5. slice
// slice(awal, akhir)

// var arr2 = arr.slice(1, 3);

// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var print = function (e) {
//     console.log(e);
// }

// arr.forEach(print);

// arr.forEach(function (e) {
//     console.log(e);
// });

// arr.forEach(function (e, i) {
//     console.log('no ' + (i + 1) + ' is ' + e);
// });

// 7. map (mengembalikan array)

// var arr2 = arr.map(function (e) {
//     return e * 2;
// });

// console.log(arr2.join(' - '));

// 8. sort

// var arr = [3, 2, 20, 1, 10, 8, 9, 6, 7, 4, 5];

// console.log(arr.join(' - '));

// // arr.sort();
// arr.sort(function (a, b) {
//     return a - b;
// });

// console.log(arr.join(' - '));

// 9. filter (bisa mengembalikan banyak nilai)

// var arr = [3, 2, 20, 1, 10, 8, 9, 6, 7, 4, 5];

// var arr2 = arr.filter(function (x) {
//     // return x == 5;
//     return x > 5;
// });

// console.log(arr2.join(' - '));

// 10. find (hanya mengembalikan satu nilai)

arr = [3, 2, 20, 1, 10, 8, 9, 6, 7, 4, 5];

var arr2 = arr.find(function (x) {
    // return x == 5;
    return x > 5;
});

console.log(arr2);
