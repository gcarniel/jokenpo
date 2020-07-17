var jogadorNome;
var computadorEscolha = 0;
var computadorPontos = 0;

var jogadorEscolha = 0;
var jogadorPontos = 0;

var explicacaoResultado;

jogadorNome = prompt("Qual o seu nome?");

document.getElementById('jogador-nome').innerHTML = jogadorNome;
document.getElementById('mensagem').innerHTML = 'Olá, ' + jogadorNome + ', seja bem vindo. Escolha uma opção.';

document.getElementById('jogador-escolha-1').onclick = function() { jogar(1) };
document.getElementById('jogador-escolha-2').onclick = function() { jogar(2) };
document.getElementById('jogador-escolha-3').onclick = function() { jogar(3) };




// 1-pedra 2-papel 3-tesoura

function jogar(opcao) {
    jogadorEscolha = opcao;
    selecionar('jogador', opcao);

    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
    var resultado;

    if (ganhador == 0) {
        resultado = 'Empatou!';
    }
    else if (ganhador == 1) {
        resultado = jogadorNome + ' ganhou!';
        somarPontosJogador();
        mostrarExplicacao(explicacaoResultado);
    }
    else if (ganhador == 2) {
        resultado = 'Computador ganhou!';
        somarPontosComputador();
        mostrarExplicacao(explicacaoResultado);
    }

    document.getElementById('mensagem').innerHTML = resultado;

    setTimeout(function () {
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);
        document.getElementById('mensagem').innerHTML = jogadorNome + ', escolha uma opção.';
        // document.getElementById('explicacao').innerHTML = '';
    }, 1000);
}


function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
0-empate
1-jogador
2-computador
*/
// 1-pedra 2-papel 3-tesoura
function calcularEscolha(jogador, computador) {
    if(jogador == 1 && computador == 1) {
        return 0;
    }
    else if (jogador == 1 && computador == 2) {
        explicacaoResultado = 'Papel embrula pedra!';
        return 2;
    }
    else if (jogador == 1 && computador == 3) {
        explicacaoResultado = 'Pedra quebra tesoura!';
        return 1;
    }

    else if (jogador == 2 && computador == 1) {
        explicacaoResultado = 'Papel embrula pedra!';
        return 1;
    }
    else if (jogador == 2 && computador == 2) {
        return 0;
    }
    else if (jogador == 2 && computador == 3) {
        explicacaoResultado = 'Tesoura corta papel!';
        return 2;
    }

    else if (jogador == 3 && computador == 1) {
        explicacaoResultado = 'Pedra quebra tesoura!';
        return 2;
    }
    else if (jogador == 3 && computador == 2) {
        explicacaoResultado = 'Tesoura corta papel!';
        return 1;
    }
    else if (jogador == 3 && computador == 3) {
        return 0;
    }
}

function mostrarExplicacao(mensagem) {
    document.getElementById('explicacao').innerHTML = mensagem;
}

function somarPontosJogador() {
    jogadorPontos ++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

function somarPontosComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}