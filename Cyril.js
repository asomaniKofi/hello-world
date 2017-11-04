"use strict" /*Placing this string at the top of the document changes the engine to Modern Mode thus changing the feautures of som built in-features.
The string is required for backwards compatiability for older programs
*/
let Vehicle = prompt("Enter type of Vehicle: ");
let ID = prompt("ID Plate: ");
let brand = prompt("Brand: ");
let driver ={
    VehicleType:Vehicle,
    VehicleID: ,
    VehicleBrand: brand
getID: function(){
    return VehicleID;
}
getBrand: function(){
    return VehicleBrand;
}
}
console.log(driver);
alert(VehicleType in driver)

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for(let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}
let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occured");

alert( `execution took ${diff}ms` );









const setTicket = () => {
let year = window.prompt('Hour Entered');
let left = window.prompt('Hour Entered');
let charge = left - year;
if(charge == 1 || charge == -1){
    console.log("Ticket £3")
}

if(charge == 2 || charge == -2){
    console.log("Ticket £6");
}
if(charge == 3 || charge == -3){
    console.log("Ticket £9");
}
if(charge == 4 || charge == -4){
    console.log("Ticket £10");
}
if(charge == 5 || charge == -5){
    console.log("Ticket £11");
}
if(charge == 6 || charge == -6){
    console.log("Ticket £12");
}
if(charge == 7 || charge == -7){
    console.log("Ticket £13");
}
if(charge == 8 || charge == -8){
    console.log("Ticket £14");
}
if(charge == 9 || charge == -9){
    console.log("Ticket £15");
}
if(charge == 10 || charge == -10){
    console.log("Ticket £16");
}
if(charge == 11 || charge == -11){
    console.log("Ticket £17")
}
if(charge == 12 || charge == -12){
    console.log("Ticket £18")
}
if(charge == 13 || charge == -13){
    console.log("Ticket £19")
}
if(charge == 14 || charge == -14){
    console.log("Ticket £20")
}
if(charge == 15 || charge == -15){
    console.log("Ticket £21")
}
if(charge == 16 || charge == -16){
    console.log("Ticket £22")
}
if(charge == 17 || charge == -17){
    console.log("Ticket £23")
}
if(charge == 18 || charge == -18){
    console.log("Ticket £24")
}
if(charge == 19 || charge == -19){
    console.log("Ticket £25")
}
if(charge == 20 || charge == -20){
    console.log("Ticket £26")
}
if(charge == 21 || charge == -13){
    console.log("Ticket £27")
}
if(charge == 22 || charge == -13){
    console.log("Ticket £28")
}
if(charge == 23 || charge == -13){
    console.log("Ticket £29")
}
if(charge == 24 || charge == -24){
    console.log("Ticket £30")
}
}
setTicket();
let user = {
    Vehicle: "Van",
    ID: 2314,
    Brand: "Ford Transit",
    Status:"Parked"
}
delete user.Status;


