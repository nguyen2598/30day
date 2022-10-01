const $= document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);

let btnShow = $$('.control button')

btnShow.forEach(btn=>{
    btn.addEventListener('click',e=>{
        createToast(e.target.getAttribute("class"));
    })
})

const message = {
    success: {
      icon: '<i class="fas fa-check-circle"></i>',
      msg: "This is a success message !"
    },
    error: {
      icon: '<i class="fas fa-exclamation-triangle"></i>',
      msg: "This is a error message !"
    },
    warning: {
      icon: '<i class="fas fa-exclamation-circle"></i>',
      msg: "This is a warning message !"
    }
};


function createToast(e){
    let toast = document.createElement("div")
    toast.className=`toasts ${e}`
    toast.innerHTML=`
        ${message[e].icon}
        <span class="msg">${message[e].msg}</span>
        <span class="countdown"></span>
    `

    document.querySelector("#toasts").appendChild(toast);
    setTimeout(()=>{
        toast.style.animation = "hide 1s ease forwards";
        toast.remove();
    },4000)
    // setTimeout(() => {
        
    // }, 6000);
}