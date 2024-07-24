let string = "qwertyuioplkjhgfdsazxcvbnm";

let string1 = "";

for (let i = 0; i < string.length; i++) {
  let tot = string[i];

  if (!(tot == "a" || tot == "e" || tot == "i" || tot == "o" || tot == "u")) {
    string1 += tot;
  }
}
console.log(string1);
