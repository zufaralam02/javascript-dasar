// global scope / window scope

var a = 1;
var c = 1;

// untuk membuat variable local di function
"use strict";

function test() {
    var b = 2;
    
    // bisa
    console.log(a);
    
    var a = 2;
    console.log(window.a);

    c = 2;

    // di anggap variable global / akan di buat variable global var d;
    d = 2;
}

test();

// gk bisa
console.log(b);

console.log(c);

console.log(d);