var fields = document.querySelectorAll('.textb input')
var btn = document.querySelector('.btn')
var btnShowPassword = document.querySelector('.show-password')

const check = () => {
  if (fields[0].value != '' && fields[1].value != ''){
    btn.disabled = false
  } else{
    btn.disabled = true
  }
}

fields[0].addEventListener('keyup', check)
fields[1].addEventListener('keyup', check)

btnShowPassword.addEventListener('click', () => {
  if (btnShowPassword.classList[2] == 'fa-eye-slash'){
    btnShowPassword.classList.remove('fa-eye-slash')
    btnShowPassword.classList.add('fa-eye')
    fields[1].type = 'text'
  } else{
    btnShowPassword.classList.remove('fa-eye')
    btnShowPassword.classList.add('fa-eye-slash')
    fields[1].type = 'password'
  }
})