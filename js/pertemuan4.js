// cek kondisi berlapis lebih aman

const password = prompt("Masukkan password");

// if (password === "1234") {
//   // true
//   console.log("Password Benar");
// } else if (password === "12345") {
//   // true
//   console.log("Password Benar");
// } else {
//   // false
//   console.log("Password Salah");
// }

// if (password.indexOf(" ") === -1) {
//   // true
//   console.log("Password tidak ada spasi");
// } else {
//   // false
//   console.log("Password ada spasi");
// }

// if (password.length >= 5 && password.indexOf(" ") === -1) {
//   // true
//   console.log("Password Benar");
// } else {
//   // false
//   console.log("Password Salah");
// }

if (password.length >= 5) {
  // true
  if (password.indexOf(" ") === -1) {
    // true
    console.log("Password Benar");
  } else {
    // false
    console.log("Password Salah ada spasi");
  }
} else {
  // false
  console.log("Password Salah kurang dari 5");
}
