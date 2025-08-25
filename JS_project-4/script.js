// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

const greet = (message) => {
    if (message == undefined) {
       document.querySelector('.greet').innerHTML = '<h2>Good Morning</h2>';
    } else {
        document.querySelector('.greet').innerHTML =  '<h2>'+ message+ '</h2>';
    }
}

greet("hii I am Js");
greet();

// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

const C_area = (r) => {
    var ans = (3.14*r*r);
    return document.querySelector('.cr').innerHTML = '<h3>The Area of Circle = ' + ans + ' <br> When Radius is 5 </h3>';
}
C_area(5);

// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.
const T_area = (l,h) => {
    var ans = (l*h)/2;
    return document.querySelector('.tr').innerHTML = '<h3>The Area of Triangle = ' + ans + ' <br> When Lenght is '+ l + ' and Hight is '+h+'</h3>';
}
T_area(5,15);

// 4. Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.
const R_area = (l,h) => {
    var ans = (l*h);
    return document.querySelector('.rr').innerHTML = '<h3>The Area of Rectangle = ' + ans + ' <br> When Lenght is '+ l + ' and Hight is '+h+'</h3>';
}
R_area(5,15);

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.
const Sum = (a,b,c) => {
    var ans = ((b*b)*(4*a*c))/(2*a);
    return document.querySelector('.sum').innerHTML = '<h3>The Answer is = ' + ans +'</h3>'
}
Sum(5,10,15);

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function
const Sum2 = (a,b) => {
    var ans = (a*a) + (2*a*b) + (b*b);
    return document.querySelector('.sum2').innerHTML = '<h3>The Answer is = ' + ans +'</h3>'
}
Sum2(5,10);

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function
const FtoC = (f) => {
    var c = (f-32)/1.8;
    return document.querySelector('.ftoc').innerHTML = '<h3> Convert Fahrenheit to Celsius <br> Fahrenheit is = ' + f + ' <br> Celsius is = ' + c + '</h3>';
}
FtoC(50);

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function
const CtoF = (c) => {
    var f = (c*1.8)+32;
    return document.querySelector('.ctof').innerHTML = '<h3> Convert Celsius to Fahrenheit <br> Celsius is = ' + c + ' <br> Fahrenheit is = ' + f + '</h3>';
}
CtoF(10);

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.
const evenOrodd = (number) => {
    if(number % 2 == 0){
        document.querySelector('.num').innerHTML = '<h3>The number ' + number + ' is Even</h3>';
    }else{
        document.querySelector('.num').innerHTML = '<h3>The number ' + number + ' is Odd</h3>';
    }
}
evenOrodd(12);

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type
var a = 25;
const swap =(b)=> {
[a , b] = [b , a];
 document.querySelector('.swap').innerHTML = '<h3>After swap value of a = ' + a + ' <br> And value of b = '+ b + '</h3>';
    
}
swap(15);
