// Mendapatkan data dari nested array dengan nested Loop
const students = [
  ["John", "Santoso", "Budiman", "Sukirno"],
  ["Siti", "Aisyah", "Fatimah", "Zainab"],
  ["Budi", "Sukardi", "Joko", "Sukirno"],
];

for (let i = 0; i < students.length; i++) {
  const row = students[i];
  console.log(`Row ${i + 1}:`);
  for (let j = 0; j < row.length; j++) {
    const student = row[j];
    console.log(`Student ${j + 1}: ${student}`);
  }
  console.log("--------------------------");
}
