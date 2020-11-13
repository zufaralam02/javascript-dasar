// membuat object

// object literal
var mhs1 = {
    nama: 'Rofiif Zufar Allam',
    nrp: '123456789',
    email: 'zufaralam02@gmail.com',
    jurusan: 'Teknik Informatika'
}

var mhs2 = {
    nama: 'Fulan',
    nrp: '987654321',
    email: 'fulan@gmail.com',
    jurusan: 'Sistem Informasi'
}

// function declaration
function createObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};

    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = createObjectMahasiswa('Fulanah', '123987456', 'fulanah@gmail.com', 'Teknik Informatika');

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Alan', '987123456', 'alan@gmail.com', 'Sistem Informasi');
