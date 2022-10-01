let btnOpen = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.modal');
let iconClose = document.querySelector('.icon-close');
let btnClose = document.querySelector('.modal__footer button');
console.log(btnOpen)
console.log(modal)
console.log(iconClose)
console.log(btnClose)

function toggleModal(e){
    modal.classList.toggle('hidden')
    console.log(e.target)
}

btnOpen.addEventListener('click',toggleModal)

modal.addEventListener('click',function(e){
    if(e.target===e.currentTarget){
        toggleModal();
    }
})
iconClose.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)