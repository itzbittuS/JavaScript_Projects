// 1 Write a simple JavaScript program to print expected Output using following array.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 

document.querySelector('.que').innerHTML = '<h3>1 Write a simple JavaScript program to print expected Output using following array.</h3>'
let myColor = ["Red", "Green", "White", "Black"];
let p1 = document.querySelector('.p');
p1.innerHTML = '<li>' + myColor + '</li>';
p1.innerHTML += '<li>' + myColor.join('+') + '</li>';
p1.innerHTML += '<li>' + myColor.slice(0, 3) + '</li>';
p1.innerHTML += '<li>' + myColor.at(0) + '</li>'
p1.innerHTML += '<li>' + myColor.slice(1, 3) + '</li>';
myColor.push("Orange");
p1.innerHTML += '<li>' + myColor + '</li>';

// 2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.
document.querySelector('.qp').innerHTML = '<h3>2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.</h3>'
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let array = [10, 15, 2, 0, 16, 58];
// Using for loop : 
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
p2.innerHTML = '<p>The sum of array using for loop =  ' + sum + '</p>';
// Using foreach loop : 
let sum2 = 0;
array.forEach(num => {
    sum2 += num;
})
p3.innerHTML = '<p>The sum of array using for loop =  ' + sum2 + '</p>';

// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
document.querySelector('.qp2').innerHTML = '<h3>3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)</h3>'
let array2 = [10, 15, 2, 0, 16, 58, 96];
let minimumValue = array2[0];
let maximumValue = array2[0];

function result() {
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] < minimumValue) {
            minimumValue = array2[i];
        }

        if (array2[i] > maximumValue) {
            maximumValue = array2[i];
        }
    }

    document.querySelector('.p4').innerHTML = '<p>The Minimum value is = ' + minimumValue + '<br> The Maximum Value is = ' + maximumValue + '</p>';
}

result();
// 4.Write a JavaScript program for convert all array element in ASCII value.
document.querySelector('.qp3').innerHTML = '<h3>4.Write a JavaScript program for convert all array element in ASCII value.</h3>'
let array3 = ['A', 'b', 'C', 'z'];
let asciiarray = [];

for (let i = 0; i < array3.length; i++) {
    asciiarray.push(array3[i].charCodeAt(0));
}

document.querySelector('.p5').innerHTML = '<p> The Given Array is = {' + array3 + '} <br> The ASCII Value of given array = { ' + asciiarray + ' } </p>';

// 5.Write a JavaScript program for remove negative values using the filter array function.
document.querySelector('.qp4').innerHTML = '<h3> 5.Write a JavaScript program for remove negative values using the filter array function.</h3>'
let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let answer = numbers.filter(
    num => num >= 0
);

document.querySelector('.p6').innerHTML = '<p>The Given Number is = { ' + numbers + ' } <br> The Filtered Number is = { ' + answer + ' } </p>';
// 6. Write a JavaScript program using array map() method and return the square of array element.
document.querySelector('.qp5').innerHTML = '<h3> 6. Write a JavaScript program using array map() method and return the square of array element.</h3>'
let arr = [2, 5, 6, 3, 8, 9];

let output = arr.map(
    ans => ans * ans
)

document.querySelector('.p7').innerHTML = '<p>The Given Value = { ' + arr + ' } <br><br> The Square of All Value = { ' + output + ' } </p>';

// 7.Write a JavaScript program for sort array in ascending descending.
document.querySelector('.qp6').innerHTML = '<h3> 7.Write a JavaScript program for sort array in ascending descending.</h3>'
let numbersarr = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let sorted = [...numbersarr].sort((a, b) => a - b);
document.querySelector('.p8').innerHTML = '<p>The Unsorted Array = { ' + numbersarr + ' } <br><br> The Sorted array = { ' + sorted + ' } </p>';

// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
document.querySelector('.qp7').innerHTML = '<h3> 8. Write a JavaScript program which filters out any string which is less than 8 characters.</h3>'
let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let filterOutput = [...words].filter((word) => word.length < 8);
document.querySelector('.p9').innerHTML = '<p>Before Filter = { ' + words + '} <br><br> Strings which is less than 8 characters {' + filterOutput + ' } </p>'

// 9. write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
// output:-  "a new java book" , "A NEW JAVA BOOK"

document.querySelector('.qp8').innerHTML = '<h3> 9. write a JavaScript program to  to print expected output for following string.</h3>'

p11 = document.querySelector('.p10');
let x = "airplane";
let x2 = "oxoxoxox";
let x3 = "A New Java Book";
p11.innerHTML = '<li><p> from airplane <br> Output = ' + x.charAt(2) + '</p></li>';
p11.innerHTML += '<li> Output = ' + x2.replace(/x/g, function (match, offset) {
    return offset % 2 === 1 ? match.toUpperCase() : match;
}); + '</li>';
p11.innerHTML += '<li> <p>Output = ' + x3.toUpperCase() + ' <br> 2.Output = ' + x3.toLowerCase() + ' </p> </li>'

// 10. write a JavaScript program for array reverse.
document.querySelector('.qp9').innerHTML = '<h3>10. write a JavaScript program for array reverse.</h3>'
let arraytoreverse = [1, 2, 3, 5, 10, 11, 16, 20, 25];
let reversed = [...arraytoreverse].reverse();

document.querySelector('.p12').innerHTML = '<p>Before Reverse = {' + arraytoreverse + '}<br>Array reversed = { ' + reversed + '} </p>'

// 11. write a JavaScript program for check value is found or not?
document.querySelector('.qp10').innerHTML = '<h3>11. write a JavaScript program for check value is found or not?</h3>'
let arrfound = [10, 20, 30, 40, 50];
let num = 30;

if (arrfound.includes(num)) {
    document.querySelector('.p13').innerHTML = ('<p> Output = ' + num + ' Is Found </p>');
} else {
    document.querySelector('.p13').innerHTML = ('<p> Output = ' + num + ' Is Not Found </p>');
}

// 12. write a JavaScript program for print your name and write the no of total character.
document.querySelector('.qp11').innerHTML = '<h3>12. write a JavaScript program for print your name and write the no of total character.</h3>'
let myName = "Bittu";
let totalChar = myName.length;

document.querySelector('.p14').innerHTML = '<p>My Name = ' + myName + ' <br> Total Character in My Name = ' + totalChar + '</p>';

// 13.  write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"
document.querySelector('.qp12').innerHTML = '<h3>13.  write a JavaScript program given this output using replace concept.</h3>'
let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let replaced = /dog/g;
document.querySelector('.p15').innerHTML = '<p>Before Replace = ' + input + ' <br> After Repalce = ' + input.replace(replaced, "cat"); + ' </p>';

// 14.  write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"] 
document.querySelector('.qp13').innerHTML = '<h3>14.  write a JavaScript program convert string to array.</h3>'
let input2 = "Hire the top 1% freelance developers";
document.querySelector('.p16').innerHTML = '<p>The String = ' + input2 + '</p>';
let convertINarray = input2.split(" ").join(", ");
document.querySelector('.p17').innerHTML = '<p>String into array = {' + convertINarray + '} </p>';

//15. write a JavaScript program convert for array to string.
//Input:- ['5', 32, 'Daniel'];
//Output: 5,32,Daniel
document.querySelector('.qp14').innerHTML = '<h3>15. write a JavaScript program convert for array to string.</h3>'
let arraytostring = ['5', 32, 'Daniel'];
let toStr = arraytostring.toString();
document.querySelector('.p18').innerHTML = '<p>Array = {' + arraytostring + '}  <br> to String = ' + toStr + ' </p>';