// Challenge 2: Speed Detector (Toy Problem)

// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.


function carSpeed(speed){
    let points;
    if(speed < 70){
        console.log("Ok");
        return;
    }else{
        points = Math.floor((speed - 70)/5);
    }
    return console.log(`Total demerit points is ${points}`);
}
carSpeed(100);