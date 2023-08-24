function convertToRoman(num) {
  var singles = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousands = ["", "M", "MM", "MMM", "MMMM"];
  //turn the number to a string, split individual characters and then turn each one to a number.
  var length = num.toString().length;
  var numbers = num.toString().split("").map(Number);
  var roman = '';
  var i = 0;
  
  switch (length) {
switch (length) {
    case 4:
      roman = thousands[numbers[i]];
      i++;
      break; // Add break to exit the switch

    case 3:
      roman += hundreds[numbers[i]];
      i++;
      break; // Add break to exit the switch

    case 2:
      roman += tens[numbers[i]];
      i++;
      break; // Add break to exit the switch

    case 1:
      roman += singles[numbers[i]];
      break; // Add break to exit the switch

    default:
      // Handle the case when num is 0
      roman = "N/A"; // You can change this to an empty string or any appropriate message
  }
  
  return roman;
}

// // do not edit below this line
module.exports = convertToRoman