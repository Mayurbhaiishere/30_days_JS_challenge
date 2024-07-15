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
