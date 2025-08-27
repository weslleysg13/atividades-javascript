function parImpar(numero) {
    if (numero % 2 == 0){ // Dividindo o número recebido por 2 e verificando se o resto é 0, não sendo, ele será um número ímpar e sendo 0 será um número par;
        console.log('O número', numero, 'é Par!')
    } else {
        console.log('O número', numero, 'é Ímpar!')
    }
}

function fatorial(numero) {
  let chamadadaFuncao = numero; // Variável para que seja possível ser mencionada no print
  // Passo 1. Criar uma variável resultado para armazenar o valor do numero
  let resultado = numero;
   
  // Se numero = 0 OU numero = 1, o fatorial retornará 1, pois é o único resultado possível para estes números
  if (numero === 0 || numero === 1){
    return 1;
  }  
 
  // Passo 2. Criando o laço de repetição
  while (numero > 1) { // Enquanto numero for maior que 1, o laço continua funcionando
    numero--; // diminuir 1 de numero a cada iteração
    resultado *= numero; // ou resultado = resultado * numero; 
  }
     
  // Passo 3. Retornar o resultado do cálculo fatorial do número passado
  return console.log("O fatorial do número", chamadadaFuncao, "é:", resultado);
}

function maiorNumero(listadeNumeros){
    let maior = listadeNumeros[0]; // Variável maior sendo inicializada com o primeiro número do array
    for (posicao = 1; posicao < listadeNumeros.length; posicao++){ // For inicializado na posicao 1 pois o número da posição 0 já está armazenado como maior
        if (listadeNumeros[posicao] > maior) { // se o número na posição atual do array for maior do que o anterio registrado, ele se torna o maior
            maior = listadeNumeros[posicao];
        }
    }

    return console.log("O maior número do array é o", maior);
}

parImpar(6);
parImpar(3);

fatorial(5);

const array = [1,3,2,5,8];
maiorNumero(array);