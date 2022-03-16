let startBtn=document.querySelector("#start");
let resetBtn=document.querySelector("#reset");
let pauseBtn=document.querySelector("#pause")
 
let min=document.querySelector("#minute");
 let sec=document.querySelector("#second");
 let msec=document.querySelector("#msecond");

 let minute=0;
 let second=0;
 let msecond=0;
let stopTime=true;
// let container=document.querySelector("#container")

startBtn.addEventListener("click",()=>{
    if(stopTime==true){

        stopTime=false;
        const myInterval=setInterval (startPlay,1);
        pauseBtn.style.display="inline"
        startBtn.style.display="none"
        
    }else if(stopTime==false){
        stopTime=true;
        // startBtn.style.display="none"
        // pauseBtn.style.display="inline"
    }
    
  

})

pauseBtn.addEventListener("click",()=>{
    // setInterval(pausePlay)
    if(stopTime==false){
        stopTime=true;
        startBtn.style.display="inline"
        pauseBtn.style.display="none"
    }
})


resetBtn.addEventListener("click",()=>{
    resetPlay();
//    container.innerHTML ="00:00:00";
})


 function startPlay(){
     if(stopTime==false){
        minute=+(minute);
        second=+(second);
        msecond=+(msecond)

       msecond+=1
        if(msecond==99){
         msecond=00
          second+=1
        }
        if(second==59){
            second=00
            minute+=1
        }
        if(minute<10){
            minute="0"+minute
        }
    
        if(second<10){
           second="0"+second
       }
       if(msecond<10){
           msecond="0"+msecond
       }
       min.innerText=minute;
       sec.innerText=second;
       msec.innerText=msecond
     }
   
  
 }
  function resetPlay(){

    window.location.reload(false)


    

        // minute=0;
        // second=0;
        // msecond=0;
        // stopTime=true;
        // min.innerText="00";
        // sec.innerText="00";
        // msec.innerText="00"
        // startBtn.style.display="inline"
        // pauseBtn.style.display="none"
  
    
  }
 
  
