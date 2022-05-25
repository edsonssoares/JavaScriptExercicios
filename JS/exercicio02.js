// Questão 01


const numeros = parseFloat(prompt('Quantos Números Você vai Digitar? '))
const calculo = []
const potencia = []

for (let i = 0; i < numeros; i++) {
  let num = parseFloat(prompt('Digite um Número: '))
  calculo.push(num)

}

let soma = 0

for (let calc of calculo) {
    soma += calc
}
const media = soma / calculo.length

const pot = Math.pow(soma, 2)
const raizQuadrada = Math.sqrt(soma)
const raizCubica = Math.pow(soma, 1/3) 

alert(`Sua Soma é ${soma.toFixed(2)}`) 
alert(`Sua Média é ${media.toFixed(2)}`) 
alert(`Sua Potência é ${pot.toFixed(2)}`) 
alert(`Sua Raiz Quadrada é ${raizQuadrada.toFixed(2)}`) 
alert(`Sua Raiz Cúbica é ${raizCubica.toFixed(2)}`) 


// Questão 02

/* let string = prompt('Escreva alguma palavra: ')

alert(`A sua Palavra em letras minúsculas: ${string.toLowerCase()}`)
alert(`A sua Palavra em LETRAS MAIÚSCULAS: ${string.toUpperCase()}`)
alert(`Separando a sua Palavra: ${string.split("")}`)
 */

