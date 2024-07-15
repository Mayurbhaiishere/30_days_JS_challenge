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
