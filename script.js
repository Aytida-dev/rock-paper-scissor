//model

const arr = [{
    win: "" + -1,
    in: "" + 0,
    lose: "" + 1,
}, {
    win: "" + 1,
    in: "" + -1,
    lose: "" + 0,
}, {
    win: "" + 0,
    in: "" + 1,
    lose: "" + -1,
}]
let thisSide;
let arrTemp = []
let i=0;
let j=0;

function compSelect() {
    arrTemp = arr.filter((input) => {
        if (input.in === thisSide) { return true; }
    })
}
function random() {

    thisSide = "" + Math.floor(Math.random() * 3 - 1);

}
random();

//view
function choosenOption(event) {
    let src;

    if (thisSide === 0 + "") { src = "images/paper.png" }
    if (thisSide === 1 + "") { src = "images/rock.png" }
    if (thisSide === -1 + "") { src = "images/scissor.png" }
    document.getElementById("computer").innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", src);
    document.getElementById("computer").appendChild(img);
    img.style.animation = "fadeIn 1s"

    let src1;

    if (event.target.name === 0 + "") { src1 = "images/paper.png" }
    if (event.target.name === 1 + "") { src1 = "images/rock.png" }
    if (event.target.name === -1 + "") { src1 = "images/scissor.png" }
    document.getElementById("you").innerHTML = "";
    const img1 = document.createElement("img");
    img1.setAttribute("src", src1);
    document.getElementById("you").appendChild(img1);
    img1.style.animation = "fadeIn 1s"
}

function showResult(event) {
    document.getElementById("result").style.animation = "fadeIn 1s"
    arrTemp.forEach((input) => {
        if (event.target.name === input.win) {
            document.getElementById("result").innerText = "You win";
            
            i=i+1;
            document.getElementById("yScore").innerText=i;
           

        }
        if (event.target.name === input.in) {
            document.getElementById("result").innerText = "Draw";

        }
        if (event.target.name === input.lose) {
            document.getElementById("result").innerText = "You lose";
            j=j+1;
            document.getElementById("cScore").innerText=j;
        }
    })

    document.getElementById("bottom").style.visibility="visible";
    document.getElementById("computer").style.animationIterationCount=0;
}

// conrol
function check(event) {

    choosenOption(event);
    compSelect();
    showResult(event);
    random();

}


