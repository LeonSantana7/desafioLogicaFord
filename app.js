// Função para exibir a mensagem na tela
function mostrarTela(tag, texto) {
    let elemento = document.querySelector(tag);
    if (elemento) {
        elemento.innerHTML = texto;
    }
}

// Função para validar entradas
function validarEntrada(tipo = 'float') {
    let entradaValida = false;
    let valor;

    while (!entradaValida) {
        let entrada = document.getElementById("inputValor").value;
        if (tipo === 'int') {
            valor = parseInt(entrada);
        } else {
            valor = parseFloat(entrada);
        }

        // Verifica se a entrada é um número válido e maior que zero
        if (isNaN(valor) || valor <= 0) {
            mostrarTela("#mensagem", "Você não digitou um número válido! Por favor, insira um número positivo.");
            return null;
        }
        entradaValida = true; // Se o valor for válido, sai do loop
    }
    return valor;
}

let distancia, consumo, consumoLitros, postos, valorMenor = Infinity, somaTotal = 0, med, gastos;

// Função para limpar a caixa de entrada
function limparEntrada() {
    document.getElementById("inputValor").value = "";
}

// Solicita a distância percorrida
function distanciaPercorrida() {
    mostrarTela('#mensagem', 'Qual a distância percorrida da sua casa até seu trabalho? (Em km)');

    let input = document.getElementById('inputValor');
    let botaoConfirmar = document.getElementById('confirmar');

    input.style.display = 'block';
    botaoConfirmar.style.display = 'block';

    botaoConfirmar.onclick = function () {
        distancia = validarEntrada();
        if (distancia !== null) {
            mostrarTela("#mensagem", `Você informou: ${distancia} km`);
            input.style.display = 'none';
            botaoConfirmar.style.display = 'none';
            limparEntrada(); // Limpa a caixa de entrada
            consumoMedio(); // Chama a próxima função
        }
    };
}

// Solicita o consumo médio do veículo
function consumoMedio() {
    mostrarTela("#mensagem", "Qual o consumo médio do seu veículo? (em km/L)");
    let input = document.getElementById('inputValor');
    let botaoConfirmar = document.getElementById('confirmar');

    input.style.display = 'block';
    botaoConfirmar.style.display = 'block';

    botaoConfirmar.onclick = function () {
        consumo = validarEntrada();
        if (consumo !== null) {
            mostrarTela("#mensagem", `Você informou: ${consumo} km/L`);
            input.style.display = 'none';
            botaoConfirmar.style.display = 'none';
            limparEntrada(); // Limpa a caixa de entrada
            consumoNecessario(); // Chama a próxima função
        }
    };
}

// Calcula o consumo necessário de combustível
function consumoNecessario() {
    consumoLitros = distancia / consumo;
    mostrarTela("#mensagem", `Você precisará de ${consumoLitros.toFixed(2)} litros de combustível para o trajeto.`);
    quantidadePostos(); // Chama a próxima função
}

// Solicita a quantidade de postos pesquisados
function quantidadePostos() {
    mostrarTela("#mensagem", "Em quantos postos você pesquisou?");
    let input = document.getElementById('inputValor');
    let botaoConfirmar = document.getElementById('confirmar');

    input.style.display = 'block';
    botaoConfirmar.style.display = 'block';

    botaoConfirmar.onclick = function () {
        postos = validarEntrada('int');
        if (postos !== null) {
            mostrarTela("#mensagem", `Você pesquisou em ${postos} postos.`);
            input.style.display = 'none';
            botaoConfirmar.style.display = 'none';
            limparEntrada(); // Limpa a caixa de entrada
            valores(); // Chama a próxima função
        }
    };
}

// Solicita os valores de combustível em cada posto
function valores() {
    let contador = 1;
    somaTotal = 0;
    valorMenor = Infinity;

    let input = document.getElementById('inputValor');
    let botaoConfirmar = document.getElementById('confirmar');

    function pedirValorPosto() {
        if (contador <= postos) {
            mostrarTela("#mensagem", `Digite o valor encontrado (em R$) no posto ${contador}`);
            input.style.display = 'block';
            botaoConfirmar.style.display = 'block';

            botaoConfirmar.onclick = function () {
                let valorPosto = validarEntrada();
                if (valorPosto !== null) {
                    somaTotal += valorPosto;
                    if (valorPosto < valorMenor) {
                        valorMenor = valorPosto;
                    }
                    contador++;
                    if (contador > postos) {
                        input.style.display = 'none';
                        botaoConfirmar.style.display = 'none';
                        limparEntrada(); // Limpa a caixa de entrada
                        media(); // Chama a próxima função
                    } else {
                        limparEntrada(); // Limpa a caixa de entrada
                        pedirValorPosto(); // Pede o próximo valor
                    }
                }
            };
        }
    }
    pedirValorPosto(); // Inicia a solicitação dos preços
}

// Calcula a média de preços dos postos
function media() {
    med = somaTotal / postos;
    mostrarTela("#mensagem", `A média dos preços encontrados é R$ ${med.toFixed(2)}`);
    gastoDiario(); // Chama a próxima função
}

// Calcula o gasto diário baseado no menor preço
function gastoDiario() {
    gastos = 2 * (consumoLitros * valorMenor);
    mostrarTela("#mensagem",
        `Consumo necessário: ${consumoLitros.toFixed(2)} litros<br>
        Menor valor encontrado: R$ ${valorMenor.toFixed(2)}<br>
        Média dos preços: R$ ${med.toFixed(2)}<br>
        Gasto diário estimado: R$ ${gastos.toFixed(2)}`
    );
}