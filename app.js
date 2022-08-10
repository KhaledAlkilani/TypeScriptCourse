//types
function add(numy1, numy2) {
    return numy1 + numy2;
}
var result = add(2, 3);
console.log(result);
var age = 34;
age = 3;
var firstName;
firstName = "Khaled";
//----------------------------------------------------------------------------
//string methods
var text = "Hello-welcome moi";
var resul;
//lenght
console.log(text.length);
//toUpperCase
resul = text.toUpperCase();
console.log(resul);
//toLowerCase
resul = text.toLowerCase();
console.log(resul);
//concat
resul = text.concat(" shukran");
console.log(resul);
//trim
resul = text.trim();
console.log(resul);
//replace
resul = text.replace("welcome", "terve");
console.log(resul);
//chartAt
resul = text.charAt(3);
console.log(resul);
//split
console.log(text.split("-"));
//----------------------------------------------------------------------------
//Template literals
//Template Literals
var fname = "khaled";
var sname = "alkilani";
console.log("hello" + '\n' + "world");
var newText = "\nHello \n".concat(fname, " \n").concat(sname, " \n").concat(5 + 10, " \n").concat(texty());
console.log(newText);
function texty() {
    return 'hi from func';
}
//----------------------------------------------------------------------------
//array and methods 
var nimet = ['Khaled', 'Pauliina', 'Albert', 'Rosa', 'Elias'];
var cars = [];
nimet[5] = 'Alfred';
// const re = nimet.splice(1, 4)
// console.log(re)
console.log(nimet);
// const re = nimet.sort()
// console.log(re)
// const re = nimet.reverse();
// console.log(re)
// const re = nimet.indexOf('Khaled');
// console.log(re)
// const re = nimet.includes('Khaled');
// console.log(re)
// console.log(nimet);
//----------------------------------------------------------------------------
//tuple type
var dudes = ['Khaled', 'Pauliina', 'Albert', 'Rosa', 'Elias', 1];
dudes[0] = 1;
var userDudes;
userDudes = [['Pauliina', 28], ['Albert', 3]];
userDudes[2] = ['Hassan', 30];
console.log(userDudes);
//----------------------------------------------------------------------------
//enum type
var Developer;
(function (Developer) {
    Developer["Frontend"] = "FRONT";
    Developer["Backend"] = "BACK";
    Developer["Fullstack"] = "FULL";
})(Developer || (Developer = {}));
function checkType(type) {
    if (type == Developer.Frontend || type == Developer.Backend || type == Developer.Fullstack) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkType(Developer.Backend));
//----------------------------------------------------------------------------
//Onion , literal , custom types
//Onion
var role;
role = 'Admin';
role = 34;
function hi(msg) {
}
hi(true);
//Literal
function math(type) {
}
math('add');
var names;
names = 'ahmad';
//----------------------------------------------------------------------------
//any type
var userN;
userN = 1;
userN = true;
userN = 'Scripter';
//unknown type
var car;
var namess;
namess = userN;
// namess = car
userN = car;
//never type
function throwError() {
    while (true) {
    }
}
//----------------------------------------------------------------------------
//Anonymous and arrow functions
//Normal function
// function display(msg: string){
//     console.log(msg)
// }
// display('hi')
//Anonymous function
// let welcomeMsg = function(msg: string){
//     console.log(welcomeMsg)
// }
// welcomeMsg('welcome');
//Arrow function
var sum = function (num1, num2) {
    console.log(num1 + num2);
};
sum(2, 3);
//----------
var multi = function (num1, num2) { return console.log(num1 * num2); };
multi(1, 9);
//----------
var sum2 = function (num1, num2) {
    return num1 + num2;
};
var resulty = sum2(10, 10);
console.log(resulty);
//----------
var sumy = function (num1, num2) { return num1 + num2; };
var resultyy = sumy(10, 20);
console.log(resultyy);
//----------
var printing = function () { return console.log('hi message'); };
printing();
//----------------------------------------------------------------------------
//Default , Optional , Rest Parameters
//optional
// function welcomeM(name?: string){
//     console.log('Welcome ' + name)
// }
// welcomeM()
//default
function welcomeM(name) {
    if (name === void 0) { name = 'World'; }
    console.log('Welcome ' + name);
}
welcomeM('Khaled');
//rest parameters
function printNames(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + names.join(', '));
}
printNames('Welcome ', 'Khaled', 'Albert', 'Pauliina');
//----------------------------------------------------------------------------
//Function return type
function sumi(num1, num2) {
    return 'Hi';
}
function printHi() {
    console.log('Hi');
    // return 1;
}
var mult = function (num1, num2) {
    // return num1 + num2;
    console.log(num1 * num2);
};
var resulta;
resulta = sumi(5, 5);
//----------------------------------------------------------------------------
//Callback function
function lisa(a, b) {
    return a + b;
}
function multip(a, b) {
    return a * b;
}
function disp() {
    console.log();
}
function printRes(num1, num2, callback) {
    // let ress1;
    // if(type === 'lisa'){
    //     ress1 = add(num1, num2)
    // } else if(type === 'multip'){
    //     ress1 = multip(num1, num2)
    // }
    // console.log(ress1)
    var ress = callback(num1, num2);
    console.log(ress);
}
printRes(5, 3, lisa);
// let res = lisa(5, 3);
// printRes(res)
// let res2 = multip(8, 2);
// printRes(res2)
