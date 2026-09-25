let nota1 = parseFloat(prompt("Digite a primeira nota (peso 2):"))
let nota2 = parseFloat(prompt("Digite a segunda nota (peso 3):"))
let nota3 = parseFloat(prompt("Digite a terceira nota (peso 5):"))
let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5)/10
console.log("A média final do aluno é: " + mediaFinal.toFixed(2))
alert("A média final do aluno é: " + mediaFinal.toFixed(2))