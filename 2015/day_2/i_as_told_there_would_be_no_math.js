const fs = require("fs");

const calculate = (input) => {
  const [l, w, h] = input.split("x");

  const values = [l * w, w * h, h * l];
  const smallest = Math.min(...values);

  return values.reduce((a, b) => a + b, 0) * 2 + smallest;
};

var elves_list = fs
  .readFileSync("./input.txt")
  .toString()
  .split(String.fromCharCode(10));

let result = 0;

for (numbers in elves_list) {
  result += calculate(elves_list[numbers]);
}

return result;
