let gameSeq = [];
let userSeq = [];
let highScore = 0;

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");



document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        level = 0;
        gameSeq =[];
        userSeq =[];
        levelUp();
        
    }
});


function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    setTimeout(function(){
        userSeq =[];
        level++;
        h2.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random()*3);
        let randColor = btns[randIdx];

        let randBtn = document.querySelector(`.${randColor}`);
    
        gameFlash(randBtn);
        gameSeq.push(randColor);
        // console.log(gameSeq);
    },600);
    
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userSeq.push(btn.classList[1]);
    // console.log(userSeq);
    // console.log(gameSeq);
    matching();
    
    
}

let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }


function matching(){
    for(let i=0;i<userSeq.length;i++){
        if(userSeq[i] != gameSeq[i]){
            gameOver();
            started=false;
            break;
        }
        if(i==level-1){
            levelUp();
        }

    }

}


function gameOver(){
    let body = document.querySelector("body");
    body.classList.add("error");
    setTimeout(function(){
        body.classList.remove("error");
    },200);
    if(highScore < level-1){
        highScore = level-1;
        let h = document.querySelector("h3");
        h.innerText = `High Score : ${highScore}`;
    }
    h2.innerHTML = `GAME OVER! Your Score was ${level-1}<br>Press any key to restart`;
    
}


function details(){
    console.log(gameSeq);
    console.log(userSeq);
}