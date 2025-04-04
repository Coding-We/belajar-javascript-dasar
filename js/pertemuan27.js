// Kata kunci break untuk menghentikan perulangan
// let input = prompt("Masukkan angka: ");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") {
//     break;
//   }
// }
// alert("ok");

for (let i = 0; i < 10000; i++) {
  console.log(i);
  if (i === 100) break;
}
