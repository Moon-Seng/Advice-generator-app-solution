let number = document.querySelector('.changing-number');
let text = document.querySelector('.changing-text');
let btn = document.querySelector('.dice-circle');
let apiURL = "https://api.adviceslip.com/advice";

btn.addEventListener('click' , function(){
    fetch(apiURL, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      number.innerHTML = dataId;
      text.innerHTML = `"${dataAdvice}"`;
    });

})
