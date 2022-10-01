const foodBtns = document.querySelectorAll('.food-menu button')
const foodList = document.querySelectorAll('.food-item')

foodBtns.forEach(btn=>{
    btn.addEventListener('click',e=>{
        const type= e.target.getAttribute('type-food')
        let actives= document.querySelectorAll('.food-menu button.active')
        actives.forEach(active=>{
            active.classList.remove('active')
        })
        console.log(e)
        e.target.classList.add('active')

        foodList.forEach(item=>{
            if(type=='all' || item.getAttribute('type-food')==type){
                item.classList.remove('hide')

            }
            else{
                item.classList.add('hide')
            }
        })
    })
})
