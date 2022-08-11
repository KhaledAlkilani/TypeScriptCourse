//types

function add(numy1: number , numy2: number){
    return numy1 + numy2;
}

const result = add(2, 3);
console.log(result);

let age = 34
age = 3

let firstName: string;
firstName = "Khaled"

//----------------------------------------------------------------------------

//string methods

let text = "Hello-welcome moi"
let resul:string;

//lenght

console.log(text.length)

//toUpperCase
resul = text.toUpperCase();
console.log(resul)

//toLowerCase
resul = text.toLowerCase();
console.log(resul)

//concat
resul = text.concat(" shukran");
console.log(resul)

//trim
resul = text.trim();
console.log(resul)

//replace
resul = text.replace("welcome", "terve");
console.log(resul)

//chartAt
resul = text.charAt(3);
console.log(resul)

//split
console.log(text.split("-"))

//----------------------------------------------------------------------------

//Template literals

//Template Literals

let fname = "khaled"
let sname = "alkilani"

console.log("hello" + '\n' + "world")

let newText = `
Hello 
${fname} 
${sname} 
${5+10} 
${texty()}`;

console.log(newText)

function texty(){
    return 'hi from func';
}

//----------------------------------------------------------------------------

//array and methods 

let nimet = ['Khaled', 'Pauliina', 'Albert', 'Rosa', 'Elias']

let cars:string[] = [];

nimet[5] = 'Alfred'

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

let dudes = ['Khaled', 'Pauliina', 'Albert', 'Rosa', 'Elias', 1]

dudes[0] = 1

let userDudes:[string, number][];

userDudes = [['Pauliina', 28], ['Albert', 3]];

userDudes[2] = ['Hassan', 30]

console.log(userDudes)

//----------------------------------------------------------------------------

//enum type

enum Developer {
    Frontend = 'FRONT',
    Backend = 'BACK',
    Fullstack = 'FULL'
}

function checkType(type: Developer){
    if(type == Developer.Frontend || type == Developer.Backend || type == Developer.Fullstack){
        return true
    } else {
        return false
    }
}

console.log(checkType(Developer.Backend))

//----------------------------------------------------------------------------

//Onion , literal , custom types

//Onion
let role : Roles;
role = 'Admin'
role = 34

function hi(msg: string | number | boolean){

}
hi(true)

//Literal
function math(type: MathType){

}

math('add')

let names: personsNames;

names = 'ahmad'

//custom
type MathType = 'add' | 'multiply'
type personsNames = 'ahmad' | 'omar' | 'mohammad';

type Roles = string | number

//----------------------------------------------------------------------------

//any type

let userN: any;
userN = 1
userN = true
userN = 'Scripter'

//unknown type

let car : unknown;
let namess : string;

namess = userN
// namess = car

userN = car

//never type
function throwError() : never {
    while(true){

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
let sum = (num1: number, num2: number) => {
    console.log(num1 + num2)
}

sum(2, 3)

//----------

let multi = (num1: number, num2: number) => console.log(num1 * num2)

multi(1, 9)

//----------

let sum2 = (num1: number, num2: number) => {
    return num1 + num2;
};

let resulty = sum2(10, 10)
console.log(resulty)

//----------

let sumy = (num1: number, num2: number) => num1 + num2;

let resultyy = sumy(10, 20)
console.log(resultyy)

//----------

let printing = () => console.log('hi message');
printing()

//----------------------------------------------------------------------------

//Default , Optional , Rest Parameters

//optional
// function welcomeM(name?: string){
//     console.log('Welcome ' + name)
// }
// welcomeM()

//default
function welcomeM(name: string = 'World'){
    console.log('Welcome ' + name)
}
welcomeM('Khaled')

//rest parameters
function printNames(msg:string, ...names:string[]){
    console.log(msg + names.join(', '))
}

printNames('Welcome ', 'Khaled', 'Albert', 'Pauliina')

//----------------------------------------------------------------------------

//Function return type

function sumi(num1: number, num2: number): number | string{
    return 'Hi'
}

function printHi(): void{
    console.log('Hi');
    // return 1;
}

let mult = (num1: number, num2: number): void => {
    // return num1 + num2;
    console.log(num1 * num2)
}

let resulta: number | string;
resulta = sumi(5, 5)

//----------------------------------------------------------------------------

//Callback function

function lisa(a: number, b: number): number {
    return a + b
}

function multip(a: number, b:number): number {
    return a * b
}

function disp(){
    console.log()
}


function printRes(num1: number, num2: number, callback: any): void {
    // let ress1;
    // if(type === 'lisa'){
    //     ress1 = add(num1, num2)
    // } else if(type === 'multip'){
    //     ress1 = multip(num1, num2)
    // }
    // console.log(ress1)
    let ress = callback(num1, num2)
    console.log(ress)
}
printRes(5,3, lisa)

// let res = lisa(5, 3);
// printRes(res)

// let res2 = multip(8, 2);
// printRes(res2)

//----------------------------------------------------------------------------

