function tambah() {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

var result = tambah(1, 1, 1, 1, 1);

console.log(result);