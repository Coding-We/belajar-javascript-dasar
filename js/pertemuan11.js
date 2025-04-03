// Shift adalah method untuk menghapus nilai pertama dari array
// unshift adalah method untuk menambahkan nilai ke dalam array pertama
// pop adalah method untuk menghapus nilai terakhir dari array
// push adalah method untuk menambahkan nilai ke dalam array terakhir

const students = ["Eko", "Kurniawan", "Khannedy"];

students.unshift("Eko", "Kurniawan", "Khannedy");

students.unshift("Santoso");

students.unshift(0);

students.shift();

console.log(students);
