let char = prompt("Enter a Chatacter: ");

function checkCharcterType(char) {
  if (char === char.toUpperCase() && char !== char.toLowerCase()) {
    return "Uppercase Letter";
  } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
    return "Lowercase Letter";
  } else {
    return "Special Character";
  }
}
console.log(char + " : " + checkCharcterType(char));
