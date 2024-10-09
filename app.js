
document.write( "<h1>Chapter : 06 to 09</h1>");

// Question 01 : Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write("<h3>Question :01</h3>");

 let  a = 10;

 document.write("Result : <br>");
 document.write("The value of a is : "+a+ "<br>");
 document.write(".........................................<br>");
 document.write("<br>");

 ++a;

 document.write("The value of  ++a is :  " +a+ "<br>");
 document.write("Now the value of a is :  " +a+ "<br>");

 document.write("<br>");
 document.write("<br>");


 document.write("The value of  a++ is :  " +a+ "<br>");
 a++;

 document.write("Now the value of a is :  " +a+ "<br>");

 document.write("<br>");
 document.write("<br>");

 --a;

document.write("The value of --a is :  " +a+ "<br>");

 document.write("Now the value of a is :  " +a+ "<br>");

 document.write("<br>");
 document.write("<br>");


document.write("The value of a-- is :  " +a+ "<br>");
a--;

 document.write("Now the value of a is :  " +a+ "<br>");

 document.write("<br>");
 document.write("<br>");

 // Question 02 : What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

document.write("<h3>Question :02</h3>");


        // Initial values
    a = 2 ;
    var b = 1;
        document.write("<strong>Initial values:</strong><br>");
        document.write("a = " + a + "<br>"); // a = 2
        document.write("b = " + b + "<br><br>"); // b = 1

        // Step 1: --a (pre-decrement of a)
        --a; // a is decremented by 1 before being used
        document.write("<strong>After --a:</strong><br>");
        document.write("a = " + a + "<br>"); // a = 1
        document.write("b = " + b + "<br><br>"); // b = 1 (no change)

        // Step 2: --a - --b
        --b; // b is decremented by 1 before being used
        var resultStep2 = a - b; // Now we evaluate --a - --b
        document.write("<strong>After --a - --b:</strong><br>");
        document.write("a = " + a + "<br>"); // a = 1
        document.write("b = " + b + "<br>");
        document.write("Result after --a - --b: " + resultStep2 + "<br><br>"); // Result = 1 - 0 = 1

        // Step 3: --a - --b + ++b
        ++b; // b is incremented by 1 before being used
        var resultStep3 = a - b + b; // Now we evaluate --a - --b + ++b
        document.write("<strong>After --a - --b + ++b:</strong><br>");
        document.write("a = " + a + "<br>"); // a = 1
        document.write("b = " + b + "<br>");
        document.write("Result after --a - --b + ++b: " + resultStep3 + "<br><br>"); // Result = 1 - 0 + 1 = 2

        // Step 4: --a - --b + ++b + b--
        var resultFinal = a - b + b + b--; // Use b, then decrement b
        document.write("<strong>After --a - --b + ++b + b--:</strong><br>");
        document.write("a = " + a + "<br>"); // a = 1 (no change)
        document.write("b = " + b + "<br>"); // b = 0 (after post-decrement)
        document.write("Final result: " + resultFinal + "<br>"); // Result = 1 - 0 + 1 + 1 = 3
 
//Question 3 :Write a program that takes input a name from user &
// greet the user.
document.write("<h3>Question :03</h3>");

        // Take input from the user
var userName = prompt("Please enter your name:");

// Create a greeting message
var greetingMessage = "Hello, " + userName + "! Welcome to our website.";

// Display the greeting in an alert
document.write(greetingMessage);

//Question 5:Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.write("<h3>Question :05</h3>");

        // Take input from the user
        var userInput = prompt("Enter a number to display its multiplication table (leave blank for default 5):");
        
        // Check if the input is empty, if so, default to 5
        var number = userInput ? Number(userInput) : 5;

        // Display the multiplication table without loops
        document.write("<h2>Multiplication Table of " + number + ":</h2>");
        document.write(number + " x 1 = " + (number * 1) + "<br>");
        document.write(number + " x 2 = " + (number * 2) + "<br>");
        document.write(number + " x 3 = " + (number * 3) + "<br>");
        document.write(number + " x 4 = " + (number * 4) + "<br>");
        document.write(number + " x 5 = " + (number * 5) + "<br>");
        document.write(number + " x 6 = " + (number * 6) + "<br>");
        document.write(number + " x 7 = " + (number * 7) + "<br>");
        document.write(number + " x 8 = " + (number * 8) + "<br>");
        document.write(number + " x 9 = " + (number * 9) + "<br>");
        document.write(number + " x 10 = " + (number * 10) + "<br>");
