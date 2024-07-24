let str = prompt("");
let togglestring = "";
let result = str;

if (result === result.toUpperCase()) {
  togglestring += result.toLowerCase();
  console.log(togglestring);
} else {
  togglestring += result.toUpperCase();
  console.log(togglestring);
}

// let str = prompt("");
// let togglestring = "";
// for (i = 0; i < str.length; i++) {
//   let result = str[i];

//   if (result === result.toUpperCase()) {
//     togglestring += result.toLowerCase();
//     console.log(togglestring);
//   } else {
//     togglestring += result.toUpperCase();
//     console.log(togglestring);
//   }
// }
