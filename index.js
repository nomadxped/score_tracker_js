let hcount = 0;
let gcount = 0;

function hinc1(){
    hcount+=1
    document.getElementById("homescore").textContent = hcount
}

function hinc2(){
    hcount+=2
    document.getElementById("homescore").textContent = hcount
}

function hinc3(){
    hcount+=3
    document.getElementById("homescore").textContent = hcount
}


function ginc1(){
    gcount+=1
    document.getElementById("guestscore").textContent = gcount
}

function ginc2(){
    gcount+=2
    document.getElementById("guestscore").textContent = gcount
}

function ginc3(){
    gcount+=3
    document.getElementById("guestscore").textContent = gcount
}