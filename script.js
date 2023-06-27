let li = document.querySelectorAll('#card-front li')
let rate =''

function removeActiveClass() {
  li.forEach(function (elemento) {
    elemento.classList.remove('ativo')
  })
}

// elemento é o nome que dei para as tags li
li.forEach(function (elemento) {
  elemento.addEventListener('click', function (event) {
    // aqui chamo a função
    removeActiveClass()
    event.target.classList.add('ativo')
    // aqui estou salvando o texto selecionado ao clicar na opção somente no JS, não aparece na tela
    rate=event.target.textContent

  })
})

function submitRate() {
  let front= document.getElementById('card-front')
  let back= document.getElementById('card-back')
  let res= document.getElementById('rate')

  if(rate=='') {
   alert('[ERROR] Select one number to submit')
    return
  }
  front.classList.toggle('hide')
  back.classList.toggle('hide')
  // aqui o testto salvo aparece na tela
  res.innerHTML= rate
}