// function even(num){
//     return new Promise((res,rej)=>{
//         if (num%2==0){
//             res("it is a even number")
//         }else{
//             rej("it is not a even number")
//         }
//     })
// }
// let a=even(1)

// const { useCallback } = require("react");

//     a
    
//     .then((msg)=>{console.log(msg)})  
//     .catch((err)=>{console.log(err)})



// function is_even(num){
//     return new Promise((res,rej)=>{
//         if (num%2==0){
//             res("True")
//         }else{
//             rej("False")
//         }
//     })
// }
// let b=is_even(1)
//     b
//         .then((msg)=>{console.log(msg)})
        
//         .catch((err)=>{console.log(err)})


// callbach hell/

// function register(a){
//     setTimeout(()=>{
//         console.log("registered successfully")
//         a(home)
//     },3000)

// }
// function login(b){
//     setTimeout(()=>{
//         console.log("login successfully")
//         b(payment)
//     },2000)
// }
// function home(c){
//         setTimeout(()=>{
//             console.log("home page")
//             c(order)
//         },1000)
// }
// function payment(d){
//         setTimeout(()=>{
//             console.log("payment sucessfully")
//             d()
//         },3000)
// }
// function order(){
//         setTimeout(()=>{
//             console.log("order placed")
//         },2000)
// }


// register(login)




// promissess

// function register(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("registered sucessfully")
//         },3000)
//     })

// }
// function login(){
// return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("login sucessfully")
//         },2000)
//     })

// }
// function home(){
//         return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("home page")
//         },1000)
//     })

// }
// function payment(){
//         return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("payment sucessful")
//         },3000)
//     })

// }
// function order(){
//         return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("order placed")
//         },2000)
//     })

// }



// let p=register()


// p.then((msg)=>{
//     console.log(msg)
//     return login()
// })

// .then((msg)=>{
//     console.log(msg)
//     return home()
// })

// .then((msg)=>{
// console.log(msg)
// return payment()
// })

// .then((msg)=>{
//     console.log(msg)
//     return order()
// })

// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })



// let arr=['a','b']
// let arr2=['c','d','e']
// a=arr.concat(arr2)
// console.log(a)


// console.log(arr.indexOf("b"))
// console.log(arr2.includes("c"))
// a=arr2.slice(1)
// console.log(arr2)
// console.log(a)
// console.log(arr2.includes(a))


// a=console.log(typeof arr)


// if (a in arr2){
//     console.log("true")
// }else{
//     console.log("false")
// }

// if (typeof arr==="object"){
//     console.log("hi")
// }

// if (1=="1"){
//     // console.log(hello)
// }

// let z=1
// let b=a
// let c=b

// if (c==z){
//     console.log(True)
// }

// let arr1=[1,2,3,4,5,6,7,8,9]
// let everthing=arr1.every((e)=>{
//     return e>0
// })
// console.log(everything)


// let arr1=[1,2,3,4,5]
// k=2
// a=arr1.length
// k=k%a
// do{
// a=arr1.pop()
// arr1.unshift(a)
// k--
// }while(k!=0);
// console.log(arr1)




// s="abc"
// function anagram(s,index=0,r=""){
//     let temp
//     for(i=0;i++;i<=s.length){
//         temp=s[index]
//         s[index]=s[i]
//         s[i]=temp

//     }

// }




// let s="abc"
// let a=Array(s)
// console.log(a)


// =========================================================================================================================================
// string methods
// ===========================================================================================
// 
// to upper
// to lower
// at 
// char at
// char code at
// Concate 
// start 
// end 
// repeat 
// replace 
// replace all 
// slice 
// sub string 
// length 
// trim 
// trim start 
// trim end 
// pad start 
// pad end 
// index of 
// last index of 
// includes 





let a=10;
var b=20;
const c=30;
debugger;
console.log(a)
console.log(b)
console.log(c)
