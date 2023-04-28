const myButton = document.querySelector('button')
myButton.onclick = function(){
    const randomNumber= Math.random();
    if (randomNumber >=0 && randomNumber < 1 / 3){
        console.log('rock')

    }else if (randomNumber >= 1 / 3 && randomNumber< 2/3){
        console.log('paper')

    }else if (randomNumber >= 2 / 3 && randomNumber< 1){
        console.log('paper')

    }
}
