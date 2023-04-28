
//ROCK 
const myButton1 = document.getElementById("rock")
myButton1.onclick = function(){
    let computerMove1= ""
    const randomNumber1= Math.random();
    if (randomNumber1 >=0 && randomNumber1 < 1 / 3){
        computerMove1='rock'

    }else if (randomNumber1 >= 1 / 3 && randomNumber1< 2/3){
        computerMove1='paper'

    }else if (randomNumber1 >= 2 / 3 && randomNumber1< 1){
        computerMove1='scissors'

    }
    let result1= ''
    console.log(computerMove1)
    if(computerMove1==='rock'){
        result1='tie'
    }else if(computerMove1==='paper'){
        result1='You lose '
    }else if(computerMove1==='scissors'){
        result1='You win'
    }
    alert(`You picked rock.Computer picked ${computerMove1}. ${result1}`)

}

//PAPER
const myButton2 = document.getElementById("paper")
myButton2.onclick= function(){
    let computerMove2= ""
    const randomNumber2= Math.random();
    if (randomNumber2 >=0 && randomNumber2< 1 / 3){
        computerMove2='rock'

    }else if (randomNumber2 >= 1 / 3 && randomNumber2< 2/3){
        computerMove2='paper'

    }else if (randomNumber2 >= 2 / 3 && randomNumber2< 1){
        computerMove2='scissors'

    }
    let result2=''
    if(computerMove2==='paper'){
        result2= 'tie'
    }else if(computerMove2==='scissors'){
        result2='You lose'
    }else if(computerMove2==='rock'){
        result2='You win'
    }
    alert(`You picked paper.Computer picked ${computerMove2}. ${result2}`)

}
//SCISSORS
const myButton3=document.getElementById("scissors")
myButton3.onclick= function(){
    let computerMove3=''
    const randomNumber3= Math.random()
    if (randomNumber3 >=0 && randomNumber3 < 1 / 3){
        computerMove3='rock'

    }else if (randomNumber3 >= 1 / 3 && randomNumber3< 2/3){
        computerMove3='paper'

    }else if (randomNumber3 >= 2 / 3 && randomNumber3< 1){
        computerMove3='scissors'

    }
    let result3=''
    if(computerMove3==='rock'){
        result3='You lose'
    }else if(computerMove3==='scissors'){
        result3='tie'
    }else if(computerMove3==='paper'){
        result3='You win'
    }
    alert(`You picked scissors.Computer picked ${computerMove3}. ${result3}`)

}
