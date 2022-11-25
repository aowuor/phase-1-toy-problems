//Challenge 1: Student Grade Generator (Toy Problem)

// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

// const marks = 120;
let input = 120;
function getUserInput(){

}


//function validating user input
function validateUser(){
    if(Number.isInteger(input)){
        if(input < 0 || input > 100){
            console.log("invalid number");
        }else{
            console.log("Student grade equals")
        }
    }else{
        console.log("Enter a valid number between 0 and 100")
    }
    // gradeStudent()
}
validateUser()


//function grading students based on input marks
function gradeStudent(){
    
    let grade;

    switch(true){
        case (marks < 40):
            grade = "E";
            break
        case (marks <= 49):
            grade = "D";
            break
        case (marks <= 59):
            grade = "c";
            break
        case (marks <= 79):
            grade = "c";
            break
    case (marks > 79):
            grade = "A";
            break

    }
    console.log(grade);
}
