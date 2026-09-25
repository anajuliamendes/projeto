let nome = prompt("Digite o seu nome:").trim();
  let primeiraLetra = nome.charAt(0);
  let ultimaLetra = nome.charAt(nome.length - 1);
  document.writeln("A primeira letra é " + primeiraLetra + " e a última é " + ultimaLetra + ".");