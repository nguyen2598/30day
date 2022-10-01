let btbSearch = document.querySelector('.search-box__button')
let focusInput=document.querySelector('.search-box__input')
btbSearch.addEventListener('click',function(){
    console.log(this)
    console.log(btbSearch)
    this.parentElement.classList.toggle('open')
    focusInput.focus();
})