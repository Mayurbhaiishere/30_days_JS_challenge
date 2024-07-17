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
let A = 23;
call_the_function(cube_of_number,A);
