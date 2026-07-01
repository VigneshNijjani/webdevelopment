// let a=0
// if (a<0){
//     console.log("negative")
// }
// else if(a>0){
//     console.log("positive")
// }
// else{
//     console.log("zero")
// }

// let a=10
// if (a%2==0){
// console.log("even")
// }
// else if (a%2==1){
//     console.log("odd")
// }

// let a=0
// if (a==0){
//     console.log("zero")
// }
// else{
//     console.log("non-zero")
// }

// let age=20
// if (age>=18){
//     console.log("eligible to vote")
// }
// else{
//     console.log("not eligible")
// }

// let a=2023
// if ((a%4===0 && a%100!=0) || (a%400===0)){
//     console.log("leap year")
// }
// else{
//     console.log("not a leap year ")
// }

// let a=12
// if ((a>0 && a%2==0)){
//     console.log("positive and even")
// }
// else{
//     console.log("not positve or even")
// }

// let a=1
// let b=3
// if (a>b){
//     console.log("a is bigger")
// }
// else if (a===b){
//     console.log("both are equal")
// }
// else{
//     console.log("b is bigger")
// }



// let a=1
// let b=3
// if (a>b){
//     console.log("b is smaller")
// }
// else if (a===b){
//     console.log("both are equal")
// }
// else{
//     console.log("a is smaller")
// }

// reverse a given number 
// let a=875764
// let rev=0
// let r=0
// do{
// r=a%10
// rev=(rev*10)+r
// a=Math.floor(a/10)
// }while(a!=0);
// console.log(rev)

// largest digit in number 

// let a=875764
// let lar=0
// do{
//     let r=0
//     r=a%10
//     a=Math.floor(a/10)
//     if(r>lar){
//         lar=r
//     }

// }while(a!=0)
// console.log(lar)


// prime from 1 to 100

// for (let i=1;i<=100;i++){
//     let c=0
//     for (let j=1;j<=i;j++){
//         if (i%j==0){
//             c=c+1
//         }
//     }
//     if (c==2){
//     console.log(i)
// }
// }

//  fibonacci
// let a=0
// let b=1
// n=20
// for (let i =0;i<=20;i++){
//     console.log(a)
//     c=(a+b)
//     a=b
//     b=c
    
// }



// nth fibbinacci

// let a=0
// let b=1
// n=5
// for (let i=0;i<n;i++){
    
//     c=(a+b)
//     a=b
//     b=c
// }
// console.log(a)


// palindrome
// let a=121
// let b=a
// let rev=0
// let r=0
// do{
// r=a%10
// rev=(rev*10)+r
// a=Math.floor(a/10)
// }while(a!=0);
// if (b===rev){
//     console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }


// factors
// let a=10
// let factors =0
// for (let i=0;i<=a;i++){
//     if (a%i==0){
//         factors+=1
//     }
// }
// console.log(factors)

// perfect number 

// let a=6
// let factors =0
// for (let i=0;i<a;i++){
//     if (a%i==0){
//         factors+=i
//     }
// }
// if (factors===a){
//     console.log("perfect number")
// }
// else{
//     console.log("not a perfect number")
// }

// 1 to 100 perfect numbers 

// for (let i=1;i<=100;i++){
// let factors =0
// for (let j=0;j<i;j++){
//     if (i%j==0){
//         factors+=j
//     }
// }
// if (factors===i){
//     console.log(i,"perfect number")
// }


// }


// strong number 


// let a=145
// let b=a
// let fac=1 
// let sum=0
// do{
//     let r = a%10
//     a=Math.floor(a/10)
//     fac=1
//     for(let i=1;i<=r;i++){
//         fac=i*fac
//     }
// sum=sum+fac
// }while(a!=0)

// if (b===sum){
//     console.log("strong number")
// }
// else{
//     console.log("not a strong number")
// }


// 1 to 100 strong numbers 

// for (let i=1;i<=100;i++){
// let j=i
// let sum=0
// do{
//     let r = j%10
//     j=Math.floor(j/10)
//     let fac=1
//     for(let k=1;k<=r;k++){
//         fac=k*fac
//     }
// sum=sum+fac
// }while(j!=0)

// if (i===sum){
//     console.log(i,"strong number")
// }
// }


// 1 to 100 armstrong number 

// for (let i=0;i<=1000;i++){
// let j=i
// let sum=0
// let count=i.toString().length;
// do{
//     let r=j%10
//     j=Math.floor(j/10)
//     sum=sum+(r**count)
// }while(j!=0)
// if(i===sum){
//     console.log(i,"armstrong number")
// }  

// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                            //functions
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// named funstion or function declaration 
// function n(){
//     console.log("hello")
// }
// n()

// function n1(a,b){
//     console.log(a+b)
// }
// n1(1,2)

// function n2(a,b){
//     console.log(a+b)
//     console.log(arguments)
//      console.log(arguments[2],arguments[3])
// }
// n2(1,2,3,4)

// function n3(a,b,c,d){
//     console.log(a+b)
//     console.log(c,d)
// }
// n3(1,2)

// // ananomous function 

// // function without name 
// let a=function (){
//     console.log("hello")
// }
// a()

// let b=function (a,b){
//     console.log(a+b)
// }
// b(2,3)

// let c=function(a,b){
//     console.log(a+b)
//     console.log(arguments)
//     console.log(arguments[2],arguments[3])
// }
// c(3,4,5,6)

// let d=function (a,b,c,d){
//     console.log(a+b)
//     console.log(c,d)
// }
// d(1,2)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//multiplication tables
// for (let i=1;i<=10;i++){
//     for (let j =1;j<=10;j++){
//         console.log(i ,"x", j,"=",i*j)
//     }
//     console.log()
// }


//1 to 100 spy number

// for (let i=1;i<=100;i++){
//     let a=i
//     let sum=0
//     let pro=1
//     do{
//         let r=a%10
//         sum=sum+r
//         pro=pro*r
//         a=Math.floor(a/10)
//     }while(a!=0)
//  if (sum===pro){
//     console.log(i,"spy number")
//  }
// }

// lcm 

// let n=16
// let m=57
// if(n>m){
//     max=n
// }else{
//     max=m
// }
// do{
//      if (max%n==0 && max%m==0){
//             let lcm=max
//             console.log(lcm)
//             break
//         }
//         else{
//             max=max+1
//     }

// }while(true)

// gcd 

// n=16
// m=57
// if (n<m){
//     min=n
// }else{
//     min=m
// }
// for (let i=1;i<=min;i++){
//     if (n%i===0 && m%i===0){
//         gcd=i
//         console.log(gcd)
//     }
// }


// 



// function outer(){
//     console.log("outer");

//     function inner1(){
//         console.log("inner1");

//         function inner11(){
//             console.log("inner11");

//             function inner111(){
//                 console.log("inner111")
//                 function inner1111(){
//                     console.log("inner1111")
//                 }
//                 inner1111()
//             }
//             inner111()
//         }
//     inner11()
//     }
//     function inner2(){
//         console.log("inner2")
//     }
//     inner1()
//     inner2()
// }
// outer()







 
