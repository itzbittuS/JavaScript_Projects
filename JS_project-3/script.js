var n = 5;
var output = "";
for(var i=1; i<=n; i++){
    for(var j=1; j<=i; j++){
       output = output + j;
    }
    output = output + "<br>";
}

   document.querySelector(".pat1").innerHTML = output;

var output1 = "";
   for(var i=0; i<n; i++){
    for(var j=1; j<=n-i; j++){
        output1 = output1 + j;
    }
        output1 = output1 + "<br>";
   }
    document.querySelector(".pat2").innerHTML = output1;

var output2 = "";
for(var i=1; i<=n; i++){
    for(var j=1; j<=i; j++){
        output2 = output2 + i;
    }
        output2 = output2 + "<br>";
   }
    document.querySelector(".pat3").innerHTML = output2;

var output3 = "";
for(var i=1; i<=n; i++){
    for(var j=n; j>=i; j--){
        output3 = output3 + j;
    }
        output3 = output3 + "<br>";
   }
    document.querySelector(".pat4").innerHTML = output3;

var output4 = "";
for(var i=0; i<n; i++){
    for(var j=1; j<=n-i; j++){
        output4 = output4 + j;
    }
        output4 = output4 + "<br>";
   }
    document.querySelector(".pat5").innerHTML = output4;

var output5 = "";
for(var i=n; i>=1; i--){
    for(var j=n; j>=i; j--){
        output5 = output5 + i;
    }
        output5 = output5 + "<br>";
   }
    document.querySelector(".pat6").innerHTML = output5;