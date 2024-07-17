// Activity 1
// Task 1
function check_even_or_odd(number) {
  if (number % 2 == 0) {
    console.log("Number is even.");
  } else {
    console.log("Number is odd.");
  }
}
let A = 25;
check_even_or_odd(A);

// Task 2
function Squre_of_number(number) {
  let C = number * number;
  console.log("Square of give number is :" + C);
  return C;
}

Squre_of_number(A);

// Activity 2
// Task 3
let Check_which_is_bigger = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
A = 22;
let B = 50;
console.log(Check_which_is_bigger(A, B) + " is bigger.");

// Task 4
let Concatinate_String = function (Str1, Str2) {
  return Str1 + Str2;
};

console.log(Concatinate_String("Hello,", " I am Varun."));

// Activity 3
// Task 5
let Sum_of_two_number = (num1, num2) =>  {
  return num1 + num2 ;
}

console.log("Sum of two numbers are" + Sum_of_two_number(A, B));
 
// Task 6
let Detects_Char = (Str) =>  {
    for(let index = 0;index < str.length;index ++ ){
        switch(Str[index]){
            case "A" :
            case "E" :
            case "a" :
            case "e" :
                return 1  ;
            default:
                return 0 ;

        }
    }
        
}
let str = "Hello";
let str_Detects = Detects_Char(str);
console.log(str_Detects);


                
// Activity 3
// Task 5
let Multiply_two_number = (num1, num2 = 20) =>  {
  return num1 * num2 ;
}
                
console.log("Multiplication of  two numbers are " + Multiply_two_number(A, B));


// Task 5
let give_Greeting = (name, age = 20) =>  {
  return "good morning mr/mrs.  "+name ;
}
                
console.log(give_Greeting("Shashi",34));

// Activity 5
// Task 9
let index = 1;
A = 5;
function cube_of_number(number) {
  let C = number * number*number;
  console.log("cube of give number is :" + C);
}
function call_the_function(func,number) {
  while(index <= number){
      func(index);
      index++;
  }
}

call_the_function(cube_of_number,A);

// Task 10
function Multiply_number(num1,num2) {
    return num1 * num2;
  }
function Add_number(num1,num2) {
    return num1 + num2;
  }
  
function call_the_function(func1,func2,num1,num2,num3) {
    let C = func1(num1,num2);
      return  func2(C,num3);

  }
  
A = 15;
B = 62;
let E = 32;
console.log(call_the_function(Multiply_number,Add_number, A, B, E));
  