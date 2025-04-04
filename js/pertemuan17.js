// Cara memanggil data dari object

const data = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

console.log(data.name); // Output: John
console.log(data.age); // Output: 30
console.log(data.city); // Output: New York
console.log(data.hobbies[0]); // Output: reading
console.log(data.hobbies[1]); // Output: gaming
console.log(data.hobbies[2]); // Output: coding
console.log(data.address.street); // Output: 123 Main St
console.log(data.address.city); // Output: New York
console.log(data.address.state); // Output: NY
console.log(data.address.zip); // Output: 10001
