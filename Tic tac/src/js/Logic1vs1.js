let main = document.getElementById("GamePlayer");
let reload = document.getElementById("reload");
let text = document.getElementById("Winner")
var change = 0;
reload.onclick = Reaload;

function Vs() {
    for(i=0; i<9; i++){
        let but = document.createElement("div");
        but.id = i+1;
        but.className = "buttons";
        but.onclick = Click;
        main.appendChild(but)
    }
}

function Click(e){
    let id = e.target.id;
    if(Buttons(id).innerText == "") {
        if(change == 0){
            Buttons(id).innerText = "X";
            change = 1;
        }
        else if(change == 1){
            Buttons(id).innerText = "0";
            change = 0;
        }
    }
    else{alert("Нажмите на другое")}
}

function Buttons(id) {
    return document.getElementById(id)
}


function Check() {
    if(Buttons(1).innerText == "X" && Buttons(2).innerText == "X" && Buttons(3).innerText == "X" ||  Buttons(4).innerText == "X" && Buttons(5).innerText == "X" && Buttons(6).innerText == "X"
    || Buttons(7).innerText == "X" && Buttons(8).innerText == "X" && Buttons(9).innerText == "X" || Buttons(1).innerText == "X" && Buttons(5).innerText == "X" && Buttons(9).innerText == "X"
    || Buttons(3).innerText == "X" && Buttons(5).innerText == "X" && Buttons(7).innerText == "X" || Buttons(1).innerText == "X" && Buttons(4).innerText == "X" && Buttons(7).innerText == "X" 
    || Buttons(2).innerText == "X" && Buttons(5).innerText == "X" && Buttons(8).innerText == "X" || Buttons(3).innerText == "X" && Buttons(6).innerText == "X" && Buttons(9).innerText == "X"){
        Ban("X-win")
    }
    else if(Buttons(1).innerText == "0" && Buttons(2).innerText == "0" && Buttons(3).innerText == "0" ||  Buttons(4).innerText == "0" && Buttons(5).innerText == "0" && Buttons(6).innerText == "0"
    || Buttons(7).innerText == "0" && Buttons(8).innerText == "0" && Buttons(9).innerText == "0" || Buttons(1).innerText == "0" && Buttons(5).innerText == "0" && Buttons(9).innerText == "0"
    || Buttons(3).innerText == "0" && Buttons(5).innerText == "0" && Buttons(7).innerText == "0" || Buttons(1).innerText == "0" && Buttons(4).innerText == "0" && Buttons(7).innerText == "0" 
    || Buttons(2).innerText == "0" && Buttons(5).innerText == "0" && Buttons(8).innerText == "0" || Buttons(3).innerText == "0" && Buttons(6).innerText == "0" && Buttons(9).innerText == "0"){
        Ban("Y-win")
    }
    else if((Buttons(1).innerText == "X" || Buttons(1).innerText == "0") && (Buttons(2).innerText == "X" || Buttons(2).innerText == "0") && (Buttons(3).innerText == "X" || Buttons(3).innerText == "0") 
    && (Buttons(4).innerText == "X" || Buttons(4).innerText == "0") && (Buttons(5).innerText == "X" || Buttons(5).innerText == "0") && (Buttons(6).innerText == "X" || Buttons(6).innerText == "0")
    && (Buttons(7).innerText == "X" || Buttons(7).innerText == "0") && (Buttons(8).innerText == "X" || Buttons(8).innerText == "0") && (Buttons(9).innerText == "X" || Buttons(9).innerText == "0")){
        Ban("Draw")
    }
}

function Ban(title) {
    text.style.display = "block";
    text.innerText = title
}

function Clear(){
    let buttons = document.querySelectorAll('.buttons')
    for(i = 0; i < buttons.length; i++){
        buttons[i].innerText = ""
    }
}

let isLive = setInterval(() =>{
    Check()
}, 10)


function Reaload() {
    Clear()
    text.style.display = "none";
}