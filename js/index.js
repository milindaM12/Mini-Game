const playerElm = document.getElementById('player');
const groundElm = document.getElementById('ground');
//console.log(groundElm.clientWidth);

let dx = 0;
let dy = 2;
let acceleration = 1.2;
let index = 0;

setInterval(()=>{
    if(dy!=0){
        playerElm.style.backgroundImage = `url(img/adventure_girl/png/Jump\ \(1\)${index++}.png)`;
    }else if(dx!=0){
        console.log(index);
        playerElm.style.backgroundImage = `url(img/adventure_girl/png/Run\ \(1\)${index++}.png)`;
    }else{
        playerElm.style.backgroundImage = `url(img/adventure_girl/png/Idle\ \(1\)${index++}.png)`;
    }
    if(index > 9 && dx != 0) {
        index=1;
    }
    if(index > 10){
        index=1;
    }
});
    /* if(playerElm.offsetLeft<0){
        playerElm.style.left = '0';
    }else if(playerElm.offsetLeft >= (groundElm.clientWidth-45)){
        playerElm.style.left = `${groundElm.clientWidth - playerElm.clientWidth}px`;
    }else{
        playerElm.style.left = `${playerElm.offsetLeft + dx}px`;
    } */

setInterval(()=>{
    if ((playerElm.offsetLeft + playerElm.offsetWidth) > innerWidth){
        dx = 0;
        playerElm.style.left = `${innerWidth - playerElm.offsetWidth}px`;
    } else if (playerElm.offsetLeft < 0){
        dx = 0;
        playerElm.style.left = 0;
    }

    dy += acceleration;

    if ((playerElm.offsetTop + playerElm.offsetHeight) > groundElm.offsetTop){
        dy = 0;
        acceleration = 0;
        playerElm.style.top = `${groundElm.offsetTop - playerElm.offsetHeight}px`;
    }
    playerElm.style.left = `${playerElm.offsetLeft + dx}px`;
    playerElm.style.top = `${playerElm.offsetTop + dy}px`;

},17);

addEventListener('keydown',({key})=>{
    if(key === 'ArrowRight'){   
        dx =10;

    }else if(key === 'ArrowLeft'){
        dx = -10;
    }
    else if(key === ' '){
        dy = -20;
        acceleration = 0.2;
    }
});

addEventListener('keydown', ({key})=>{
    if(key === 'ArrowRight'){
        playerElm.classList.remove('turn');
        dx=10;
    }else if(key === 'ArrowLeft'){
        playerElm.classList.add('turn');
        dx = -10;

    }
})

addEventListener('keyup',({key})=>{
    if(key === 'ArrowRight' || key === 'ArrowLeft'){
       dx = 0;
    }else if (key == ' '){
        acceleration = 0.2;
    }
});

addEventListener('keypress', ({key})=>{
    if(key === ' '){
        dy = -10;
        acceleration = 0.2;
    }
});

let j=0;
function repaint(timestamp){
    console.log('painted' + j++, timestamp);
    requestAnimationFrame(repaint);
}

requestAnimationFrame(repaint);