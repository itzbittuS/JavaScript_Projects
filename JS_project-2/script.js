// electricity unit and calculate amount to pay
var unit = 0.5; 

var amount = 0;

if (unit <= 50) {
  amount = unit * 1;
} else if (unit <= 150) {
  amount = (50 * 1) + ((unit - 50) * 2);
} else if (unit <= 250) {
  amount = (50 * 1) + (100 * 2) + ((unit - 150) * 3);
} else {
  amount = (50 * 1) + (100 * 2) + (100 * 3) + ((unit - 250) * 4);
}


if (unit > 150) {
  amount = amount * 1.20;
}

console.log("Units: " + unit);
console.log("Total amount to pay: Rs." + amount);

// Write a JAVASCRIPT Program to print season according user input using switch case. (e.g. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print "Invalid season" etc.)
var month = 2;
switch (true) {
    case (month >= 1 && month <= 4):
        console.log("Winter");
        break;
    case (month >= 5 && month <= 8):
        console.log("Summer");
        break;
    case (month >= 9 && month <= 12):
        console.log("Monsoon");
        break;
    default:
        console.log("Invalid season");
}

// calculate total interest
var P = 10000;  
var N = 4; 
var R;          
var I;          


if (N > 3) {
    if (N <= 5) {
        R = 3;
    } else {
        if (N <= 8) {
            R = 5;
        } else {
            if (N <= 12) {
                R = 12;
            } else {
                R = 15;
            }
        }
    }
} else {
    R = 15;
}


I = (P * R * N) / 100;

console.log("Principal: " + P);
console.log("Years: " + N);
console.log("Rate: " + R + "%");
console.log("Interest: " + I);

//  Program to check Voting Eligibility.
var age = 20; 

if (age >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}

// Program to Classify Age Group.
var age = 45; 

if (age <= 12) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else if (age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}




