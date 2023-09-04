const mainContainer = document.querySelector('#main-container');
const thanksContainer = document.querySelector(".thanks-container");
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById("rate-again");
const rates = document.querySelectorAll(".btn");

// add an event listener to submit button 
submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove('hidden');
    mainContainer.style.display = "none";
});

// add an event listener to the thanks-container submit button

rateAgain.addEventListener('click', () =>{
    thanksContainer.classList.add('hidden');
    mainContainer.style.display = "block";
})

rates.forEach((rate =>{
    rate.addEventListener('click', () =>{
        rating.innerHTML = rate.innerHTML;
    })
}))



