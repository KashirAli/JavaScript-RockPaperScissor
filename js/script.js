//const user_name = window.prompt('Enter your name');

const rock = document.getElementById('img-1');
const paper = document.getElementById('img-2');
const scissor = document.getElementById('img-3');
const user = document.querySelector('#user');
const comp = document.querySelector('#comp');
const user_score = document.getElementById('user_score');
const comp_score = document.getElementById('comp_score');
const result = document.getElementById('result');
//user.innerHTML = user_name;

var output,user_scores =0,comp_scores =0,gameplaying=1;
const data =['rock','paper','scissor'];
const random=()=>{
    let i;
    i=Math.floor(Math.random()*3);
     output = data[i];
}
random();

const winner = (user_scores,comp_scores)=>{
    if(user_scores>=3){
        stopgame();
        user.innerHTML = 'WINNER';   
    }
    else if(comp_scores>=3){
        stopgame();
        comp.innerHTML = 'WINNER';
        console.log(comp_scores);
    }
}

const rockevent =()=>{
  if(gameplaying){
    random();

    if(output==='rock'){
     user_scores = user_scores;
     result.innerHTML = 'Rock<sub>user</sub> Draws Rock<sub>comp</sub>';
    }
    else if(output==='paper'){
     comp_scores+=1;
     comp_score.innerHTML = comp_scores;
     result.innerHTML = 'Rock<sub>user</sub> is covered by paper<sub>comp</sub>.You Lose';
 
    }
    else{
     user_scores+=1;
     user_score.innerHTML = user_scores;
     result.innerHTML = 'Rock<sub>user</sub> beats Scissor<sub>comp</sub>.You Win';
    }
    winner(user_scores,comp_scores);
  }
 
}

const paperevent =()=>{
    if(gameplaying){
        random();
        if(output==='rock'){
            user_scores+=1;
            user_score.innerHTML = user_scores;
            result.innerHTML = 'Paper<sub>user</sub> Covers Rock<sub>comp</sub>.You Win';
        }
        else if(output==='paper'){
            comp_scores = comp_scores;
            result.innerHTML = 'Paper<sub>user</sub> Draws Paper<sub>comp</sub>';
        }
        else{
            comp_scores+=1;
            comp_score.innerHTML = comp_scores;
            result.innerHTML = 'Paper<sub>user</sub> is cut with Scissor<sub>comp</sub>.You Lose';
        }
        winner(user_scores,comp_scores);
    }     
   
 }

const scissorevent =()=>{
   if(gameplaying){
    random();
    if(output==='rock'){
        comp_scores+=1;
        comp_score.innerHTML = comp_scores;
        result.innerHTML = 'Scissor<sub>user</sub> is beaten by Rock<sub>comp</sub>.You Lose';
    }
    else if(output==='paper'){
        user_scores+=1;
        user_score.innerHTML = user_scores;
        result.innerHTML = 'Scissor<sub>user</sub> Cuts Paper<sub>comp</sub>.You Win';
    }
    else{
        comp_scores = comp_scores;
        result.innerHTML = 'Scissor<sub>user</sub> Draws Scissor<sub>comp</sub>';
    }
    winner(user_scores,comp_scores);
   }
 
}

const stopgame=()=>{
gameplaying=0;
}
// console.log(user_scores)
// console.log(comp_scores)
rock.addEventListener('click',rockevent);
paper.addEventListener('click',paperevent);
scissor.addEventListener('click',scissorevent);

