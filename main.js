let music=new Audio("imagesAndSound/music.mp3");
let Audioturn=new Audio("imagesAndSound/ting.mp3");
let gameOver=new Audio("imagesAndSound/gameover.mp3");

//music.play();

let turn='X';
let isGameOver=false;

let changeTurn=()=>{

    if(turn==='X')
        turn='O'
        else 
        turn='X'
    
        return turn;
}
document.querySelector('.reset').addEventListener('click',()=>{
    boxContent=document.querySelectorAll('.Content-box');
    boxContent.forEach(element =>{
        element.innerText='';
    });
    document.querySelector('.image').getElementsByTagName('img')[0].style.width ='0px';
    turn='X';
     isGameOver=false;
        document.querySelector('.turns').innerHTML='Turn of '+ '  ' + turn;

});


 function chekcWin(){
    boxContent=document.querySelectorAll('.Content-box');
    check=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

    check.forEach(element =>{
        if(boxContent[element[0]].innerText === boxContent[element[1]].innerText && boxContent[element[1]].innerText === boxContent[element[2]].innerText && boxContent[element[0]].innerText !== "")  {

            document.querySelector('.turns').innerHTML=boxContent[element[0]].innerText  +" "+"WON";
            isGameOver=true;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width ='200px';

        }
    })
 }


let boxElements= Array.from(document.getElementsByClassName('box'));
boxElements.forEach(element =>{
            element.addEventListener('click',()=>{
                if(element.querySelector('.Content-box').innerText==='')
                element.querySelector('.Content-box').innerText=turn;
                changeTurn();
                Audioturn.play();
                chekcWin();
                if(!isGameOver){
                document.querySelector('.turns').innerHTML='Turn of '+ '  ' + turn;}


            });
})