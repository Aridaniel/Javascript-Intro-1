
document.getElementById("Hann").innerHTML = "Html paragraph changed!";
document.getElementById("Hun").innerHTML = "Html paragraph changed!";



/* Variable with Datatypes, String, number, booleon, , null and undefined */
// We have a "let", "const" and  "var" variables

const unicornName = "John";
let unicornAge = 19;

let elephantName = "Andrew";
let elephantAge = 16;

var question = true;
var x = null;
var y = undefined;



// Template literal & String interpolation with placeholders = ${}, 
var line1 = `Hallo, ${unicornName} is ${unicornAge} years old and his friend ${elephantName} is ${elephantAge} years old. (This is line 1)`;
var line2 = `The definition of x is ${x} and y is ${y}. (This is line 2)`;

//Arithmetic operators and concatenate Strings 
var line3 = unicornAge + elephantAge +  " is the sum of unicornAge and elephantAge" + " " + "(this is line 3)";
var line4 = "Multiplying unicornAge and elephantAge gives us " + unicornAge * elephantAge + " (This is line 4)";





// Console.logs the lines variables
console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);


//Alert 
alert(line1);


// Document.write the lines on the webpage
document.write(line1);
document.write("<br>");
document.write(line2);
document.write("<br>");
document.write(line3);
document.write("<br>");
document.write(line4);


// Shows how many letter and spaces are in line1 
console.log(line1.length)

// Show first 14 letters and spaces in line1 
console.log(line1.substring(0, 14));

// Method með Uppercase
console.log(line1.toLocaleUpperCase());




// What type of datatype is the variable with "typeof"
console.log(typeof unicornName);
console.log(typeof unicornAge);
console.log(typeof question);
console.log(typeof x);
console.log(typeof y);



//If and else statements

if(unicornAge > 20){
    console.log("You are older than 20");

}
else if(unicornAge === 19){
    console.log("Váá You are 19 almost there.");
}
else{
    console.log("You not old enough")
}

 

///////////////////////////








//IF and else statment both in the same variable with new variables

let dice1 = 6;
let dice2 = 6;

if(dice1 === 6 && dice2 === 6 ){
    console.log("You got a double");

}
else{
    console.log("you did not get a double")
}





////////////////////////////////////////////







// Arrays

var arrayline1 = ["banani", "epli", "pera", "mango1","mango2"];

console.log(arrayline1);
console.log(arrayline1[0]);
console.log(arrayline1[1]);
console.log(arrayline1[2]);
console.log(arrayline1[3]);



// Add ananas
arrayline1.push("Ananas");
console.log(arrayline1);

// Remove ananas
arrayline1.pop();
console.log(arrayline1);

// Remove mango2
arrayline1.pop();
console.log(arrayline1);


//  get the indexof = epli,  start with [0,1,2,3......]

console.log(arrayline1.indexOf("epli"));

// Getting the indexof= mango1 , number what of the array
console.log(arrayline1.indexOf('mango1'));





////////////////////////////////////////////





//Create an Object

var user =
{
    name: "Anton",
    age: 23,
    married: true,
    shoppinglist: ["milk", "bread", "kale", "peanut butter"],
    math: 5 + 10,
    

    //Function inside  an object is called a method, 
    login: function (){
        console.log("New user is logged in!");
    },
    logout: function (){
       console.log("user is logged out");
    }, 
    

    // For each loop with a "This" KEYWORD
    shoplist: function (){
       console.log("This is the massive shopping list");
       this.shoppinglist.forEach(list => {
           console.log(list);
       })
    }
    

};
 

user.login();
user.logout();
user.shoplist();



//Adding a property to an Object
user.nationality = "Icelandic";

//Removing an property from an Object

delete user.age; 



//Console loggin the property objects

/* console.log(user); */
console.log(user.name);
console.log(user.age);
console.log(user.married);

console.log(user.shoppinglist);
console.log(user.shoppinglist[0]);
console.log(user.shoppinglist[1]);
console.log(user.shoppinglist[2]);
console.log(user.shoppinglist[3]);

console.log(user.nationality);



document.getElementById("line23").innerHTML = user;


////////////





//Date, with "GET"


let d;

d = new Date();



//get
document.getElementById("line22").innerHTML = d;
document.getElementById("line23").innerHTML = d.getFullYear();
document.getElementById("line24").innerHTML = d.getMonth();
document.getElementById("line25").innerHTML = d.getDay();
document.getElementById("line26").innerHTML = d.getHours();
document.getElementById("line27").innerHTML = d.getMinutes();
document.getElementById("line28").innerHTML = d.getSeconds();


//Console loggin with "SET" set the year to 2999
d.setFullYear(2999);
console.log(d);



let f;
f = new Date();

console.log(f.toLocaleString("en-GB"));
console.log(f.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
}));


