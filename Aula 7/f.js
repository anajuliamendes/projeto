let totalSegundos = Number(prompt("Digite a quantidade de segundos:"));
  let minutos = Math.floor(totalSegundos / 60);
  let segundosRestantes = totalSegundos % 60;
  document.writeln(minutos + " minutos e " + segundosRestantes + " segundos.");