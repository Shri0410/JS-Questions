let str = "hello , 12 World...!!!";

function remChar(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase() || str[i] !== str[i].toLowerCase()) {
      string += str[i];

      console.log(str[i].toUpperCase());
    }
  }

  console.log(string);
}
remChar(str);
