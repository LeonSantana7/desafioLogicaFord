// Função para mostrar na tela
function mostrarNaTela(texto) {
    document.write(texto + "<br><br>");
}

// Função para validar entradas
function validarEntrada(mensagem, tipo = 'float') {
    let entradaValida = false;
    let valor;

    while (!entradaValida) {
        let entrada = prompt(mensagem);
        if (tipo === 'int') {
            valor = parseInt(entrada);
        } else {
            valor = parseFloat(entrada);
        }

        if (isNaN(valor) || valor <= 0) {
            alert("Você não digitou um número válido! Por favor, insira um número positivo.");
        } else {
            entradaValida = true;
        }
    }
    return valor;
}

// Solicita a distância percorrida
let distanciaPercorrida = validarEntrada('Qual a distância percorrida da sua casa até seu trabalho? (Em km)');

// Solicita o consumo médio do veículo
let consumoMedio = validarEntrada("Qual o consumo médio do seu veículo? (em km/L)");

let consumoNecessarioLitros = distanciaPercorrida / consumoMedio;
mostrarNaTela(`O consumo necessário é ${consumoNecessarioLitros.toFixed(2)} litros`);

let quantidadePostos = validarEntrada("Em quantos postos você pesquisou?", 'int');

let valoresPesquisados;
let contador = 1;
let valorMenor = Infinity;
let somaTotal = 0;

while (contador <= quantidadePostos) {
    valoresPesquisados = validarEntrada(`Digite o valor encontrado (em R$) no posto ${contador}`);
    somaTotal += valoresPesquisados;

    if (valoresPesquisados < valorMenor) {
        valorMenor = valoresPesquisados;
    }
    contador++;
}

mostrarNaTela(`O menor valor pesquisado é R$ ${valorMenor.toFixed(2)}`);

let media = somaTotal / quantidadePostos;
mostrarNaTela(`A média dos valores pesquisados é R$ ${media.toFixed(2)}`);

let gastoDiario = 2 * (consumoNecessarioLitros * valorMenor);
mostrarNaTela(`O gasto diário (ida e volta) é R$ ${gastoDiario.toFixed(2)}`);