let string = "qwertyuiopasdfghjklmnbvcxz";
let splited = string.split("");

let sorted = splited.sort();

let result = sorted.join("");

console.log("Before : " + string);
console.log("After: " + result);
