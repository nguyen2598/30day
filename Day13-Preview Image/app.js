const $= document.querySelector.bind(document)

let upload = $('#mypicture')
let preview = $('.preview')
let error = $('.error')

upload.addEventListener('change',e=>{
    let file = upload.files[0]
    if(!file) return

    if(!file.name.endsWith('.jpg')){
        error.innerText='hinh anh phai co duoi jpeg'        
        return
    }
    else{
        error.innerText=''        
    }

    if(file.size/(1024*1024) > 5){
        error.innerText='hinh anh chi duoc upload  < 5MB'        
        return
    }
    else{
        error.innerText=''        
    }

    var img = document.createElement('img')
    img.src = URL.createObjectURL(file)


    preview.appendChild(img)

})