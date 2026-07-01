let display=document.getElementById("display")
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let sec=0
let min=0
let hours=0

let flag=0
display.textContent={hours},":",{min},":",{sec}

start.addEventListener("click",()=>{

    setInterval(()=>{
        sec++
        if(sec>100){
            sec=0
            min++
        }
        display.textContent={hours},":",{min},":",{sec}
    },100)
})

