

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

function random() {

    thisSide = "" + Math.floor(Math.random() * 3 - 1);

}
random();
function check(event) {
    let src;

    if (thisSide === 0 + "") {src="images/paper.png" }
    if (thisSide === 1 + "") { src="images/rock.png" }
    if (thisSide === -1 + "") {src="images/scissor.png"}
    document.getElementById("computer").innerHTML="";
    const img = document.createElement("img");
    img.setAttribute("src", src);
    document.getElementById("computer").appendChild(img);

    let src1;

    if (event.target.name === 0 + "") {src1="images/paper.png" }
    if (event.target.name === 1 + "") { src1="images/rock.png" }
    if (event.target.name === -1 + "") {src1="images/scissor.png"}
    document.getElementById("you").innerHTML="";
    const img1 = document.createElement("img");
    img1.setAttribute("src", src1);
    document.getElementById("you").appendChild(img1);


    arrTemp = arr.filter((input) => {
        if (input.in === thisSide) { return true; }
    })
    arrTemp.forEach((input) => {
        if (event.target.name === input.win) {
            document.getElementById("result").innerText="You win";
            return console.log("win") }
        if (event.target.name === input.in) { 
            document.getElementById("result").innerText="Draw";
            return console.log("draw") }
        if (event.target.name === input.lose) { 
            document.getElementById("result").innerText="You lose";
            return console.log("lose") }
    })

    random();

}