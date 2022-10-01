let search = document.querySelector('.search i')
let input = document.querySelector('.search input')

search.addEventListener('click',()=>{
    input.classList.toggle('hidden')
    input.focus()
})

input.addEventListener('keypress',e=>{
    if(e.keyCode==13){
        let valu= document.querySelector('.text-typing p')
        valu.innerText= input.value;
        input.classList.toggle('hidden')
        input.value=''
    }
})
