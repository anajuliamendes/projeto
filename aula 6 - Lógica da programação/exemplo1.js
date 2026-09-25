// saída de dados
document.writeln("<h1>Exemplos</h1>")
let nome = "Raul"
let sobrenome = "Mendes"
let nota = 8.5
document.writeln(`<p>Olá meu nome é ${nome} e meu sobrenome é ${sobrenome} </p>`)
document.writeln(`<p>Eu obtive a nota ${nota.toFixed(2)} na prova </p>`)

// saída de dados com console.log (aparece no console do navegador (F12))
console.log(nome.charAt(0)) // primeira letra do nome
console.log(nome.at(-1)) // última letra do nome
console.log(nome.toUpperCase()) // letras maiúsculas
console.log(nome.toLowerCase()) // letras minúsculas
console.log(nome.includes("a")) // meu nome possui a letra?
console.log(nome.repeat(5)) // repetir a string
console.log("*".repeat(25))
console.log(sobrenome.length) // quantas letras tem uma string?

// operadores aritméticos
console.log(1 + 2) // adição
console.log(3 - 4) // subtração
console.log(5 * 6) // multiplicação
console.log(7 / 8) // divisão
console.log(4 % 2) // resto da divisão
console.log(2 ** 8) // exponenciação
console.log(Math.pow(7, 2)) // exponenciação II
console.log(Math.sqrt(144)) // raiz quadrada
console.log(144 ** (1 / 2)) // raiz quadrada II (é só elevar a 0.5)
console.log(27 ** (1 / 3)) // raiz cúbica
console.log(Math.round(1.4)) // arredondamento
console.log(Math.ceil(1.1)) // teto
console.log(Math.floor(1.9)) // piso