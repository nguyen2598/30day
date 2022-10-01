const $= document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)


let imgWrap=$('.img-wrap img')
let listDivImg = document.querySelectorAll('.list-img div')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let indexValue = 0

console.log(listDivImg[0].src)

function setImg(i){
    imgWrap.src= listDivImg[i].querySelector('img').src
    indexValue = i
    listDivImg.forEach((item) => {
        item.classList.remove('active')
	})
    listDivImg[i].classList.add('active')
}

next.addEventListener('click',()=>{
    indexValue++;
    if(indexValue > listDivImg.length-1){
        indexValue=0
    }
    setImg(indexValue);
})

prev.addEventListener('click',()=>{
    indexValue--;
    if(indexValue < 0 ){
        indexValue=listDivImg.length-1
    }
    setImg(indexValue);
})

listDivImg.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        setImg(index);
    })
})