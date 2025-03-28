// else adalah piliahan trakhir

const iniHari = prompt("Hari apa ini?").toLocaleLowerCase();

if (iniHari === "senin") {
  // true
  console.log("Selamat Bekerja");
} else if (iniHari === "selasa") {
  // false
  console.log("semoga selasa libur");
} else {
  console.log("Biasa aja");
}
