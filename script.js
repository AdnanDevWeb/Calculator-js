
let buttons = document.querySelectorAll('.btn')
let clear = document.querySelector('[data-clear]')
let equal = document.querySelector('[data-equal]')
let screen = document.querySelector('[data-screen]')

buttons.forEach(button =>{
    button.addEventListener('click', e =>{
        let value = e.target.dataset.num
        screen.value += value
    })
})

equal.addEventListener('click' , e =>{
    if(screen.value === ''){
        console.log(true)
        screen.value =""; 
    }
    else{
        let answer = eval(screen.value)
        console.log(answer)
    }

})

clear.addEventListener('click' , ()=>{
    screen.value = ''
})







