// Mendapatkan data dari array dengan perulangan
const data = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Alice Johnson", age: 28 },
  { id: 4, name: "Bob Brown", age: 22 },
  { id: 5, name: "Charlie Davis", age: 35 },
];

for (let i = 0; i < data.length; i++) {
  console.log(data[i].id);
  console.log(data[i].name);
  console.log(data[i].age);
}
