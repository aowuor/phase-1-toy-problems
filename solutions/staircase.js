// Staircase problem 
// Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character 

// e.g steps(2)  #
//               ##

//     steps(3)  #
//               ##
//               ###

function staircase(char){
    let i = 1;
    while(i < 5){
        console.log(char.repeat(i));
        i++
        
    }
    return char;



}
console.log(staircase("#"));

