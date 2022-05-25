// 1ª Questão
let l1 = parseFloat(prompt('Informe o 1º lado: '));
let l2 = parseFloat(prompt('Informe o 2º lado: '));
let l3 = parseFloat(prompt('Informe o 3º lado: '));

if (l1 === l2 && l2 === l3) {
  alert('O Triângulo é Equilátero')
} else if (l1 === l2 || l1 === l3 || l2 === l3) {
  alert('O Triângulo é Isósceles')
} else {
  alert('O Triângulo é Escaleno')
}  



//2º Questão
/* let num1 = parseFloat(prompt('Digite o 1º número: '))
let num2 = parseFloat(prompt('Digite o 2º número: '))
let num3 = parseFloat(prompt('Digite o 3º número: '))

if (num1 > num2 && num1 > num3) {
    alert(`O maior número digitado foi: ${num1}`)
} else if (num2 > num3) {
    alert(`O maior número digitado foi: ${num2}`)
} else {
    alert(`O maior número digitado foi: ${num3}`)
} 

 */


//3º Questão
/* var num1 = parseFloat(prompt('Digite o 1º número: '))
var num2 = parseFloat(prompt('Digite o 2º número: '))

var inv = num1 
num1 = num2
num2 = inv  

alert(`O 1º número agora é: ${num1} e o 2º número agora é: ${num2}`)

 */