// Melakukan perulangan pada object dengan  elegan for in

const studentScores = {
  John: 85,
  Jane: 92,
  Jim: 78,
  Jack: 90,
};

// for (let student in studentScores) {
//   console.log(student + " score is " + studentScores[student]);
// }

let total = 0;
let scores = Object.values(studentScores);
for (let score of scores) {
  total += score;
}
console.log("Rata-rata: " + total / scores.length); // Menghitung rata-rata
