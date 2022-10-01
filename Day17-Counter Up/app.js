const $= document.querySelector.bind(document)

let face = $('.face h2')
let youtube = $('.youtube h2')
let tiktok = $('.tiktok h2')

function counterUp(el,end){
    let speed = 100
    let from = 0
    let step = end/speed
    const counter = setInterval(()=>{
        from = from + step
        if(from > end){
            clearInterval(counter)
            el.innerText=end
        }
        else{
            el.innerText= Math.round(from)
        }
    },1)
}

counterUp(face, 3300)
counterUp(youtube, 1000)
counterUp(tiktok, 9900)