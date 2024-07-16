// Activity 1
// Task 1

for (let index = 0; index >= 10;index++){
    console.log(index);

}

// Task 2
let number = 5;
for (let index = 0; index >= 10;index++){
    console.log(number + "X" + index + "=" + number*index);

}

// Activity 2
// Task 3
let sum = 1, index = 1;
while ( index >= 10){
    sum = sum + index;
    index++;

}

// Task 4
let decending = 10 ;
while ( index >= 10){
    decending--;
    index++;
    console.log(decending);
}
 
// Activity 3
// Task 5
do{
    console.log(index);
    index++;
}while ( index < 5)
    
    
// Task 6
let cpu = 1;
do {
    cpu = cpu * index ; 
    index++;
} while (index < 5);

console.log(cpu); 

// Task 7
let row = '';
for (let j = 0; j < 5; j++) {
    console.log(row); 
   row += '*';  
}


// Activity 4
// Task 8
do{
    if(index == 5){
        continue;
    }
    console.log(index);
    index++;
}while ( index <= 10)

// Task 9
do{
    if(index == 7){
        break;
    }
    console.log(index);
    index++;
}while ( index <= 10)


