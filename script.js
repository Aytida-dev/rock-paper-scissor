

const arr=[{
    win:""+-1,
    in:""+0,
    lose:""+1,
},{
    win:""+1,
    in:""+-1,
    lose:""+0,
},{
    win:""+0,
    in:""+1,
    lose:""+-1,
}]
let thisSide;
let arrTemp=[]

function random(){
    
    thisSide = ""+Math.floor(Math.random()*3-1);
    
}
random();
function check(event){
    if(thisSide===0+""){document.getElementById("you").innerText="paper";}
    if(thisSide===1+""){document.getElementById("you").innerText="Rock";}
    if(thisSide===-1+""){document.getElementById("you").innerText="scissors";}
  
    arrTemp=arr.filter((input) =>{
        if(input.in===thisSide){return true;}
    })
    arrTemp.forEach((input)=>{
        if(event.target.name===input.win){return console.log("win")}
        if(event.target.name===input.in){return console.log("draw")}
        if(event.target.name===input.lose){return console.log("lose")}
    })

    random();
    
}