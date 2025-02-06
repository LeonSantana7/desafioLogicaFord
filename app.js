// Função para mostar na texto tela 
function mostrarNaTela (texto) {
    document.write(texto + "<br> <br> " );
}

// Deve ser solicitado ao usuário a distância percorrida de sua casa até seu trabalho (em km). 
let distanciaPercorrida;
let entradaValida = false;

while (!entradaValida) {
    let entrada = prompt('Qual a distância percorrida da sua casa até seu trabalho? (Em km)');
    distanciaPercorrida = parseFloat(entrada);

    if (isNaN(distanciaPercorrida) || distanciaPercorrida <= 0) {
        alert("Você não digitou um número válido! Por favor, insira um número positivo.");
    } else {
        entradaValida = true; 
    }
}

alert(`A distância percorrida é ${distanciaPercorrida.toFixed(2)} km.`);


let consumoMedio;
entradaValida = false; 

while (!entradaValida) {
    let entrada = prompt("Qual o consumo médio do seu veículo? (em km/L)");
    consumoMedio = parseFloat(entrada);

    if (isNaN(consumoMedio) || consumoMedio <= 0) {
        alert("Você não digitou um número válido! Por favor, insira um número positivo.");
    } else {
        entradaValida = true; 
    }
}
console.log(`Consumo médio: ${consumoMedio} km/L`);

let consumoNecessarioLitros = distanciaPercorrida / consumoMedio;

console.log(`Consumo necessário: ${consumoNecessarioLitros} litros`);
mostrarNaTela(`O consumo necessário é ${consumoNecessarioLitros.toFixed(2)} litros`);

// Deve ser solicitada ao usuário a quantidade de postos de combustíveis pesquisados e seus respetivos valores.
let quantidadePostos;
entradaValida = false; 

while (!entradaValida) {
    let entrada = prompt("Em quantos postos você pesquisou?");
    quantidadePostos = parseInt(entrada);

    if (isNaN(quantidadePostos) || quantidadePostos <= 0) {
        alert("Você não digitou um número válido! Por favor, insira um número positivo.");
    } else {
        entradaValida = true; 
    }
}

let valoresPesquisados;
let contador = 1;
let valorMenor = Infinity;
let somaTotal = 0;

while (contador <= quantidadePostos) {
    valoresPesquisados = parseFloat(prompt(`Digite o valor encontrado (em R$) no posto ${contador}`));
    somaTotal = somaTotal + valoresPesquisados;
    console.log(`Os valores pesquisados são: ${valoresPesquisados}`);
    if(valoresPesquisados < valorMenor){
        valorMenor = valoresPesquisados;
    }
    contador ++;
}
console.log(`Soma total: ${somaTotal}`);
console.log(`O menor valor é ${valorMenor}`);

mostrarNaTela(`O menor valor pesquisado é R$ ${valorMenor.toFixed(2)}`)

let media = parseFloat(somaTotal / quantidadePostos);

mostrarNaTela(`A média dos valores pesquisados é R$ ${media.toFixed(2)}`);

let gastoDiario = parseFloat(2 * (consumoNecessarioLitros * valorMenor));

mostrarNaTela(`O gasto diário (ida e volta) é R$ ${gastoDiario.toFixed(2)}`);


