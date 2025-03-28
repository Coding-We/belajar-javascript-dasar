// Oprator logic or
// || adalah operator logic or

// const umur = prompt("Masukkan umur");
// const minUmur = 19;

// if (umur >= minUmur || umur <= 30) {
//   // true
//   console.log("Umur Benar memenuhi syarat");
// } else {
//   // false
//   console.log("Umur Salah tidak memenuhi syarat");
// }

const role = prompt("Masukkan role");
const roleAdmin = "admin";

if (role === roleAdmin || role === "svp") {
  // true
  console.log("Role Benar memenuhi syarat");
} else {
  // false
  console.log("Role Salah tidak memenuhi syarat");
}
