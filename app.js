//Alerts
//Chapter 1
//Q.1
//alert("Welcome To My Website");
//Q.2
//alert("Error!Please Enter a valid Password");
//Q.3
//alert("Welcome the Js land \n Happy Coding");
//Q.4
//alert("Welcome the Js land ");
//alert("Happy Coding \n Prevent this page from creating additional dialogs");
//Q.5
//alert("Hello... I can run JS through my web browser's console");
//console.log(alert)



//VARIABLES	FOR	STRINGS
//Chapter 2
//Q.1
//var userName;
//Q.2
//var userName = "Sharjeel Khan";
//Q.3
//var message = "Hello World";
//alert(message);
//Q.4
//var stundetName = "Ali Khan";
//var age = "17 Years Old";
//var rollNum = "SSUET";
//var module = "Mobile & CLound Computing - Module A";
//alert(stundetName);
//alert(age);
//alert(rollNum);
//alert(module);
//Q.5
//var pizza = "Pizza \n Pizz \n Piz \n Pi \n P "; 
//alert(pizza);


//VARIABLES	FOR	NUMBERS
//Chapter 3
//Q.1
//var age = "I am 17 Years Old";
//alert(age);
//Q.2
//var visit = "You have visited this site 21 times";
//alert(visit);
//Q.3
//var birthYear = "My Birth year is 1988";
//document.write(birthYear);
//Q.4
//var visitorName = "Sami Khan"; 
//var order = "Ordered"
//var qty = 3;
//var title = "T-Shirts";
//var message2 = "On XYZ Store"
//document.write(visitorName, " ", order, " ", qty, " ", title, " ", message2);

//VARIABLE NAMES:	LEGAL	&	ILLEGAL
//Chapter 4
//Q.1
//var visitorName, order, qty;
//Q.2
//var _, $, qty, title, message2;
//var !, @, #, ^, #;

//Q.3
//var heading = 'Rules for naming JS variables';
//var $my_1stVariable = "____, ____, ____, and ____. ";
//var fullName = '$name, _name or, name';
//document.write(heading, " ", $my_1stVariable, " ", fullName);

//MATH	EXPRESSIONS	
//Chapter 5 6 & 7
//Q.1
//var num = 13 + 9;
//alert(num);
//Q.2
//var add = 13 + 9;
//alert(add);
//var sub = 13 - 9;
//alert(sub);
//var mul = 13 * 9;
//alert(mul);
//var div = 13 / 9;
//alert(div);
//Q.3
//var statement = 'Total Cost to buy 5 Tickets to a movie is ';
//var mul = 600 * 5;
//var currency = 'PKR';
//document.write(statement, " ", mul, " ",currency);
//Q.9
//var heading = 'Currency In PKR';
//var statement = 'Total Currency In PKR ='; 
//var total = (10 * 104) + (25 * 28);
//document.write( heading, "<br>", "<br>", "<br>", statement, " ", total);
//Q.11
//var cY = 'Current Year:'
//var currentYear = 2023;
//var bY = 'Birth Year:'
//var birthYear = 1988;
//var res1 = 'They are';
//var res2 = 'Years Old';
//var cal = (currentYear - birthYear);
//document.write(cY, " ", currentYear, "<br>", bY, " ", birthYear, "<br>", res1, " ", cal, " ", res2);


//Chapter 8 - 11
//Q.1
//var fName = prompt("What is your first name?");
//if (fName === "John") {
//  alert("Hi, " + fName);
//}
//Q.3
//var city = prompt("What is your city?");
//if (city === "Karachi") {
//  alert("Welcome to the city of Lights");
//}
//Q.4
//var gender = prompt("Enter your gender (male/female):");
//if (gender === "male") {
//  alert("Good Morning Sir.");
//} else if (gender === "female") {
//  alert("Good Morning Ma'am.");
//}
//Q.6
//var maxAge = prompt("Enter the max age:");
//var currentAge = prompt("Enter your current age:");
//if (currentAge <= maxAge) {
//  alert("You are welcome");
//} else {
//  alert("Nikal Betaa ... Cut Laayyyyy");
//}//
//var fuel = prompt("Enter the remaining fuel in your car (in litres):");
//Q.7
//if (fuel < 0.25) {
//  alert("Please refill the fuel in your car");
//} else {
//  alert("You have enough fuel.");
//}



//Chapter 12 - 13
// Q.1
//var num = prompt("Enter a number:");
//if (num % 3 === 0) {
//  alert("The number is divisible by 3.");
//} else {
//  alert("The number is not divisible by 3.");
//}
//Q.2
//var num = prompt("Enter a number:");
//if (num % 2 === 0) {
//  alert("The number is even.");
//} else {
//  alert("The number is odd.");
//}

//Q.3
//var age = prompt("Enter your age:");
//if (age > 18) {
//  alert("Old enough");
//} else {
//  alert("Too young");
//}
//Q.4
//var fname = prompt("Enter your name:");
//var yourName = "sharjeel";
//if (fname === yourName) {
//  alert("Hello, ${fname}. Mera naam bhi yehi hai");
//} else{
//    alert("Nikal lay beta");
//}
//Q.12
//var greeting;
//v//ar hour = 13;
//if (hour < 18) {
//  greeting = "Good day";
//} else {
//  greeting = "Good evening";
//}

//Chapter 14 - 17
//Q.1
//var studentNames = [];
//Q.2
//var studentNames = new Array();
//Q.3
// var newArr = ["apple", "banana", "orange", "pear"];
// document.write(newArr);
//Q.4
// var newArr = [1, 2, 3, 4, 5];
// document.write(newArr);
//Q.5
// var newBoll = [true, false, true, false];
// document.write(newBoll);

//Q.8
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h3>List of Education Qualifications in Pakistan</h3>");

// for ( i = 0; i < educationQualifications.length; i++) {
//   document.write("<li>" + educationQualifications[i] + "</li>");
// }

// document.write("</ol>");

//Chapter 18 - 20
//Q.1
// for (i = 0; i < 5; i++) {
//     document.write("Hello World <br>");
//   }
//Q.2
// for ( i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
//   }

//Q.3

// var tableNumber = prompt("Enter a number for the table:");
// var tableLength = prompt("Enter the length of the table:")  ;

// document.write("Multiplication Table of " + tableNumber );

// for (i = 1; i <= tableLength; i++) {
//    result = tableNumber * i;
//   document.write(tableNumber + " x " + i + " = " + result + "<br>");
// }

//Q.4

//var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for ( i = 0; i < A.length; i++) {
//   document.write(A[i] + "<br>");
// }

//Q.9

// var A = [24, 53, 78, 91, 12];
// var max = A[0];

// for (i = 1; i < A.length; i++) {
//   if (A[i] > max) {
//     max = A[i];
//   }
// }

// document.write("The largest number in the array is: " + max);

//Q.10
// Not Done
// var A = [24, 53, 78, 91, 12];
// var min = A[0];

// for (i = 1; i < A.length; i++) {
//   if (A[i] < min) {
//     min = A[i];
//   }
// }

// document.write("The smallest number in the array is: " + min);


//Q.11

// for (i = 1; i <= 20; i++) {
//     document.write(i * 5 );
//   }

//Q.17

//   var output = "";

// for (var i = 0; i <= 20; i++) {
//   if (i === 0) {
//     output += "0 is even";
//   } else if (i % 2 === 0) {
//     output += i + " is even";
//   } else {
//     output += i + " is odd";
//   }
//   if (i !== 20) {
//     output += "<br>";
//   }
// }

// document.write(output);

//Chapter 20 - 25
//Q.1
// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "!");

//Q.2

// var phoneModel = prompt("What is your favorite mobile phone model?");
// var inputLength = phoneModel.length;
// var message = "My favorite phone is: " + phoneModel + "\n" + "Length of string: " + inputLength;

// alert(message);

//Q.3

// var word = "Pakistani";
// var index = word.indexOf("n");
// var message = "String: " + word + "\n" + "Index of 'n': " + index;
// alert(message);

//Q.4

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// var message = "String: " + word + "\n" + "Last Index of 'l': " + lastIndex;

// alert(message);

//Q.6

// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "!");

//Q.7

// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// var message = "City: " + city + "\n" + "After Replacement: " + newCity;

// alert(message);


//Q.10

// var url = prompt("Please enter a URL in the format of www.example.com:");
// var dotIndex = url.indexOf(".");
// var domain = url.substring(dotIndex + 1);
// var message = "URL: " + url + "\n" + "Domain: " + domain;


// alert(message);var

//Q.11

// var userInput = prompt("Please enter some text:");
// var upperCase = userInput.toUpperCase();
// var message = "User Input: " + userInput + "\n" + "Upper Case: " + upperCase;

// alert(message);

//Chapter 26 - 34
//Q.1

// var num = prompt("Please enter a positive integer:");

// if (num > 0) {

//     var message = "Number: " + num + "\n" + "Round off value: " + Math.round(num) + "\n" + "Floor value: " + Math.floor(num) + "\n" + "Ceil value: " + Math.ceil(num);

//     alert(message);
// } else {
//     alert("Please enter a positive integer.");
// }
//Q.2

// var num = prompt("Please enter a negative integer:");

// if (num < 0) {
  
//   var message = "Number: " + num + "\n" + "Round off value: " + Math.round(num) + "\n" + "Floor value: " + Math.floor(num) + "\n" + "Ceil value: " + Math.ceil(num);

//   alert(message);
// } else {
  
//   alert("Please enter a negative integer.");
// }

//Q.3

// var num = prompt("Please enter a positive floating point number:");
// if (num > 0) {
//    var message = "Number: " + num + "\n" + "Round off value: " + Math.round(num) + "\n" + "Floor value: " + Math.floor(num) + "\n" + "Ceil value: " + Math.ceil(num);
//   alert(message);
// } 
// else {
//    alert("Please enter a positive floating point number.");
// }

//Q.4

// var num = prompt("Please enter a negative floating point number:");

// if (num < 0) {
  
//   var message = "Number: " + num + "\n" + "Round off value: " + Math.round(num) + "\n" + "Floor value: " + Math.floor(num) + "\n" + "Ceil value: " + Math.ceil(num);
//    alert(message);
// } else {
//   alert("Please enter a negative floating point number.");
// }

//Q.5

// var num =prompt("Please enter a number:");
// var absValue = Math.abs(num);
// var message = "The absolute value of " + num + " is " + absValue;

// alert(message);

//Q.6

// var diceValue1 = Math.round(Math.random() * 5) + 1;
// var diceValue2 = Math.round(Math.random() * 5) + 1;
// var message = "Random dice value: " + diceValue1 + "\nRandom dice value: " + diceValue2;

// alert(message);

//Q.7

// var coinValue1 = Math.round(Math.random());
// var coinValue2 = Math.round(Math.random());
// var message = "Random coin value: " + (coinValue1 ? "Heads" : "Tails") + "\nRandom coin value: " + (coinValue2 ? "Heads" : "Tails");

// alert(message);

//Q.11

// var abc = new Date();
// document.write(abc);

//Q.12

// var currentMonth = new Date().getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June",
//                     "July", "August", "September", "October", "November", "December"];
// var currentMonthName = monthNames[currentMonth];

// document.write(`Current Month: ${currentMonthName}`);
