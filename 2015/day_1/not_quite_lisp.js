const fs = require("fs");

function read(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] === "(" ? count++ : count--;
  }
  return count;
}

fs.readFile("./input.txt", "utf8", async (err, data) => {
  const result = await read(data);
  console.log(result);
});

// Test
// console.log(read("(())") === 0 && read("()()") === 0);
// console.log(
//   read("(((") === 3 && read("(()(()(") === 3 && read("))(((((") === 3
// );

// console.log(read("())") === -1 && read("))(") === -1);
// console.log(read(")))") === -3 && read(")())())") === -3);
