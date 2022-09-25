var name        = "Sohel Arman";
var number      = 126.12125;
var firstName   = 'Sohel ';
var lastName    = 'Arman';
// var userChar    = prompt('Enter Your Conting Word :');
var text        = 'Bangladesh';
var text1       = ' is a beautiful country';

// console.log(name);                          // variable assign string
// console.log(number);                        // variable assign integer
// console.log(number.toFixed());              // fixed number assign
// console.log(number.toFixed(2));             // number 2 assign
// console.log(number.toPrecision(4));         // total 4 number assign
// console.log(Number(12));                    // just number assign
// document.write(firstName+lastName);         // Concate
// document.write(userChar.length);            // Result Length
// document.write(text.charAt(0));             // number wise Latter print
// document.write(text.toUpperCase());         // Text Uppercase
// document.write(text.toLowerCase());         // Text Lowercase
// document.write(text.concat(text1));         // concate print function
// document.write(text.slice(0,6));            // Word Cut

// Operator Name
// ==========================================
// 01. Arithmetic Operator => +(Addition) -(Subtraction) *(Multiplication) /(Division) %(Modulus) *(asterisk) **(Exponent) ++(Increment) --(Decrement)
// 02. Assignment Operator => =, +=, -=, *=, /=, **=, %=, (Example: x += 6 means x = x + 6)
// 03. Relational Operator => &&(And), ||(or), !(not)


// Collect the user data

// 01. Arithmetic Operator

// var num1 = 20;
// var num2 = 10;

// num1 = prompt('Enter your first data:');
// num2 = prompt('Enter your second data:');

// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);
// num1 = parseFloat(num1, 10);
// num2 = parseFloat(num2, 10);

// var add = num1 + num2;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;
// document.write(num1 +' + '+ num2 + ' = ' + add + '</br>');
// document.write(num1 +' - '+ num2 + ' = ' + sub + '</br>');
// document.write(num1 +' * '+ num2 + ' = ' + mul + '</br>');
// document.write(num1 +' / '+ num2 + ' = ' + div + '</br>');
// document.write(num1 +' % '+ num2 + ' = ' + mod + '</br>');

// 03. Relational Operator

var x = 30;
var y = 20;
var z = 10;

// document.write(x < y);
// document.write(x > y);
// document.write(x >= y);
// document.write(x <= y);
// document.write(x == y);
// document.write(x == "20");
// document.write(x === "20");
// document.write(x != y);
// document.write(x !== y);
// document.write(x !== '10');

// Logical Operator
// document.write(y > z && z < x && y < x);
// document.write(y < z || z > x || y < x);
// document.write(!(y < x));


// Control Statement
// Conditional Control Statement

// var point = parseInt(prompt('Enter Your Result'));

// if(point > 100 || point < 0)
// document.write('Wrong')

// else if(point >= 80 && point <= 100)
// document.write('A+');

// else if(point >= 75)
// document.write('A');

// else if(point >= 70)
// document.write('A-');

// else if(point >= 65)
// document.write('B+');

// else if(point >= 60)
// document.write('B');

// else if(point >= 55)
// document.write('B-');

// else if(point >= 50)
// document.write('C+');

// else if(point >= 45)
// document.write('C');

// else if(point >= 40)
// document.write('D');

// else
// document.write('F');

// var letter = prompt('Enter Your Letter: ');
// letter = letter.toLowerCase();

// if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u')
// document.write('Your letter is <b>Vowel</b>');
// else
// document.write('Your letter is <b>Consonant</b>');


// Digit Spelling
// switch, case, break, default

// var digit = parseInt(prompt("Enter Your Digit:"));

// switch(digit){
//     case 0:
//         document.write('Zero');
//         break;
//     case 1:
//         document.write('One');
//         break;
//     case 2:
//         document.write('Two');
//         break;
//     case 3:
//         document.write('Three');
//         break;
//     case 4:
//         document.write('Four');
//         break;
//     case 5:
//         document.write('Five');
//         break;
//     case 6:
//         document.write('Six');
//         break;
//     case 7:
//         document.write('Seven');
//         break;
//     case 8:
//         document.write('Eight');
//         break;
//     case 9:
//         document.write('Nine');
//         break;
//     default:
//         document.write('Not a digit');
// }



// Check Vowel and Consonant using switch function multiple

// var digit = prompt('Enter your letter');
// var digit = digit.toLowerCase();

// switch(digit){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         document.write(digit + ' is a vowel');
//         break;
//     default:
//         document.write(digit + ' is a consonant');
// }


// for Loop Function

// for(var x = 1; x <= 10; x = x + 1){
//     document.write("<h2>"+ x +". Bangladesh is our country</h2>");
// }


// while loop (First check the condition)
// var i = 1;
// var sum = 0;
// while(i <= 50){

//     if(i % 3 == 0 && i % 5 == 0) {
//         document.write(" " + i);
//         sum = sum + i;
//     }
//     i = i + 1;
// }
// document.write(" = " + sum);

// do while loop(First print the document then check the condition


// var x = 1;

// do{
//     document.write(" " + x);
//     x++
// } while (x <= 10);

// Break Function

var i = 1;

// for(i; i <= 100; i++){
//     if(i == 10){
//         break;
//     }
//  document.write(" " + i)
// }

// Continue function

// for(i; i <= 100; i++){
//     if(i == 10){
//         continue;
//     }
//  document.write(" " + i)
// }


// Positive negative number

// var number = Number(prompt('Enter your number'));
// if(number > 0){
//     document.write(number + " is a postive number");
// }else{
//     document.write(number + " is a negative number");
// }


// Ternary Operator

// var result = number > 0 ? "Positive" : "negative"; // 2 value print
// var result = number > 0 ? "Positive" : number < 0 ? "negative" : "Zero" ; // 2 value print

// document.write(result);

// Creating a Function

// function square(num){
//     var result = num * num;
//     document.write("Result = " + result + "</br>");
// }

// // calling a function
// square(5);
// square(6);
// square(7);
// square(8);

// function square(num1, num2){
//     var result = num1 * num2;
//     return result;
// }

// // calling a function
// var x =  square(5, 6);
// document.write(x);

// IIFEs (immediately invokeable function expression)

// (function Display(){
//     document.write("This is displayed text");
// })();


// (function SumPrint(num1, num2){
//     var result = num1 + num2;
//     document.write("Your result is = " + result);
// })(20, 30);


// Function Expression (var, let, const)
// var display2 = function displayMessage(){
//     document.write("Hi.. I am Sohel Arman");
// }
// display2();


// Array Function

// var name1 = "Sohel";
// var name2 = "Arman";
// var name3 = "Babu";
// var name4 = "Hidayetullah";
// var name5 = "Mamun";

// document.write(name1 + "<br>");


// var names = new Array();
// names[0] = "Mamun";
// names[1] = "Himo";
// names[2] = "Mila";
// names[3] = "Arman";
// names[4] = "Sohel <br>";

// document.write(names);
// console.log(names);


// var arrayFunction = ['Jui', 'Pospa', 'Ritu', 'Shamima', 'Nurima', 'Riya Moni', 'Jannati'];
// console.log(arrayFunction);
// arrayFunction.pop();                    // Remove last item
// arrayFunction.shift();                    // Remove last item
// arrayFunction.push('Bonnih');           // Add array item in last
// arrayFunction.unshift('Meherun');       // Add array item in first
// arrayFunction.splice(2,0,"Hena", "shipa");  // (add position number, after Remove item, New add item)
// arrayFunction.sort();                   // sorting with alphabetical ASC
// arrayFunction.reverse();                // sorting with reverse alphabet DESC
// // console.log(arrayFunction.length);
// document.write(arrayFunction);

// Concatenation array function

// var country1 = ['Bangladesh', 'India'];
// var country2 = ['Pakistan', 'Nepal'];

// var country = country1.concat(country2);
// console.log(country);
// document.write(country)


// array loop 

// var num = [101, 50, 30, 40, 10, 60, 15, 80, 90, 100];
// // var sum = 0;

// // for(var i = 0; i < 5; i++){
// //  console.log(num[i]);
// //  sum = sum + num[i];
// //  document.write(sum + ', <br>');
// // }
// num.sort(function(a,b){
//     return a-b;
// }); // number sorting ASC
// document.write(num + "<br>")
// num.sort(function(a,b){
//     return b-a;
// }); // number sorting DESC
// document.write(num)
// // var x = (1e3 + 50) * 3;
// // document.write(x);

// show highest Number (1D Array)
// function highestScore(scores){
//     let max = scores[0];
//     for(var x = 0; x < scores.length; x++){
//         if(max < scores[x]){
//             max = scores[x];
//         }
//     }
//     return max;
// }

// let scores = [21, 28, 99, 88, 15];
// let maxScore = highestScore(scores);
// document.write(maxScore);

// Show column and row wise array data
var x = 0;
var y = 0;
function highestRunScore(playersInfo){
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];


}

let playersInfo = [
    ["Ashraful", 20],
    ["Mahadi", 30], 
    ["Mosfique", 55], 
    ["Tamim", 80]
];
highestRunScore(playersInfo);



