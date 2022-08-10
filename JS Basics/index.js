function sum(x, y){
    console.log("The sum is: " , x + y)
}

sum(2, 3);

function multiplication(x,y){
    console.log("The multiply of" , x , "and" , y , "is");
    return x * y;
}

let result = multiplication(2, 2)
console.log(result)

//----------------------------------------------------------------------------------------------

let students = ["Khaled", "Albert", "Pauliina", "Elias"];

console.log(students)

students[1] = "Lulu"
console.log(students)

console.log(students.length)

console.log(students[students.length - 1])

// students.push("Muhannad")
// console.log(students)

let results = []

results[0] = 88
results[1] = 100
results[2] = 20

results.push(40)
results.unshift(2)
console.log(results)

//------------------------------------------------------------------------------------------------

let person = {
    name: "Khaled",
    age: 34,
    height: 179,
    weight: 76,
    kids: ["Albert", "Elias", "Rosa"],
    job: {
        name: "unknown",
        salary: "no info"
    },
    eat: function eating(){
        console.log("eating now")
    }
}

console.log(person.name)
// console.log(person['age'])

person.name = "Albert"
console.log(person.name)

person.eat()

person.color = "brown"
console.log(person)

//--------------------------------------------------------------------------------------------

let num1 = 5
let num2 = 6

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

num1++
num1++
num1--
console.log(num1)

//--------------------------------------------------------------------------------------------

let number1;
let number2;

number1 = 3
console.log(number1)

// number1 += 4
// number1 -= 4
// number1 /= 4
number1 *= 5
console.log(number1)

//--------------------------------------------------------------------------------------------

let number3;
let number4;

number3 = 5
number4 = "5"

console.log(number3 == number4)
console.log(number3 != number4)
console.log(number3 >= number4)
console.log(number3 <= number4)

console.log(number3 !== number4)

//--------------------------------------------------------------------------------------------

let number5;
let number6;

number5 = 5
number6 = 10

console.log(number5 > 2 && number6 == 10)

console.log(number5 > 10 || number6 == 10)

console.log(!(number5 == number6))

//--------------------------------------------------------------------------------------------

let resu = 101;

// console.log("B-")

if (resu <= 80){
    console.log("B+")
} else if (resu < 80) {
    console.log("B-")
} else {
    console.log("FAIL")
}

//--------------------------------------------------------------------------------------------

let job = "UI/UX"

switch (job){
    case "frontend":
    case "UI/UX":
        console.log("2000$");
        break;
    case "backend":
        console.log("2100$")
        break;
    default:
        console.log(0)
}

//--------------------------------------------------------------------------------------------

for (let i = 0; i < 10; i++){
    console.log("hi")
}

for (let k = 5; k > 1; k--){
    console.log("Kay")
}

//--------------------------------------------------------------------------------------------

let guys = ["Khaled", "Albert", "Pauliina", "Elias", "Rosa"];

for (let i = 0; i < guys.length; i++){
    console.log(guys[i])
}

//--------------------------------------------------------------------------------------------

let fellows = ["Khaled", "Albert", "Pauliina", "Elias", "Rosa"];
let i = 0

while(i < fellows.length){
    console.log(fellows[i])
    i++
}

let y = 0
while(y <= 5){
    console.log(y)
    y++
}

 console.log("------------------------")

let k = 0
do{
    console.log(k)
    k++
} while(k < 5)

console.log("------------------------")

let q = 0

while(q < 5){
     if(q == 2){
        q++
        break;
    }
    console.log(q)
    q++

}

//--------------------------------------------------------------------------------------------