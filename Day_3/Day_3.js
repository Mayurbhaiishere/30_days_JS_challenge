// Activity 1
// Task 1

    let num1 = 5,num2 = 0 ,num3 = -4;

    function check_num(num){
        if (num > 0 ){
            console.log("number is positive.");
        }
        else if (num == 0){
            console.log("number is zero.");
        }
        else {
            console.log("number is nagative.");
        }
    }

    check_num(num1);    
    check_num(num2);
    check_num(num3);

// Task 2


let Rohit_age = 10, Mrunal_age = 25;

function check_age(age){
    if (age >= 18){
        console.log("you are eligible to vote.");
    }
    else{
        console.log("you are not eligible to vote.");

    }
}

check_age(Rohit_age);
check_age(Mrunal_age);

// Activity 2
// Task 3

let kunal = 13,kamra=  44, shashi =76; 
function check_the_greatest(num1,num2,num3){
    if(num1>num2){
        if(num1>num3){
            console.log("First number is greatest.")
        }
        else{
            console.log("Third number is greatest.")   
        }
        
    }
    else{
        if (num2>num3){
            console.log("Second number is greatest.")   
            
        }
        else{
            console.log("Third number is greatest.")   
        }
    }

}


check_the_greatest(kunal,kamra,shashi);



// Activity 3
// Task 4
let hello = 4;
function find_day(date_num){
    switch(date_num){
        case 1:
            console.log("Today is Monday.");
            break;
        case 2:
            console.log("Today is Tuesday.");
            break;
        case 3:
            console.log("Today is Wednesday.");
            break;
        case 4:
            console.log("Today is Thursday.");
            break;
        case 5:
            console.log("Today is Friday.");
            break;
        case 6:
            console.log("Today is Saturday.");
            break;
        case 7:
            console.log("Today is Sunday.");
            break;

            default :
            console.log("not valid number.");
    }

}

find_day(hello);


// Task 5
let Rohit_score = 4;
function Grade_assignment(grade){
    switch(grade){
        case 91-100:
            console.log("You god A gradde.");
            break;
            case 81-90:
            console.log("You god B gradde.");
            break;
            case 71-80:
            console.log("You god C gradde.");
            break;
        case 61-70:
            console.log("You god D gradde.");
            break;
        case 0-60:
            console.log("You are Failed.");
            break;
        default:
            console.log("Not valid Grades.")

    }

}

Grade_assignment(Rohit_score);

// Activity 4
// Task 6
function ternary(a_number){
    return (a_number % 2 == 0) ? 'a is even': 'b is odd';
}

console.log( ternary(a_number));


// Activity 5
// Task 7
let Independence_year = 1947;
function combining_conditions(Year){
    if(Year % 4 == 0  && Year % 100 != 0){
        console.log("Year is leap year.");
    }
    else if(Year % 400 == 0 ){
        console.log("Year is leap year.");
    }
    else {
        console.log("Year is not leap year.")
    }

}

combining_conditions(Independence_year);
