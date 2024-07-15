let a = 50;
let b = 5 ;

// Activity 1
// Task 1 
function add(a,b){
    return (a + b) ;
}

console.log("addition = "  + add(a,b));

// Task 2
function subt(a,b){
    return (a - b) ;
}

console.log("subtraction = "  + (a,b));

// Task 3 
function mult(a,b){
    return (a * b) ;
}

console.log("multiplication = "  + mult(a,b));

// Task 4 
function div(a,b){
    return (a / b) ;
}

console.log("division = "  + div(a,b));

// Task 5 
function mod(a,b){
    return (a + b) ;
}

console.log("remainder = "  + mod(a,b));

// Activity 2
// Task 6
console.log(a += b)

// Task 7
console.log(a -= b)

// Activity 3
// Task 8.1
if (a > b){
    console.log("a is greater than b.")
}else{
    console.log("b is greater than a.")
}
// Task 8.2
if (a < b){
    console.log("a is smaller than b.")
}else{
    console.log("b is smaller than a.")
}

// Task 9.1
if (a >= b){
    console.log("a is greater or equal to b.")
}else{
    console.log("b is greater than a.")
}
// Task 9.2
if (a <= b){
    console.log("a is smaller or equal to b.")
}else{
    console.log("b is than a.")
}

let c = "1";
let d = 1;
// Task 10.1
if (c == d){
    console.log("c is equal to d.")
}else{
    console.log("c is not equal to d.")
}
// Task 10.2
if (c === d){
    console.log("c is equal to d with same data type.")
}else{
    console.log("c is not equal to d with same data type.")
}

// Activity 4
// Task 11
if (a > b && a == 5){
    console.log("a is greater and equal to 5.")
}else{
    console.log("b is greater  than a.")
}
// Task 12
if (a > b || a == 5){
    console.log("a is smaller or equal to 5.")
}else{
    console.log("b is smaller than a.")
}
// Task 13
if (!(a > b)){
    console.log("a is smaller than b.")
}else{
    console.log("b is smaller than a.")
}

// Activity 5
// Task 14
function ter(a,b){
    return a > b ? 'a is greater than b': 'b is greater than a';
}

console.log( ter(a,b));