// Staircase problem 
// Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character 

// e.g steps(2)  #
//               ##

//     steps(3)  #
//               ##
//               ###

function staircase(){
    let i = 0;
    let char = "#";
    while(i < 5){
        ++i
        console.log(char.repeat(i));
        
    }
    return char;



}
console.log(staircase());