function conversion(number) {
  var romanNum = {
  m: 1000,
  cm: 900,
  d: 500,
  cd: 400,
  c: 100,
  xc: 90,
  l: 50,
  xl: 40,
  x: 10,
  ix: 9,
  v: 5,
  iv: 4,
  i: 1
  }

var result;
var number;
for (var property in romanNum) {
    while (number % Object.keys(romanNum).length < number) {
      result += Object.keys(romanNum);
      number -= Object.values(romanNum);
      console.log(result);
  }
  }
  return result;

}

// for (var i = 0; i < romanNum.length; i++) {
//
// function conversion(num) {
//   var result = '';
//   var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
//   for (var i = 0;i<=decimal.length;i++) {
//   // looping over every element of our arrays
//     while (num%decimal[i] < num) {
//     // keep trying the same number until it won't fit anymore
//       result += roman[i];
//       // add the matching roman number to our result string
//       num -= decimal[i];
//       // remove the decimal value of the roman number from our number
//     }
//   }
//   return result;
// }

$(function() {
 $("form#roman-numerals").submit(function(e){
   var number = parseInt($("input#number").val());

   $("#result").text(conversion(number));
   e.preventDefault();
 });

});
