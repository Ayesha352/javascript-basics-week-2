// Day 8 - JavaScript Practice
// variables

var name = "Ayesha"
let age = 20
let city = "Karachi"
const course = "Web Development"

console.log(name)
console.log(age)
console.log(city)
console.log(course)

// conditions

let marks = 75

if(marks >= 80){
    console.log("Grade A")
}
else if(marks >= 60){
    console.log("Grade B")
}
else{
    console.log("Grade C")
}

// for loop

for(let i = 1; i <= 5; i++){
    console.log("number is " + i)
}

// while loop

let num = 1
while(num <= 5){
    console.log(num)
    num++
}

// functions

function sayHello(){
    console.log("hello my name is Ayesha")
}

sayHello()

function addNumbers(a, b){
    let result = a + b
    console.log("sum is " + result)
}

addNumbers(5, 10)
addNumbers(20, 30)

// i was confused here at first but then i understood

function checkPass(marks){
    if(marks >= 50){
        console.log("pass")
    } else {
        console.log("fail")
    }
}

checkPass(75)
checkPass(30)

// arrays

let fruits = ["apple", "banana", "mango"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits.length)

fruits.push("orange")
console.log(fruits)

// debugging practice

console.log("this is console.log")
console.error("this is console.error")
console.warn("this is console.warn")
