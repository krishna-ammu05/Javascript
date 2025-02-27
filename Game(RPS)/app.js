let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const genComputerChoice =() =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner =(userWin ,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("You Win");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You loose");
        msg.innerText = `You Lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice)=>{
    console.log("user choice =", userChoice);
    const compChoice = genComputerChoice();
    console.log("computer choice =",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper"? false :true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissor"? false :true;
        }else{
            userWin = compChoice === "rock"? false :true;
        }
        showWinner (userWin ,userChoice ,compChoice);
    }
};
choices.forEach((choice) =>{
    // console.log(choice);
     choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" ,userChoice);
        playGame(userChoice);
     });
})