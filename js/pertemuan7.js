// Oprator Logic NOT
// ! adalah operator logic not

const role = prompt("Masukkan role");
const roleAdmin = "user" || "kasir";

if (role !== roleAdmin) {
  // true
  console.log("Role Benar memenuhi syarat");
} else {
  // false
  console.log("Role Salah tidak memenuhi syarat");
}
