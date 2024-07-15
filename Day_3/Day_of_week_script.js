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
