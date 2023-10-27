// Chapter 17-20
// Q1
var hamiz = [[2,4,5,6,7],
[2,6,7,81,1,11],
[22,32,11,55,66]];

// Q2
var hamiz1 = [[0,1,2,3],
[1,0,1,2],
[2,1,0,1]];

// Q3
for(var i= 1; i<=10;++i){
    document.write("\n",i,"<br>")
}

// Q4     

// var mul = prompt("Enter Value")
// for(var l = 1; l<=15; ++l){
//     var mul;
//     document.write("<br>",mul,"*",l,"=",mul*l)}


// Q5
var fruits = ["apple", "banana","mango", "orange","strawberry"]
for(k=0;k<=4;++k){
    document.write("\n",fruits[k])
}

// Q6 
// for(h=1;h<=15;++h){
//     console.log(h)
// }

// for(m=10;m>=1;--m){
//     console.log(m)
// }
document.write("<br>")
for(h=2;h<=16;h+=2){
         console.log(h)}

for(n=1;n<=19;n+=2){
    console.log(n)
}
for(h=2;h<=16;h+=2){
document.write(h,"k \n")}

// Q7
// var bakery= ["cake", "apple","pie", "cookie", "chips", "patties"]
// need=prompt("WELCOME TO HAMIZ BAKERY. What do you want to order?")
// var isFound = false;

// for(var t = 0; t<=5; ++t)  
// if(need===bakery[t]){
//     document.write(need,"is available")
//     isFound = true;

// }
    
// if (isFound === false){
//         document.write(need,"\n","\n is not available")}
    
// Q8

var large =[24, 53, 78, 91, 12]
var largestNum = large[0];
    for(a=0; a<=4;++a){
if (large[a] > largestNum) {
    largestNum = large[a];
}}
    document.write(largestNum)


// Q9
arr = [24, 53, 78, 91, 12];
sn= arr[0]
for(f=0;f<=4;++f){
    if(arr[f]<sn){
        sn = arr [f];
    
    }
}
document.write('<br>',sn)

// Q10 
for(e=5; e<=100; e+=5){
    document.write("<br>", e)
}