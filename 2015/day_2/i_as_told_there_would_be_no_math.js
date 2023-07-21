const fs = require("fs");

const calculate = (input) => {
  const [l, w, h] = input.split("x");

  const values = [2 * l * w, 2 * w * h, 2 * h * l];
  const [small, midl, high] = [l, w, h].sort((a, b) => a - b);
  let ribbon = 2 * parseInt(small) + 2 * parseInt(midl) + l * w * h;
  let val = values.reduce((a, b) => a + b, 0) + parseInt(small);

  return { val, ribbon };
};

var elves_list = fs
  .readFileSync("./input.txt")
  .toString()
  .split(String.fromCharCode(10));

let result = 0;
let ribbon = 0;

for (numbers in elves_list) {
  const calc = calculate(elves_list[numbers]);
  result += parseInt(calc.val);
  ribbon += calc.ribbon;
}

console.log(result, ribbon);
return result, ribbon;
