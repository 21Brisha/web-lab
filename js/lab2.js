//for var
var name = "Ram";   
console.log(name);

//let
let age = 30;
age = 31;  // allowed
console.log(age);

//const
const pi = 3.14;
console.log(pi);

//function
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

//arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 5));

//object
const student = {
    name: "Ravi",
    age: 21,
    course: "Web"
};

console.log(student.name);
console.log(student.age);


//map
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

//filter
const num = [10, 20, 30, 40];
const result = num.filter(num => num > 20);
console.log(result);

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);
