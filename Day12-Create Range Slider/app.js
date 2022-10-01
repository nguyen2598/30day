let process= document.querySelector('.process')
let range= document.querySelector('.range')
let valueSpan= document.querySelector('.process span')
const body = document.querySelector('body')

function uppdateProcess(value){
    process.style.width=`${value}%`
    valueSpan.innerHTML=`${value}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${value / 100})`
}

range.addEventListener('mousemove',function(e){
    let processWidth = e.pageX - this.offsetLeft;
    let percent = (processWidth /this.offsetWidth)*100;
    percent=Math.round(percent)
    uppdateProcess(percent);
})


uppdateProcess(30);