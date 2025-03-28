// Switch Sebagai Alternatif If Statement
// switch adalah perintah yang digunakan untuk mengatur kode program
// switch digunakan untuk memilih kode program yang akan dijalankan berdasarkan kondisi tertentu
// const day = new Date().getDay(); // untuk menunjukan hari ini

const day = 4;

switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;
  default:
    console.log("Hari tidak diketahui");
    break;
}
