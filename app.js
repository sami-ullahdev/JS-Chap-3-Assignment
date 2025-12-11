// Question no 1
function showBtn1() {
    // For Addition
    var num1 = +prompt("Enter No 1 you want to (+)");
    var num2 = +prompt("Enter No 2 you want to (+) in No 1");
    var sum = num1 + num2;

    document.write("<h1>", "Sum of ", num1, " & ", num2, " is ", sum, "</h1>");
}

// Question no 2
function showBtn2() {
    // For subtraction
    var num1 = +prompt("Enter No 1 you want to (-)");
    var num2 = +prompt("Enter No 2 you want to (-) in No 1");
    var sum = num1 - num2;

    document.write("<h1>", "Subtraction of ", num1, " & ", num2, " is ", sum, "</h1>");

    // For multiplication
    var num1 = +prompt("Enter No 1 you want to (*)");
    var num2 = +prompt("Enter No 2 you want to (*) in No 1");
    var sum = num1 * num2;

    document.write("<h1>", "Multiplication of ", num1, " & ", num2, " is ", sum, "</h1>");

    // For division
    var num1 = +prompt("Enter No 1 you want to (/)");
    var num2 = +prompt("Enter No 2 you want to (/) in No 1");
    var sum = num1 / num2;

    document.write("<h1>", "subtraction of ", num1, " & ", num2, " is ", sum, "</h1>");

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
    // I did Not Understand Question
}

// Question no 7
function showBtn7() {
    document.write("<h1>", "Shopping Cart", "</h1>");

    var item1Price = 650;
    var item2Price = 100;
    var Qtyitem1 = 3;
    var Qtyitem2 = 7;
    var shippingCharges = 100;

    var totalPrice = item1Price*Qtyitem1 + item2Price*Qtyitem2 + shippingCharges;

    document.write("Price Of Item 1 IS ", item1Price ,"</br>");
    document.write("Quantuty Of Item 1 IS ", Qtyitem1 ,"</br>");

    document.write("Price Of Item 2 IS ", item2Price ,"</br>");
    document.write("Quantuty Of Item 2 IS ", Qtyitem2 ,"</br>");
    document.write("Shipping Charges ", shippingCharges ,"</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("Total Cost Of Your Order is ", totalPrice);
}

// Question no 8
function showBtn8() {
    var obtainedMarks = +prompt("Enter A Number Of obtainedMarks (Out Of 980)")
    var totalMarks = 980;
    var Percentage = obtainedMarks / totalMarks *100;

    document.write("<h1>","Marked Sheet","</h1>" ,"</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("Total Marks: " , totalMarks ,"</br>");
    document.write("Obtained Marks: " , obtainedMarks, "</br>");
    document.write("Percentage: " , Percentage.toFixed(2) , "%");

    
}