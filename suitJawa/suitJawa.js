var lagi = true;

while (lagi) {
    // pilihan user
    var player = prompt('pilih : gajah, orang, semut');

    // pilihan computer
    var computer = Math.random();

    if (computer < 0.34) {
        computer = 'gajah';
    } else if (computer >= 0.34 && computer <= 0.67) {
        computer = 'orang';
    } else {
        computer = 'semut';
    }

    console.log(computer);

    // menentukan rules
    var hasil = '';

    if (player == computer) {
        hasil = 'seri';
    } else if (player == 'gajah') {
        hasil = (computer == 'orang') ? 'menang' : 'kalah';
    } else if (player == 'orang') {
        hasil = (computer == 'gajah') ? 'kalah' : 'menang';
    } else if (player == 'semut') {
        hasil = (computer == 'gajah') ? 'menang' : 'kalah';
    } else {
        hasil = 'format salah';
    }

    // hasil
    alert(hasil + ' karena ' + player + ' melawan ' + computer);

    lagi = confirm('main lagi ?');
}

alert('sampai jumpa');