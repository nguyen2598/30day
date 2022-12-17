let color = document.querySelector('#color')
let eraser = document.querySelector('#eraser')
let decrease = document.querySelector('#decrease')
let increase = document.querySelector('#increase')
let save = document.querySelector('#save')
let clear = document.querySelector('#clear')
let sizeEl = document.querySelector('#size')

let canvas = document.querySelector('canvas')
let ctx= canvas.getContext('2d')

// kiem tra xem co dang an chuot ko
let isDrawing = false

// color
let colorPaint="#000"

// kich co nét vẽ + tẩy
let size=5

// init size
sizeEl.innerText=size

let pos1={
    x:0,
    y:0
}

let pos2={
    x:0,
    y:0
}

// check thiết bị
var result = navigator.userAgent.toLowerCase();
console.log(result)
var isphone = result.indexOf("phone") > -1;
var islumia = result.indexOf("windows") > -1;
document.writeln(result);
if(isphone)
{
    document.writeln('bạn đang truy cập web bằng điện thoại');
}
if(islumia){
    document.writeln('bạn đang truy cập web bằng điện thoại windows');
}

document.addEventListener('mousedown',e=>{
    pos1={
        x:e.offsetX,
        y:e.offsetY
    }
    isDrawing=true
})
canvas.addEventListener('mousemove',e=>{
   if(isDrawing){
        pos2={
            x:e.offsetX,
            y:e.offsetY
        }

        ctx.beginPath();
        // Net vẽ tròn fill net ve
        ctx.arc(pos1.x, pos1.y, size/2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle=colorPaint

        // Net ve outline
        ctx.beginPath();
        ctx.strokeStyle=colorPaint
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.lineWidth=size
        ctx.stroke();

        pos1={
            x:pos2.x,
            y:pos2.y
        }
   }
})
document.addEventListener('mouseup',e=>{
    isDrawing=false
})

color.addEventListener('change',e=>{
    colorPaint=e.target.value
})

eraser.addEventListener('click',e=>{
    colorPaint="#fff"
})

decrease.addEventListener('click',e=>{
    size=size > 1 ? --size : size = 1
    sizeEl.innerText=size
})

increase.addEventListener('click',e=>{
    size=size < 30 ? ++size : size = 30
    sizeEl.innerText=size
})

clear.addEventListener('click',e=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

save.addEventListener('click',e=>{
    let output =canvas.toDataURL("image/png").replace("image/png", "image/octet-stream") 
    // canvas.toDataURL()
    console.log(output)
    save.setAttribute('href',output)
    save.click();
})