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

//Functions Summary
function name(){...}
let fn = function(){...}
//Passing information to Functions
myFunction(a,b,c);
//Function Return Value
return //keyword
//Function Scopes have their own variables called: local variables which disappears

//DOM:Document Object Model

//Properties and Methods
//Object Porperties: similar to variables attached to the object
let person = {
    name:'John',
    age = 45,
    partTime: false,
    [mySymbol]: 'Secretinformation' //this is advanced, this makes it so the value is hidden -> mainly to hide information like using a HR system
};
console.log('John') //John
console.log(age) //45
console.log(partTime) //false
person.age //dot notation changes the value
person['age'] //another way to change the value

//Object Methods: similar to functions attached to an object
let person = {
    name = 'Tom',
    age = '30',
    parTime: false,
    showInfo:  function()(
        showMessage('in showInfo');
    )
};

//Passing Objects to Functions
let message = 'Hello';

function changeMessage(message) {
    message = 'Hi'
}

changeMessage(message);

showMessage(message);//It makes no change, the message stays the same : 'Hello'

//Instead let's try an object (obj)
let person = {
    name:'John',
    age = 45,
    partTime: false,
};
 function incrementAge(person){
     person.age++;
 }
incrementAge(person);
showMessage(person.age);
//When running it changes the age up by 1 > 46

//Deprecated = might disappear in the future

//Detecting Button Clicks
//remove href so it removes the refresh page attribute
const button = document.getElementById('see element');
button.addEventListener('click', function(){
    console.log('click');
)};

//What is an Array
let values = [1,2,3];
let values = Array.of(1,2,3);
const values = ['a','b','c'];
^console.log(values)
console.log(Array.is)
//Accessing Array Items
let values =  ['a','b','c'];
^console.log(values[0]); //a
console.log(values[1]); //b
console.log([2]); //c
console.log(values[3]); //undefined

//slice()
const values = ['a','b','c'];
const newValues = values.slice(1,2)
console.log(newValues); //b

//splice() for Deleting
const values = ['a','b','c'];
values.splice(1,1);
console.log(values); //ac