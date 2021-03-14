// This function does something. 

const bigNumber = function (number) {
    if (number > 100) {

        return true;

     } else {

        return false;

    }
};

const outcome = bigNumber (150);
console.log(outcome);

// This function will check if there aren't to many people in the club. 
// This function will also check the age of the people waiting to enter the club.
// Minimal age to enter the club is 21.
// The club has a maximum limit of 150 people. 
// This function will produce something. You'll be welcomed in the club or not?!

const bounceBot = function (maximum, age) {
    if (maximum > 150) {
        
        return 'it is too busy now, come back later';
    
    } else if (age <18) { 
            
        return 'this is a club for adults';

    } else {

        return 'come in';
    }   
};

const result = bounceBot (160, 17);
console.log(result);

// Get the length of the array 
// Sum the values from the array 
// Divide the array sum by the length
// This function produces something. In this case the average. 

const getAverage = function (numbers) {
    var i;
    var sum = 0;
    var length = numbers.length;

    for (i = 0; i < length; i++){

        sum =  sum + numbers[i];
    }
    var average = sum / length;
    var rounded_average = Math.round(average);
    return rounded_average;
}

var avg = getAverage([5,8,9,45645,1]);
console.log(avg);
var avg = getAverage([8,46,458,4545]);
console.log(avg);
var avg = getAverage([3,58,364,31,58]);
console.log(avg);
var avg = getAverage([68,48,15,345,88]);
console.log(avg);
