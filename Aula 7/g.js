let valorCompra = Number(prompt("Digite o valor da compra (em R$):"));
  let valorPago = Number(prompt("Digite o valor pago (em R$):"));
  let troco = valorPago - valorCompra;
  let notas10 = Math.floor(troco / 10);
  let reaisSobram = troco % 10
  let textoNota = notas10 === 1 ? "nota" : "notas";
  document.writeln("Troco de " + troco + " reais: " + notas10 + " " + textoNota + " de 10 e sobram " + reaisSobram + " reais.");