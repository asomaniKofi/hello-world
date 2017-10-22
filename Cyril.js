"use strict" /*Placing this string at the top of the document changes the engine to Modern Mode thus changing the feautures of som built in-features.
The string is required for backwards compatiability for older programs
*/
console.log("The names bar, foo bar bar"); 
let a = "new foobar";
let twin = 25;


/*
The line below details 3 js variables that have been assigned data on the same line
It would be a better practice to assign variables on various lines to increase readability
*/
let user = 'John', age = 25, message = 'Hello';
//Reserved words in js
/*
let, class, return, function
*/
const euBank = 78;
//Once a variable is assigned the const keyword that variable cannot be changed
// alert(infinity);
/*
NaN is a special value of an incorrect mathematical operation.
*/
let foo = "Ad";
let bar = 'Wrapper'; //Both single or double quotes simply represent simple quotes for a String.
let side = `Oath`; //backticks enable the developer to embed Template Strings within a String (${})
let esy = null; // The esy variable has the sense of nothing or unknown
let x; //x would be deemed undefined as there is no assignment operator.
//Symbol-Go Through with Sam if possible
typeof twin; //An operator which returns the type of argument. Ask Sam for a possible situation when this would be used.

//I had a pseudosolution to a Java problem that I just wanted to see what it would look like in code form.
let fee = false;
// fee = true
while(fee = true){
    let i = 0;
     i++;
    if(i = 3){
        let price = i;
        console.log("Charge: £" + price);
        fee=false;
    }

}
if(i > 3){
    price++;
    console.log("Charge: £" + price);
}
if(i > 24){
    console.log("Maximum Charge: £30");
    fee = false;
}