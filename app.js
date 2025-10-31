// Question No 01
var age = "17";
function showAlert1() {
    alert("I am " + age + " yeard old");
};

// Question 02
var visitCount = "0";
function showAlert2() {
    visitCount++;
    alert("You have visited this site " + visitCount + " times")
};

// Question 03
var birthYear = "2008";
function showAlert3() {
    document.write("My Birth Year Is " + birthYear + "</br>")
        + document.write("Data type of my declared variable is " + typeof (birthYear));
};

// Question 04

function showAlert4() {
    var name = prompt("Name");
    var quantity = prompt("Quantity");
    var productTitle = prompt("Product Title");
    document.write(name + " ordered " + quantity + productTitle + " on XYZ Clothing store ")

};
