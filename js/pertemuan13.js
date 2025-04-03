// array splice
// splice adalah method untuk menghapus nilai array
// slice adalah method untuk memotong array
// reverse adalah method untuk membalik array

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

months.splice(11, 1, "Desember");
// splice adalah method untuk menghapus nilai array
console.log(months);
