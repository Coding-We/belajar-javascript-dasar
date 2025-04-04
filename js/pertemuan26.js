// Perulangan menggunakan while

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

const password = "12345";
let guess = prompt("Masukkan password: ");
while (guess !== password) {
  alert("Password salah, coba lagi!");
  guess = prompt("Masukkan password: ");
}
alert("Password benar!");
