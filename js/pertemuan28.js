// Membuat game tebak tebakan angka dengan while

let maxmum = parseInt(prompt("Masukkan angka maksimal: "));
while (!maxmum) {
  maxmum = parseInt(prompt("Masukkan angka maksimal: "));
}

const targetNum = Math.floor(Math.random() * maxmum) + 1;
console.log(targetNum);
let attempts = 0;

let guess = parseInt(prompt("Tebak angka: "));
while (guess !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Terlalu besar, coba lagi: "));
  } else {
    guess = parseInt(prompt("Terlalu kecil, coba lagi: "));
  }
}
// alert("Selamat, Anda berhasil menebak angka " + targetNum);
alert(
  "Anda berhasil menebak angka " +
    targetNum +
    " dalam " +
    attempts +
    " percobaan."
);

// Membuat game tebak tebakan angka dengan do while

// let maxmum = parseInt(prompt("Masukkan angka maksimal: "));
// while (!maxmum) {
//   maxmum = parseInt(prompt("Masukkan angka maksimal: "));
// }
// const targetNum = Math.floor(Math.random() * maxmum) + 1;
// console.log(targetNum);
// let guess;
// do {
//   guess = parseInt(prompt("Tebak angka: "));
//   if (guess > targetNum) {
//     alert("Terlalu besar, coba lagi.");
//   } else if (guess < targetNum) {
//     alert("Terlalu kecil, coba lagi.");
//   }
// } while (guess !== targetNum);
// alert("Selamat, Anda berhasil menebak angka " + targetNum);
