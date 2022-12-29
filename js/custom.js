console.clear();
// var name        = "Sohel Arman";
// var number      = 126.12125;
// var firstName   = 'Sohel ';
// var lastName    = 'Arman';
// var userChar    = prompt('Enter Your Conting Word :');
// var text        = 'Bangladesh';
// var text1       = ' is a beautiful country';

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

// var x = 30;
// var y = 20;
// var z = 10;

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
// var x = 0;
// var y = 0;
// function highestRunScore(playersInfo){
//     var highestScorer = playersInfo[0][0];
//     var highestScore = playersInfo[0][1];

//     for(var x = 1; x < playersInfo.length; x++){
//         if(highestScore < playersInfo[x][1]){
//             highestScore = playersInfo[x][1];
//             highestScorer = playersInfo[x][0];
//         }
//     }
//     return highestScorer + ' = ' + highestScore;
// }

// let playersInfo = [
//     ["Ashraful", 105],
//     ["Mahadi", 30],
//     ["Mosfique", 55],
//     ["Tamim", 80]
// ];
// var name = highestRunScore(playersInfo);
// document.write(name);
// console.log(name);

// It's a variable
// var name = "Sohel Arman";
// var age = 23;
// var cgpa = 3.50;
// var lang = ["Bangla", "English", "Hindi"];

// Object

// var student = {
//     name    : "Sohel Arman",
//     age     : 23,
//     cgpa    : 3.50,
//     lang    : ["Bangla", "Hindi", "English"],
// }

// document.write(student.name);

// Adding Constructor
// function Student(name, age, cgpa, lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
// }

// var student1 = new Student("Sohel Babu", 22, 3.75, ["Bangla", "English", "Hindi", "Urdu", "Farsy"]);
// var student2 = new Student("Mehrun", 20, 3.00, ["Bangla", "Hindi", "Farsy"]);
// console.log(student1.name, student1.age, student1.cgpa, student1.lang);
// console.log(student2.name, student2.age, student2.cgpa, student2.lang);

// Adding function inside the constructor
// function Student(name, age, cgpa, lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;

//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }

// var student1 = new Student("Sohel Babu", 22, 3.75, ["Bangla", "English", "Hindi", "Urdu", "Farsy"]);
// var student2 = new Student("Mehrun", 20, 3.00, ["Bangla", "Hindi", "Farsy"]);

// student1.display();
// student2.display();

// Random Guessing Game (5 step)
// 01. Guess a number from 1 to 5
// 02. Generate a random number between 1 to 5
// 03. Run the game for 5 times.
// 04. show the number of wons and losts
// var numOfWon = 0;
// var numOfLost = 0;
// for(var i = 1; i <= 5; i++){
//     var guessNumber = parseInt(prompt('Start your Game: Guess Enter a number from 1 to 5'));
//     var randomNumber = Math.floor(Math.random() * 5) + 1;
//     if(guessNumber == randomNumber){
//         console.log('You have won');
//         numOfWon++;
//     }else{
//         console.log('You have lost, Random number was ' + randomNumber);
//         numOfLost++;
//     }
// }
// document.write("Total Number of won = " + numOfWon + '<br>');
// document.write("Total Number of lost = " + numOfLost + '<br>');

// Date Function
// var date = new Date();
// document.write("Full Date = " + date + "</br>");

// var year = date.getFullYear();
// document.write("Current Year = " + year + "</br>");

// var month = date.getMonth();
// document.write("Current Month = " + month + "</br>");

// var currenDay = date.getDate();
// document.write("Current Date = " + currenDay + "</br>");

// var day = date.getDay();
// document.write("Current Day = " + day + "</br>");

// var hours = date.getHours();
// document.write("Current Hours = " + hours + "</br>");

// var minutes = date.getMinutes();
// document.write("Current Minutes = " + minutes + "</br>");

// var second = date.getSeconds();
// document.write("Current Seconds = " + second + "</br>");

// var millisecond = date.getMilliseconds();
// document.write("Current Millisecond = " + millisecond + "</br>");

// DOM Select html Element
// document.getElementById("heading1").innerHTML = "Replace Tag"; // Select from id name

// var heading2 = document.getElementById("heading2");
// heading2.innerHTML = "Replace Tag 2"; // With Variable

// document.getElementsByTagName("h1")[0].innerHTML = "Hi.."; // Select from tag name

// document.getElementsByClassName("para")[0].innerHTML = "Para replaced";

// Query Selector
// document.querySelector("#heading1").innerHTML = "Id changed by Query Selector";
// document.querySelector(".para").innerHTML = "Class changed by Query Selector";
// document.querySelector(".my-class a").innerHTML = "Click Here";
// document.querySelector("p").innerHTML = "Tag content changed by Query Selector";
// document.querySelectorAll("p")[1].innerHTML = "Second Para changes";

// On click method (Image change)

// var imgId =  document.querySelector("#imgId");
// function clickOne(){
//     imgId.src = 'img/on.png';
// }
// function clickTwo(){
//     imgId.src = 'img/off.png';
// }

// // Select tag & use css
// var link = document.getElementsByTagName('a')[1];
// link.innerHTML = "Replace Link";

// link.style.color = "green" // use css by js
// link.style.fontSize = "20px" // use css by js
// link.href = "https://www.facebook.com" // Replace the url

// Creating a new tag in last
// var heading1 = document.createElement('h1');
// var text = document.createTextNode("This is new line create in last");
// heading1.appendChild(text);

// var myDiv = document.getElementById("my-div");
// myDiv.appendChild(heading1); // add in last

// Crating a new tag in first
// var createHeading = document.createElement('h1');
// var text = document.createTextNode('Create a heading is first');
// createHeading.appendChild(text);
// var inDiv = document.getElementById("my-div");
// var firstHeading = document.getElementsByTagName('h1')[0];
// inDiv.insertBefore(createHeading, firstHeading);

// Deleted tag item
// var headingDelete = document.getElementsByTagName('h1')[1];
// var DivDelete = document.getElementById('my-div');
// DivDelete.removeChild(headingDelete);

// 40. Images slider
// var photos = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
// var imgTag = document.querySelector('img');

// var count = 0;
// function next(){
//     count++;
//     if(count >= photos.length){
//         count = 0;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }
// function prev(){
//     count--;
//     if(count < 0){
//         count = photos.length -1;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }

// 41. Select css from JS
// function addStyle(){
//     var myVar = document.querySelector("#paraId");
//     myVar.style.color = "red";
//     myVar.style.fontSize = '25px';
//     myVar.style.fontStyle = 'Italic';
//     myVar.style.textDecoration = 'underline';
// }
// Select Class name from stylesheet
// function addStyle(){
//     var myVar = document.querySelector("#paraId");
//     myVar.classList.add("para-style")
// }
// Remove style
// function removeStyle(){
//     var myVar = document.querySelector("#paraId");
//     myVar.classList.remove("para-style")
// }
// 42. Event Listener
// var mouseHover = document.querySelector('#paraId');
// mouseHover.addEventListener("mouseover", hoverFunction);
// function hoverFunction(){
//     mouseHover.classList.add("para-style");
// }
// mouseHover.addEventListener("mouseout", hoverOutFunction);
// function hoverOutFunction(){
//     mouseHover.classList.remove("para-style");
// }

// 43. Event Listener with multiple elements
// var len = document.querySelectorAll(".myButton").length;
// for(var i = 0; i < len; i++){
//     var button = document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + " is clicked";
//     });
// }

/*
<button class="myButton a">a</button>
<button class="myButton b">b</button>
<button class="myButton c">c</button>
*/

//44. Play Audio Click on button
// var len = document.querySelectorAll(".myButton").length;
// for(var i = 0; i < len; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         console.log(text);
//         audioPlay(text);
//         playAnimation(text);

//     });
// }
// 47. Keypress animation
// document.addEventListener("keypress", function(event){
//     var keyPress = event.key;
//     audioPlay(keyPress);
//     playAnimation(keyPress);
// });

// function audioPlay(text){
//     switch(text){
//         case "a":
//             var audio = new Audio('sounds/1.wav');
//             audio.play();
//             break;
//         case "b":
//             var audio = new Audio('sounds/2.wav');
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio('sounds/4.wav');
//             audio.play();
//             break;
//     }
// }
// // 46. click animation
// function playAnimation(text){
//     var selectButton =  document.querySelector("."+text);
//     selectButton.classList.add("anim");

//     setTimeout(function(){
//         selectButton.classList.remove("anim");
//     }, 2000);
// }

// 47. Key Press
// document.addEventListener("keypress", function(event){
//     var keyButton = event.key;
//     document.querySelector("p").innerHTML = "Your're clicked on button = " + keyButton;

// });

// 47. Key Press count
// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function(event){
//     count++
//     var keyButton = event.key;
//     document.querySelector("p").innerHTML = "Your're clicked on button = " + count;

// });

// 48. DOM Event
// 01. Event Object
//     event type: Change, submit, load, unload, open, play, canplay, pause, playing,       progress, ended, resize, scroll, toggle etc.
//      Properties: type,  target, prevendefault()
// 02. MouseEvent Object
// 03. KeyboardEvent Object
// 04. FocusEvent Object
// 05. ClipBoardEvent Object
// 06. DragEvent Object

// Working with input type
// const input = document.querySelector("input[name=name]");
// input.addEventListener('change', changeHandler);

// function changeHandler(event){
//     // console.log(event);
//     // console.log(event.type);
//     // console.log(event.target);
//     // console.log(event.target.id);
//     // console.log(event.target.className);
//     console.log(event.target.value);
// }

// 47. Event object onchange
// const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);

// Array.from(programs).map((program) => {
//     program.addEventListener("change", programHandler);
// });

// function programHandler(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }

// const department = document.querySelector("#department");
// // console.log(department);
// department.addEventListener('change', handleDepartment);
// function handleDepartment(e){
//     console.log(e.target.value);
// }

// 49. On Submit Event
// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #email");
// const password = form.querySelector("div #password");
// form.addEventListener("submit", formHandler);

// function formHandler(e){
//     e.preventDefault();

//     // for console
//     console.log(name.value);
//     console.log(email.value);
//     console.log(password.value);

//     // user data
//     const userInfo = {
//         name:       name.value,
//         email:      email.value,
//         password:   password.value,
//     }
//     console.log(userInfo);
//     // for empty input field
//     name.value="";
//     email.value="";
//     password.value="";
// }

// 49. Media Event
// const video = document.querySelector("video");
// video.addEventListener("canplay", function(){
//     console.log("canplay");
// });
// video.addEventListener("play", function(){
//     console.log("play");
// });
// video.addEventListener("pause", function(){
//     console.log("pause");
// });
// video.addEventListener("playing", function(){
//     console.log("playing");
// });
// video.addEventListener("ended", function(){
//     console.log("Thanks for watching");
// });
// video.addEventListener("volumechange", function(){
//     console.log("Sound change");
// });

// 50. Load, unload
// window.addEventListener('load', function(){
//     console.log("load");
// });
// window.addEventListener('unload', function(){
//     console.log("unload");
// });

// // 50. Scroll
// window.addEventListener('scroll', function(){
//     console.log("Scrolling");
// })

// // 50. Resize
// window.addEventListener('resize', function(){
//     const width = this.window.outerWidth;
//     const height = this.window.outerHeight;
//     console.log(`height: ${height}, width: ${width}`);
// })

// 50. Toggle Event
// const details = document.querySelector("details");
// details.addEventListener('toggle', function(e){
//     console.log(e.target.open);
// });

// 51. Mouse Event
// var div = document.querySelector(".div-box");
// div.addEventListener('click', function(event){
// console.log("Single click");
// console.log(event.target.id);
// console.log(event.target.className);
// console.log(event.target.innerHTML);
// console.log(event.target.textContent);
// console.log(event.target.innerText);

// });
// div.addEventListener('dblclick', function(){
//     console.log("Double Click");
// });
// div.addEventListener('mousedown', function(){
//     console.log("Mouse Down");
// });
// div.addEventListener('mouseup', function(){
//     console.log("Mouse Up");
// });
// div.addEventListener('mouseenter', function(){
//     console.log("Mouse Enter");
// });
// div.addEventListener('mouseleave', function(){
//     console.log("Mouse Leave");
// });
// div.addEventListener('mousemove', function(){
//     console.log("Mouse Moved");
// });
// div.addEventListener('mouseover', function(e){
//     // console.log("Mouse Over");
//     // console.log("Client X = " + e.clientX + ", Client Y = " + e.clientY);
//     console.log("Offset X = " + e.offsetX + ", Offset Y = " + e.offsetY);
// });

// Mapping
// const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
// Array.from(buttons).map((button) => {
//     button.addEventListener("click", function(e){
//         console.log(e.target.innerText);
//     });
// });

// 52. Keyboard Event
// Properties = key, keyCode, code, shiftKey, ctrlKey, repeat;

// const textarea = document.querySelector('textarea');

// textarea.addEventListener('keydown', function(e){
//     console.log(e.repeat);
// });

// textarea.addEventListener('keypress', function(e){
//     console.log(e.keyCode);
// });

// textarea.addEventListener('keyup', function(e){
//     console.log(e.code);
// });

// 53. focus Event
// Properties = onblur, onfocus, onfocusin, onfocusout;

// const input = document.querySelector('input');

// input.addEventListener('blur', function () {
//     input.style.backgroundColor = '#333';
// });

// input.addEventListener('focus', function(){
//     input.style.backgroundColor = '#fff';
// });

// input.addEventListener('focusin', function(){
//     input.style.backgroundColor = 'red';
// });

// input.addEventListener('focusout', function(){
//     input.style.backgroundColor = 'orange';
// });

// 54. Clipboard Event
// properties = oncopy, oncut, onpaste;

// const input = document.querySelector('input');

// input.addEventListener('copy', function () {
//     console.log('text copied');
// });

// input.addEventListener('cut', function () {
//     console.log('text cuted');
// });

// input.addEventListener('paste', function () {
//     console.log('text pasted');
// });

// 55. Drag Events
// (properties = dragstart), drag, dragend, dragenter, dragleave, dragover, drop;

// const div = document.querySelector("#div1");
// const p = document.querySelector("#drag1");

// p.addEventListener("dragstart", function (e) {
//   e.dataTransfer.setData("Text", e.target.id);
//   console.log(e.target.id);
// });

// div.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// div.addEventListener("drop", function (e) {
//   let id = e.dataTransfer.getData("Text");
//   div.appendChild(document.getElementById(id));
//   e.preventDefault();
// });

// 56. BOM (Browser Object Model)

// console.log(window);

//href
// console.log(location.href);
// // Protocol
// console.log(location.protocol);
// // Hostname
// console.log(location.hostname);
// // port
// console.log(location.port);
// // pathname
// console.log(location.pathname);

// var locationDiv = document.querySelector(".location-div");

// var p = locationDiv.children[0];
// p.textContent = location.href;

// var p1 = locationDiv.children[1];
// p1.textContent = location.protocol;

// var p2 = locationDiv.children[2];
// p2.textContent = location.hostname;

// var p3 = locationDiv.children[3];
// p3.textContent = location.port;

// var p4 = locationDiv.children[4];
// p4.textContent = location.pathname;

// const visit = document.querySelector("#visit-button");
// visit.addEventListener("click", function () {
//   location.assign("https://www.lamcoder.com");
// });

// 57. BOM popup Events

// function deleteFunction() {
//   let value = confirm("Are you sure?");
//   if (value) {
//     console.log("Data Deleted");
//   } else {
//     console.log("Data delete Canceled");
//   }
// }
// deleteFunction();

// function welcomeMessage() {
//   var h1 = document.createElement("h1");
//   let text;

//   var msg = prompt("Enter your name: ");
//   if (msg == null || msg == "") {
//     text = "No name found";
//   } else {
//     text = "Welcome " + msg;
//   }
//   var textNode = document.createTextNode(text);
//   h1.appendChild(textNode);
//   document.body.appendChild(h1);
// }

// welcomeMessage();

// 59. Timing Event method

// setTimeout(() => {
//   console.log("Time start");
// }, 3000);

// setTimeout(display, 2000);

// function display() {
//   console.log("Function start");
// }

// const saveBtn = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveBtn.addEventListener("click", saveUser);

// function saveUser() {
//   message.textContent = "User Registration Successful";

//   setTimeout(() => {
//     message.textContent = "";
//   }, 5000);
// }

// const saveBtn = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveBtn.addEventListener("click", displayCount);

// function displayCount() {
//   let count = 0;
//   message.textContent = count;

//   setInterval(() => {
//     count++;
//     message.textContent = count;
//   }, 1000);
// }

// const saveBtn = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveBtn.addEventListener("click", startClock);

// function startClock() {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   minutes = formatTime(minutes);
//   seconds = formatTime(seconds);

//   let time = hours + ":" + minutes + ":" + seconds;

//   message.textContent = time;
//   setInterval(startClock, 1000);
// }

// function formatTime(value) {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// }

// 61. Error Handling

// try {
//   alert("Hello word");
//   alert(x);
//   alert("Next Hello word");
// } catch (err) {
//   console.log(err);
// } finally {
//   alert("Finally Hello word");
// }

// 62. Error Handling part 02

// document.querySelector("#checkButton").addEventListener("click", function () {
//   alert("Button is clicked");
// });

// 66. default and rest parameter

// ("use strict");
// function message(text = "This is default parameter") {
//   console.log(`${text}`);
// }

// message();
// message("This is function parameter");

// function sum(x, y, ...z) {
//   console.log(`x = ${x}, y = ${y}, z = ${z}`);
// }

// sum(10, 20, 30, 40, 50, 60, 70);

// 67. spread operator

// function addNumbers(x, y, z) {
//   return x + y + z;
// }
// let numbers = [1, 2, 3];
// console.log(addNumbers(...numbers));

// 68. object literals, Object Function in function.

// function student(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// console.log(student("Sohel Arman", 23));

//Method 01
// let message = {
//   body: function () {
//     return `Hi, I am a object function`;
//   },
// };

// console.log(message.body());

// method 02
// let message = {
//   body() {
//     return `Hi, I am a object function`;
//   },
// };

// console.log(message.body());

// method 03
// let message = {
//   "body name"() {
//     return `Hi, I am a object function`;
//   },
// };

// console.log(message["body name"]());

// 69. for of, and for in loop

// for of
// const names = ["s1", "s2", "s3"];
// for (let name of names) {
//   console.log(name);
// }

// for in
// let students = {
//   ID: 101,
//   name: "Sohel Arman",
//   gpa: 4.75,
// };

// for (let x in students) {
//   console.log(x); // Print object name
//   console.log(students[x]); // print object value
//   console.log(`${x} : ${students[x]}`); // Print both
// }

// 70. forEach | for vs forEach

//for
// var numbers = [10, 20, 30, 40, 50];
// for (var x = 0; x < numbers.length; x++) {
//   console.log(numbers[x]);
// }

// ForEach
// var numbers = [10, 20, 30, 40, 50];

// numbers.forEach(function (x) {
//   console.log(x);
// });

// ForEach Square
// var numbers = [10, 20, 30, 40, 50];
// var squareNumber = [];

// numbers.forEach(function (x) {
//   squareNumber.push(x * x);
// });
// console.log(squareNumber);

// ForEach Addition
// var numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function (x, index, arr) {
//   arr[index] = x + 5;
// });
// console.log(numbers);

// 71. map and filter array function

// map
// var numbers = [10, 20, 30, 40, 50, 5, 6, 6, 5, 47, 85, 5, 6, 5, 6];
// var squareNumber = numbers.map(function (x) {
//   return x * x;
// });
// console.log(squareNumber);

// Filter
var numbers = [10, 20, 30, 40, 50, 5, 6, 6, 5, 47, 85, 5, 6, 5, 6];
var newNumber = numbers.filter(function (x) {
  return x < 10;
});
console.log(newNumber);
