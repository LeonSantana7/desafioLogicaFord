// Função para mostar na texto tela 
function mostrarNaTela (texto) {
    document.write(texto + "<br> <br> " );
}

// Deve ser solicitado ao usuário a distância percorrida de sua casa até seu trabalho (em km). 

let distanciaPercorrida = parseFloat(prompt('Qual a distância percorrida da sua casa até seu trabalho? (Em km)'));
console.log(`Distância percorrida ${distanciaPercorrida} km`);

// Deve ser solicitado ao usuário o consumo médio do veículo (em Km/L).
let consumoMedio = parseFloat(prompt("Qual o consumo médio do seu veículo? (em km/L)?"));
console.log(`Consumo medio ${consumoMedio} km/L`);

let consumoNecessarioLitros = distanciaPercorrida / consumoMedio;

mostrarNaTela(`O consumo necessário é ${consumoNecessarioLitros} litros`);

// Deve ser solicitada ao usuário a quantidade de postos de combustíveis pesquisados e seus respetivos valores.

let quantidadePostos = parseInt(prompt("Em quantos postos você pesquisou?"));
console.log(`Quantidade de postos: ${quantidadePostos}`);

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

mostrarNaTela(`O menor valor pesquisado é R$ ${valorMenor}`)

let media = parseFloat(somaTotal / quantidadePostos);

mostrarNaTela(`A média dos valores pesquisados é R$ ${media}`);

let gastoDiario = parseFloat(2 * (consumoNecessarioLitros * valorMenor));

mostrarNaTela(`O gasto diário (ida e volta) é R$ ${gastoDiario}`);


