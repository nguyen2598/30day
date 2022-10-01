const $= document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

let boxes=$$('.box')
let targetList=$$('.target')

let currentIndex=0;
let currentTarget=null;
targetList.forEach((target,i )=> {
    target.addEventListener('dragstart', function(e) {
        this.classList.add('dragging')
        currentTarget=this;
        currentIndex=i;
    })

    target.addEventListener('dragend', function(e) {
        this.classList.remove('dragging')
    })
})

let isCheck=true;
let valueIndex=0;

boxes.forEach((box,index)=>{
    box.addEventListener('dragover',function(e){
       if(isCheck) {
        valueIndex=index
        isCheck=!isCheck
       }
        e.preventDefault();
    })

    box.addEventListener('drop',function(e){
        
        if(box.querySelector('.target')){
            this.appendChild(targetList[currentIndex])
            // this.appendChild(currentTarget)
            // boxes[currentIndex].appendChild(currentTarget)
            // console.log(targetList[currentIndex])
            // console.log(box.querySelector('.target'))
            // console.log(box.querySelector('.target').getAttribute('src'))
            // targetList[currentIndex].setAttribute('src',box.querySelector('.target').getAttribute('src'))
            // console.log(targetList[currentIndex].getAttribute('src'))
            boxes[valueIndex].appendChild(box.querySelector('.target'))
        }
        else{
            this.appendChild(currentTarget)
        }
        isCheck=!isCheck
    })
})