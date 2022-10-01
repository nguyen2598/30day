const $= document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)


let images=$$('.image img')
let prev=$('.prev')
let next=$('.right')
let close=$('.close')
let galleryImg=$('.gallery__inner img')
let gallery=$('.gallery')

let currentIndex=0;

images.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        currentIndex=index;
        if(currentIndex==0)prev.classList.add('hidden');
        else prev.classList.remove('hidden');
        if(currentIndex==images.length-1)next.classList.add('hidden');
        else next.classList.remove('hidden');
        console.log(currentIndex)
        galleryImg.src=images[currentIndex].src
        gallery.classList.add('show');
    })
})

close.addEventListener('click',()=>{
    gallery.classList.remove('show');

})
// bắt sự kiện bàn phím

document.addEventListener('keydown',(e)=>{
    console.log(e)
    if (e.keyCode==27){
        gallery.classList.remove('show');
    }
})

prev.addEventListener('click',()=>{
    currentIndex--;
    if(currentIndex==0)prev.classList.add('hidden');
    else prev.classList.remove('hidden');
    if(currentIndex==images.length-1)next.classList.add('hidden');
    else next.classList.remove('hidden');
    console.log(currentIndex)
    galleryImg.src=images[currentIndex].src
    gallery.classList.add('show');
    
})
next.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex==0)prev.classList.add('hidden');
    else prev.classList.remove('hidden');
    if(currentIndex==images.length-1)next.classList.add('hidden');
    else next.classList.remove('hidden');
    console.log(currentIndex)
    galleryImg.src=images[currentIndex].src
    gallery.classList.add('show');
})