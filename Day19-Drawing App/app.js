let color = document.querySelector('#color')
let eraser = document.querySelector('#eraser')
let decrease = document.querySelector('#decrease')
let increase = document.querySelector('#increase')
let save = document.querySelector('#save')
let clear = document.querySelector('#clear')
let sizeEl = document.querySelector('#size')
let text = document.querySelector('.text')
let canvas = document.querySelector('canvas')
let pen= document.querySelector('#pen')
let ctx= canvas.getContext('2d')

// kiem tra xem co dang an chuot ko
let isDrawing = false

// color
let colorPaint="#000"

// kich co nét vẽ + tẩy
let size=5

// init size
sizeEl.innerText=size

// prev colorPaint
let prevColor='#000';
let pos1={
    x:0,
    y:0
}

let pos2={
    x:0,
    y:0
}

var result = navigator.userAgent.toLowerCase();
// console.log(result)
var isphone = result.indexOf("mobile") > -1;
var isLap = result.indexOf("windows") > -1;
// document.writeln(result);

if(isphone){
    text.innerText="Bạn đang truy cập từ điện thoại"
    // canvas.style.width=300+'px'
    // canvas.style.height=400+'px'
    canvas.setAttribute('width','300px')
    canvas.setAttribute('height','400px')
    canvas.addEventListener('touchstart',function(e){
        pos1={
            x:e.touches[0].clientX - this.offsetLeft,
            y:e.touches[0].clientY - this.offsetTop
        }
        
        console.log(this.offsetLeft,this.offsetTop);
        console.log(e.touches[0].clientY - this.offsetTop);
        isDrawing=true
    })
    canvas.addEventListener('touchmove',function(e){
       if(isDrawing){
            pos2={
                x:e.touches[0].clientX - this.offsetLeft,
                y:e.touches[0].clientY - this.offsetTop
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
       console.log("b")
    })
    document.addEventListener('touchend',e=>{
        isDrawing=false
        console.log("c")
    })
}
if(isLap){
    text.innerText="Bạn đang truy cập từ máy tính"
    document.addEventListener('mousedown',e=>{
        pos1={
            x:e.offsetX,
            y:e.offsetY
        }
        console.log(e)
        isDrawing=true
    })
    for(let i=0;i<canvas.height;i+=30){
            ctx.beginPath();
            ctx.strokeStyle="#fff"
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.lineWidth=30
            ctx.stroke();
    }
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
}

color.addEventListener('change',e=>{
    colorPaint=e.target.value
    prevColor=colorPaint
})

eraser.addEventListener('click',e=>{
    colorPaint="#fff"
})

pen.addEventListener('click',e=>{
    colorPaint=prevColor
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

    for(let i=0;i<canvas.height;i+=30){
        ctx.beginPath();
        ctx.strokeStyle="#fff"
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.lineWidth=30
        ctx.stroke();
    }
})

save.addEventListener('click',e=>{
    let output =canvas.toDataURL("image/png").replace("image/png", "image/octet-stream") 
    // canvas.toDataURL()
    console.log(output)
    save.setAttribute('href',output)
    save.click();
})