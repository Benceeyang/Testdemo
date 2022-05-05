//What is a Variable?
let total = 500;
total = 400; //You can pretty much just change the value
let product = 'backpack';
showMessage(product)
//Constants
const price = 20;
//Var keyword makes the varaiable into undefined
var
//if() Statement
if (5 === 5){
    console.log('Yes)';) //true
}
if (5 > 10){
    console.log('No'); //false
}
let state = 'FL';
let taxPercent = 0;
if (state === 'FL'){
    taxPercent = 7;
}
console.log(taxPercent); //7

//





//Functions
function logMessage(){
    console.log('here is a message');
}
logMessage();
//Function Expession
function showMessage(){

}
let fn = function(){

}
fn(); //Calls the function

//Function Return Values
function getSecretCode(value){
    let code = value * 42;
    return code;
}
console.log( getScretCode(2)); //84
// ^ Needs a return statement for it to give a return value

//Function Scope
function getSecretCode(value){
    let code = value * 42;
    return code;
}
let secretCode = getSecretCode(2);
console.log( code ); //This here would bring up "Reference Error: code is undefined"
