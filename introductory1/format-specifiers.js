// format specifiers
// - we can use these to insert values into text
// - %s for strings
// - %d for numbers

//                           args - passing a VARIABLE NUMBER OF ARGUMENTS - depends of a count of %s (FORMAT SPEC)
// console.log(formatString, args...);  
//            FORMAT STRINGS AS A CORE OF STRING ORDER which prints into a console
const username = "Bob";
console.log("Hello %s", username);

console.log("Hello %s, we can insert multiple strings: %s", username, "inserted");
//                 %s-PLACE HOLDER                     %s- Second place holder 
console.log("We can also insert numbers: %d", 32 + 5 / 4);


// // string without a specyfication of any PLACE HOLDER
console.log("We can insert args without specifiers as well:", username);


console.log("We can insert args without specifiers as well:", 1 + 10 + 100 + 1000);