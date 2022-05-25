const on = document.getElementById('on')
const off = document.getElementById('off')
const lampadada = document.getElementById('lampada')

function lampadaOn () {
  lampada.src = "./Imagens/lampada-on.gif"
}

function lampadaOff () {
  lampada.src = "./Imagens/lampada-off.gif"
}

on.addEventListener('click', lampadaOn)
off.addEventListener('click', lampadaOff)
