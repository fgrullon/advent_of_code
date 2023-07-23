/* 
    north (^) 
    south (v) 
    east (>)
    west (<)
*/

const fs = require("fs");
var input = fs.readFileSync("./input.txt").toString();

let coords = [0, 0];
let coord_list = ["0,0"];
for (x in input) {
  switch (input[x]) {
    case ">":
      coords[0] += 1;
      break;
    case "<":
      coords[0] -= 1;
      break;
    case "^":
      coords[1] += 1;
      break;
    case "v":
      coords[1] -= 1;
      break;
  }
  const coord = coords[0].toString() + "," + coords[1];
  if (!coord_list.includes(coord)) coord_list.push(coord);
}

console.log(coord_list);
