let mainBot = document.getElementById("Game");
let refresh = document.getElementById("Reload");
let title = document.getElementById("Text")
var buttons = document.getElementsByClassName('buttonBot');
refresh.onclick = Refresh;

function Bot() {
    for(i=0; i < 9; i++){
        let but = document.createElement("div");
        but.id = i;
        but.className = "buttonBot";
        but.onclick = MyClick;
        mainBot.appendChild(but)
    }
}

function MyClick(e){
    let id = e.target.id;
    if(Button(id).innerText == "") {Button(id).innerText = "X"; Bots()}
    else{alert("Нажмите на другое")}
}

let Bots = () => {
    let index = [];
    let j = 0;
    for(i = 0; i < buttons.length; i++){
        if(buttons[i].innerText == ""){
            index[j] = i;
            j++;
        }
    }
    let random = Math.floor(Math.random() * index.length);
    let randBlock = index[random];
    buttons[randBlock].innerText = "0";

}

function Button(id) {
    return document.getElementById(id)
}


function CheckWin() {
    if(Button(0).innerText == "X" && Button(1).innerText == "X" && Button(2).innerText == "X" ||  Button(3).innerText == "X" && Button(4).innerText == "X" && Button(5).innerText == "X"
    || Button(6).innerText == "X" && Button(7).innerText == "X" && Button(8).innerText == "X" || Button(0).innerText == "X" && Button(4).innerText == "X" && Button(8).innerText == "X"
    || Button(2).innerText == "X" && Button(4).innerText == "X" && Button(6).innerText == "X" || Button(0).innerText == "X" && Button(3).innerText == "X" && Button(6).innerText == "X" 
    || Button(1).innerText == "X" && Button(4).innerText == "X" && Button(7).innerText == "X" || Button(2).innerText == "X" && Button(5).innerText == "X" && Button(8).innerText == "X"){
        Block("X-win")
    }
    else if(Button(0).innerText == "0" && Button(1).innerText == "0" && Button(2).innerText == "0" ||  Button(3).innerText == "0" && Button(4).innerText == "0" && Button(5).innerText == "0"
    || Button(6).innerText == "0" && Button(7).innerText == "0" && Button(8).innerText == "0" || Button(0).innerText == "0" && Button(4).innerText == "0" && Button(8).innerText == "0"
    || Button(2).innerText == "0" && Button(4).innerText == "0" && Button(6).innerText == "0" || Button(0).innerText == "0" && Button(3).innerText == "0" && Button(6).innerText == "0" 
    || Button(1).innerText == "0" && Button(4).innerText == "0" && Button(7).innerText == "0" || Button(2).innerText == "0" && Button(5).innerText == "0" && Button(8).innerText == "0"){
        Block("Y-win")
    }
    else if((Button(0).innerText == "X" || Button(0).innerText == "0") && (Button(1).innerText == "X" || Button(1).innerText == "0") && (Button(2).innerText == "X" || Button(2).innerText == "0") 
    && (Button(3).innerText == "X" || Button(3).innerText == "0") && (Button(4).innerText == "X" || Button(4).innerText == "0") && (Button(5).innerText == "X" || Button(5).innerText == "0")
    && (Button(6).innerText == "X" || Button(6).innerText == "0") && (Button(7).innerText == "X" || Button(7).innerText == "0") && (Button(8).innerText == "X" || Button(8).innerText == "0")){
        Block("Draw")
    }
}

function Block(text) {
    title.style.display = "block";
    title.innerText = text
}

function isClear(){
    for(i = 0; i < buttons.length; i++){
        buttons[i].innerText = ""
    }
}

let Live = setInterval(() =>{
    CheckWin()
}, 10)


function Refresh() {
    isClear()
    title.style.display = "none";
}