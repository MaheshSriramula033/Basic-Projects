let userScore=0;
let comperScore=0;
const choices=document.querySelectorAll(".choice");
const meg=document.querySelector("#msg");
const userScorepare=document.querySelector("#user_score");
const compScorepare=document.querySelector("#comp_score");
choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       // console.log("choice was cliked",userchoice);
        playGame(userchoice);
    });
});
const getCompchoice=()=>{
    const options=["rock","paper","scissor"];
     const randomidex=Math.floor(Math.random()*3);
      return options[randomidex];
     };
     const playGame=(userchoice)=>{
         console.log("user choice",userchoice);
         const compChoice=getCompchoice();
         console.log("computer choice",compChoice);

         if(userchoice===compChoice){
             drawGame();
         }
        else{
            let userwin=true;
            if(userchoice==="rock"){
                userwin= compChoice==="paper"? false :true;
            }
            
            else if(userchoice==="paper"){
                userwin=compChoice==="rock"? true :false;
            }
            else{//scissors
                userwin=compChoice==="rock"?false:true;
            }
            showwinner(userwin,userchoice,compChoice);
        }
     };

    const drawGame=()=>{
        console.log("game was draw");
        meg.innerText="Game was draw";
        meg.style.backgroundColor="#081b31";
    }
    const showwinner=(userwin,userchoice,compChoice)=>{
        if(userwin){
            userScore++;
            userScorepare.innerText=userScore;
            console.log("You win!");
            msg.innerText=`You win! your ${userchoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            comperScore++;
            compScorepare.innerText=comperScore;
            console.log("You loose!");
            msg.innerText=`You lost ! ${compChoice} beats ${userchoice}`;
            msg.style.backgroundColor="red";
        }
    }