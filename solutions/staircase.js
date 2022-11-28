// Staircase problem 
// Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character 

// e.g steps(2)  #
//               ##

//     steps(3)  #
//               ##
//               ###
let char = "#";
function staircase(number){
    let i = 0;
    while(i < number){
        console.log(char.repeat(i));
        i++ 
    }
    return char;

}
console.log(staircase(5));

