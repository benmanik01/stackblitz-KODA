// run `node index.js` in the terminal

//LEVEL 2- TASK 1
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('[] ' + 'Giben Frautama Manik'); //Nama
console.log('[] ' +23 + ' Tahun'); //Umur
console.log('[] ' +'Jalan Cendrawasih,Perumahan Awani Square No.B4/22,Cikaragamen,Kec.Setu,Kabupaten Bekasi,Jawa Barat 17320'); //Alamat
console.log('[] ' +'Saya Senang Bermain Musik dan Sepak Bola'); //Hobi
console.log('[] ' +'Lulusan Universitas Methodist Indonesia Jurusan Manajemen Informatika'); //Asal Sekolah
console.log('[] ' +'Ketertarikan saya itu dalam dunia programming berawal dari saya sekolah SMK jurusan IT sampai dengan lulus kuliah dengan jurusan yang sama.Jadi,saya sudah selaras dengan dunia logika atau pemograman.'); //Alasan Tertarik Programing
console.log('[] ' +'saya sudah memperlajari dasar dasar-dasar HTML dan CSS untuk membangun struktur dan tampilan website.'); //Hal yang sudah dipelajari berkaitan dengan programming
console.log('[] ' +'Saya sangat mengalami kesulitan dalam dunia progaming karna saya belajar otodidak saya tidak memiliki RoadMap dan membuat saya down.'); //Pernah Kesulitan ketika belajar programming.
console.log('[] ' +'Maka dari itu saya ingin ikut Bootcamp Koda karena saya ingin belajar mendalam lagi menganai pemograman dan masuk kedalam profesi programming.'); //Alasan kenapa ingin ikut Bootcamp Koda.
console.log('[] ' +'Saya berharap diterima di Bootcamp Koda Karna Saya memiliki Tekad yang Kuat dibidang Programing dan memiliki motivasi belajar yang tinggi dan disiplin.'); //Alasan Kenapa saya diterima di Bootcamp Koda
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
//LEVEL 2 - TASK 2
//Take 1
let nama ='Giben Frautama Manik';
let umur =23;
let alamat ='Jalan Cendrawasih,Perumahan Awani Square No.B4/22,Cikaragamen,Kec.Setu,Kabupaten Bekasi,Jawa Barat 17320';
let hobi ='musik';
let asalsekolah = 'Universitas Methodist Indonesia';
let jurusan ='Manajemen Informatika';
let alasansenangprogramming = 'sebenernya simpel sih, saya ngerasa programming itu gua banget. Saya orangnya sistematis dan suka kerja pakai logika. Pas nyoba ngoding, saya ngerasa nemu dunia yang emang nyambung sama cara kerja otak saya. Jadi, ngerjainnya tuh kerasa seru, bukan kayak beban.';
//Take 2
console.log('Nama saya adalah ' + nama + ',Lulusan' + asalsekolah + ' jurusan ' + jurusan + '. Alasan saya tertarik programing itu ' + alasansenangprogramming);
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
//Take 3
console.log('Perbedaan var, let, dengan const adalah soal seberapa bebas dan seberapa permanen variabel tersebut. Singkatnya, var itu fleksibel dan bisa dideklarasikan ulang dan nilanya berubah-ubah , let itu fleksibel untuk nilai yang berubah-ubah dan tidak dapat dideklarasikan ulang diwilayah yang sama, dan const itu harga mati untuk nilai yang tidak boleh diganggu gugat.')
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
//LEVEL 2 - TASK 3

// 1. Bagian Comment
// Comment ini sepanjang satu baris

/* 
Tipe data di JavaScript secara garis besar ada 8:
1. String: Untuk teks (diapit tanda kutip).
2. Number: Untuk angka (bulat maupun desimal) Tetapi didalam javaScript tidak ada bilang bulat melainkan Floating Point.
3. BigInt: Untuk angka bulat dengan presisi sangat besar.
4. Boolean: Nilai logika, hanya True atau False.
5. Undefined: Variabel yang sudah dideklarasikan tapi belum punya nilai.
6. Null: Nilai kosong atau "tidak ada" secara sengaja.
7. Symbol: Nilai unik dan tidak dapat diubah (sering untuk properti objek).
8. Object: Tipe data kompleks untuk menyimpan kumpulan data (termasuk Array dan Function).
*/

// 2. Deklarasi Tipe Data
// Tipe data String
const namadepan = "Giben Frautama"; // Tetap 
const namabelakang = "Manik"; // Tetap 
let domisili = "Bekasi";      // Bisa pindah


// Tipe data Number
const tahunLahir = 2002;       // Tetap
let umurNOW = 23;              // Bertambah tiap tahun
let beratBadan = 60.0;         // Bisa naik/turun

// Tipe data Boolean
const IsHuman = true;          // Tetap
let IsGraduated = false;       // Bisa berubah jadi true
let IsMarried = false;         // Bisa berubah

// Tipe data Null
let HoBi = null;               // Sengaja dikosongkan dulu
let pasangan = null;
let riwayatPenyakit = null;

// Tipe data Undefined
let variabelKosong;
let rencanaMasaDepan;
let dataUser;

// Tipe data BigInt
const angkaRaksasa = 9007199254740991n;
const jarakBintang = 10000000000000000n;
const totalAtom = 12345678901234567890n;

// Tipe data Object
const dataDiri = { nama: "Giben Frautama Manik", status: "Aktif" };
const koordinatRumah = { lat: -6.2, lng: 106.8 };
let keranjangBelanja = ["Buku", "Pena"];

// 3. Operasi Matematika
const bilanganKesatu = 20;
const bilanganKedua = 5;
let hasilPerhitungan;

// Penjumlahan
hasilPerhitungan = bilanganKesatu + bilanganKedua;
console.log('[] ' +'Hasil Penjumlahan dari '+ bilanganKesatu + ' + ' + bilanganKedua + ' = ' + hasilPerhitungan);

// Pengurangan
hasilPerhitungan = bilanganKesatu - bilanganKedua;
console.log('[] ' +'Hasil Pengurangan dari '+ bilanganKesatu + ' - ' + bilanganKedua + ' = ' + hasilPerhitungan);

// Perkalian
hasilPerhitungan = bilanganKesatu * bilanganKedua;
console.log('[] ' +'Hasil Perkalian dari '+ bilanganKesatu + ' * ' + bilanganKedua + ' = ' + hasilPerhitungan);

// Pembagian
hasilPerhitungan = bilanganKesatu / bilanganKedua;
console.log('[] ' +'Hasil Pembagian dari '+ bilanganKesatu + ' / ' + bilanganKedua + ' = ' + hasilPerhitungan);
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')