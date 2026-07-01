// let a=document.getElementById("a")
// let b=document.getElementById("b")
// let c=document.getElementById("c")
// let images=["../multimedia/district logo.png","../multimedia/blinkitlogo.jpg","../multimedia/zomatologo.jpg","../multimedia/hyperpurebyzomato_logo.jpg"]
// index=0
// a.addEventListener("click",()=>{
//     index--
//     if (index<0){
//         index=images.length-1
//     }
//     b.src=images[index]
// })
// c.addEventListener("click",()=>{
//     index++
//     if (index>images.length-1){
//         index=0
//     }
//     b.src=images[index]
// })





// =================================================================================================================================================================

let e=document.getElementById("e")
let images=["../multimedia/district logo.png","../multimedia/blinkitlogo.jpg","../multimedia/zomatologo.jpg","../multimedia/hyperpurebyzomato_logo.jpg"]
index=0
setInterval(()=>{
    if (index>3){
        index=0}
    e.src=images[index]
    index+=1

},1200)
