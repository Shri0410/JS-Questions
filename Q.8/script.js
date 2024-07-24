let str = "jahegicogju";

let vowels = ["a", "e", "i", "o", "u"];

let result = "";

for (let i = 0; i < str.length; i++) {
  if (!vowels.includes(str[i])) {
    result += str[i];
  }
}
console.log(result);
