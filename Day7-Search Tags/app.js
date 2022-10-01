const $= document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

let content = $('.content');
let input = $('.content input');
let removeAllTag=$('.remove-all')


var tags=['JavaScript','NodeJS']

function render(){
    content.innerHTML='';
    for(let i =0; i<tags.length;i++){
        const tag =tags[i];
        content.innerHTML+=`
                <li>
                    ${tag}
                    <i class='bx bx-x' onclick='removeTag(${i})'></i>
                </li>
        `
    }
    content.appendChild(input)
    input.focus()
}



render()

input.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
        if(input.value.trim()!=''){
            tags.push(input.value.trim())
            input.value=''
            render()
        }
    }
})


function removeTag(index){
    tags.splice(index, 1)
    render()
}

removeAllTag.addEventListener('click',function(){
    tags=[];
    render()
})

