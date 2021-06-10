
    const randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
    const img1 = document.querySelector('.img1');
    const randomImage1 = 'images/' + 'dice' + randomNumber1 + '.png';
    img1.src = randomImage1;
  
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);
    const img2 = document.querySelector('.img2');
    const randomImage2 = 'images/' + 'dice' + randomNumber2 +'.png';
    img2.src = randomImage2;

    const h1 = document.querySelector('h1');
    if(randomNumber1 > randomNumber2){
        h1.innerHTML = "Player 1 wins 😎";
    }else if(randomNumber2 > randomNumber1){
        h1.innerHTML = 'Player 2 wins 😎';
    }else{
        h1.innerHTML  = "Draw!";
    }

