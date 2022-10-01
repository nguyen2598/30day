const $= document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

let username = $('#username')
let email = $('#email')
let password = $('#password')
let confirmPassword = $('#confirm-password')
let form = $('form')

function showError(input,message) {
    // input.value = input.value.trim()
    let parent =input.parentElement
    console.log(parent)
    let small=parent.querySelector('small')
    parent.classList.add('error')
    small.innerHTML =message||'lỗi rồi'
}

function showSuccess(input) {
    // input.value = input.value.trim()
    let parent =input.parentElement
    console.log(parent)
    let small=parent.querySelector('small')
    parent.classList.remove('error')
   
}


function checkEmptyError(listInput){
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim()


        if(!input.value){
            isEmptyError=true
            showError(input,'khong duoc de trong')
        }
        else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkEmailError(input){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    input.value = input.value.trim()
    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input)){
        showSuccess(input)
    }
    else{
        showError(input,'Email Invalid')
    }
    return isEmailError
}


function checkLengthError(input,min,max){
    input.value = input.value.trim()


    if(input.value.length<min){
        showError(input,`Phai co it nhat ${min} ki tu`)
        return true
    }

    if(input.value.length>max){
        showError(input,`khong duoc qua ${max} ki tu`)
        return true
    }
    return false
}


function checkMatchPasswordError(passwordInput,cfPasswordInput){
    if(passwordInput.value!==cfPasswordInput.value){
        showError(cfPasswordInput,'MK ko trùng khớp')
        return true
    }
    else return false
}

form.addEventListener('submit',function(e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([username,email,password,confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUserNameLengthError = checkLengthError(username,3,15)
    let isPasswordLengthError = checkLengthError(password,6,12)
    let isMatchError = checkMatchPasswordError(password,confirmPassword)
    if(isEmptyError || isEmailError || isUserNameLengthError || isPasswordLengthError || isMatchError){
        // ko lam gi ca
    }
    else {
        // Logic, Call API,....
    }
})