const fs = require("fs");

function read(input) {
  let count = 0,
    basemen = null;
  for (let i = 0; i < input.length; i++) {
    input[i] === "(" ? count++ : count--;
    if (count === -1 && !basemen) basemen = i + 1;
  }
  return { count, basemen };
}

fs.readFile("./input.txt", "utf8", async (err, data) => {
  const result = await read(data);
  console.log(result);
});

// Test Part 1
// console.log(read("(())") === 0 && read("()()") === 0);
// console.log(
//   read("(((") === 3 && read("(()(()(") === 3 && read("))(((((") === 3
// );

// console.log(read("())") === -1 && read("))(") === -1);
// console.log(read(")))") === -3 && read(")())())") === -3);

// // Test Part 2
// console.log(read(")"), read(")") === 1);

// console.log(read("()())"), read("()())").basemen === 5);
