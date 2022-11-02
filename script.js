const btn = document.querySelector('.dice')

function renderAdvice () {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {

        const advice = data.slip.advice
        const num = data.slip.id
        const adviceNum = document.querySelector('.advice-num')
        const adviceText = document.querySelector('.advice-text')
        adviceText.textContent = `${advice}`
        adviceNum.textContent = `${num}`
        })
}

renderAdvice()

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    renderAdvice()
    

})



        