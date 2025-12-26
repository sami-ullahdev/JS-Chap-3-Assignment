// Question no 1
function showBtn1() {
    // For Addition
    var num1 = +prompt("Enter No 1 you want to (+)");
    var num2 = +prompt("Enter No 2 you want to (+) in No 1");
    var sum = num1 + num2;

    document.write("<h1>", "Sum of ", num1, " & ", num2, " is ", sum, "</h1>");
}

// Question no 2
function showBtn2A() {
    // For subtraction
    var num1 = +prompt("Enter No 1 you want to (-)");
    var num2 = +prompt("Enter No 2 you want to (-) in No 1");
    var sum = num1 - num2;

    document.write("<h1>", "Subtraction of ", num1, " & ", num2, " is ", sum, "</h1>");
}

function showBtn2B() {
    // For multiplication
    var num1 = +prompt("Enter No 1 you want to (*)");
    var num2 = +prompt("Enter No 2 you want to (*) in No 1");
    var sum = num1 * num2;

    document.write("<h1>", "Multiplication of ", num1, " & ", num2, " is ", sum, "</h1>");
}

function showBtn2C() {
    // For division
    var num1 = +prompt("Enter No 1 you want to (/)");
    var num2 = +prompt("Enter No 2 you want to (/) in No 1");
    var sum = num1 / num2;

    document.write("<h1>", "subtraction of ", num1, " & ", num2, " is ", sum, "</h1>");
}

function showBtn2D() {
    // For modulus:
    var num1 = +prompt("Enter No 1 you want to (%)");
    var num2 = +prompt("Enter No 2 you want to (%) in No 1");
    var sum = num1 % num2;

    document.write("<h1>", "Modulus of ", num1, " & ", num2, " is ", sum, "</h1>");
}

// Question no 3
function showBtn3() {
    var jsMathematicExpressions;
    document.write("<h2>", "Value after variable declaration is: ", jsMathematicExpressions, "</h2>");
    jsMathematicExpressions = 8;
    document.write("<h2>", "Initial value: ", jsMathematicExpressions, "</h2>");
    jsMathematicExpressions = ++jsMathematicExpressions;
    document.write("<h2>", "Value after increment is: ", jsMathematicExpressions, "</h2>");
    jsMathematicExpressions = jsMathematicExpressions + 7;
    document.write("<h2>", "Value after addition is: ", jsMathematicExpressions, "</h2>");
    jsMathematicExpressions = --jsMathematicExpressions;
    document.write("<h2>", "Value after decrement is: ", jsMathematicExpressions, "</h2>");
    jsMathematicExpressions = jsMathematicExpressions / 3;
    document.write("<h2>", "The remainder is : ", jsMathematicExpressions, "</h2>");
}

// Question no 4
function showBtn4() {
    var oneTicket = 600;
    var howManyTickets = +prompt("How Much Tickets You Want??");
    document.write("<h1>", "Total Cost Of Buy ", howManyTickets, " to a Movie Is ", howManyTickets * oneTicket, "PKR", "</h1>");
}

// Question no 5
function showBtn5() {
    var tableNumber = +prompt("Enter Table Ypu want To Multiply");
    document.write("<h2>", "Table Of ", tableNumber, "</h2>");
    for (let i = 1; i <= 10; i++) {
        document.write("<h3>", tableNumber + "x" + i + "=" + (tableNumber * i) + "</br>", "</h3>");
    }
}

// Question no 6
function showBtn6() {
    alert("I did Not Understand Question")
}

// Question no 7
function showBtn7() {
    document.write("<h1>", "Shopping Cart", "</h1>");

    var item1Price = 650;
    var item2Price = 100;
    var Qtyitem1 = 3;
    var Qtyitem2 = 7;
    var shippingCharges = 100;

    var totalPrice = item1Price * Qtyitem1 + item2Price * Qtyitem2 + shippingCharges;

    document.write("Price Of Item 1 IS ", item1Price, "</br>");
    document.write("Quantuty Of Item 1 IS ", Qtyitem1, "</br>");

    document.write("Price Of Item 2 IS ", item2Price, "</br>");
    document.write("Quantuty Of Item 2 IS ", Qtyitem2, "</br>");
    document.write("Shipping Charges ", shippingCharges, "</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("Total Cost Of Your Order is ", totalPrice);
}

// Question no 8
function showBtn8() {
    var obtainedMarks = +prompt("Enter A Number Of obtainedMarks (Out Of 980)")
    var totalMarks = 980;
    var Percentage = obtainedMarks / totalMarks * 100;

    document.write("<h1>", "Marked Sheet", "</h1>", "</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("Total Marks: ", totalMarks, "</br>");
    document.write("Obtained Marks: ", obtainedMarks, "</br>");
    document.write("Percentage: ", Percentage.toFixed(2), "%"); 
}

// Question no 9
function showBtn9() {
    var exhangeRate = 10*104.80+25*28;

    document.write("<h1>", "Currency In PKR", "</h1>", "</br>");
    document.write("Exhange Rate: ", exhangeRate);
}

// Question no 10
function showBtn10() {
    var arithamaticCalculation = 5*10/2;

    document.write("<h1>", "Arithamatic Calculation", "</h1>", "</br>");
    document.write("Calculation: ", arithamaticCalculation);
}

// Question no 11
function showBtn11() {
    var currentYear = +prompt("Enter Current Year");
    var birthYear = +prompt("Enter Birth Year");
    var yourAge = currentYear-birthYear;
    

    document.write("<h1>", "The Age Calculator", "</h1>", "</br>");
    document.write("Current Year: ", currentYear, "</br>");
    document.write("Birth Year: ", birthYear, "</br>");
    document.write("Your Age Is: ", yourAge);
}
