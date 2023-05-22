//alert("Inside script.js");
let playerState = 'fall';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;   
})
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
playerImage.src = "./images/shadow_dog.png"
const spriteWidth = 575;
const spriteHeight = 523;
//let frameX = 0;
//let frameY = 0;

let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name:'idle',
        frames:7
    },
    {
        name:'jump',
        frames:7
    },
    {
        name:'fall',
        frames:7
    },
    {
        name:'run',
        frames:9
    },
    {
        name:'dizzy',
        frames:11
    },
    {
        name:'sit',
        frames:5
    },
    {
        name:'roll',
        frames:7
    },
    {
        name:'bite',
        frames:7
    },
    {
        name:'ko',
        frames:12
    },
    {
        name:'getHit',
        frames:4
    }
];
animationStates.forEach((state,index)=>{
    let frames ={
        loc:[]
    };
    for(let j=0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let postionY = index * spriteHeight;
        frames.loc.push({x:positionX, y:postionY});
    }
    spriteAnimations[state.name]=frames;
});
console.log(animationStates);
console.log(spriteAnimations['idle'].loc);
console.log(spriteAnimations['idle'].loc.length);
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //ctx.drawImage(playerImage,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        /*if(gameFrame % staggerFrame == 0){
        if(frameX < 9 ) frameX++;
        else frameX=0;
    }
    gameFrame++;
    */
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerState].loc.length;
    frameX = spriteWidth*position;
    frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();