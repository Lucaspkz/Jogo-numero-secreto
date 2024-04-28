let listaNumeroAleatorio = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto!");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10!");
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;

    if (chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("h1", "Parabéns!");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroAleatorio){
        exibirTextoNaTela("p", `Errou! O número secreto é menor que ${chute}.`);
        } else {
        exibirTextoNaTela("p", `Errou! o número secreto é maior que ${chute}.`);
        }
        tentativas++;
        limpaCampo();
    }
   
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosDaLista = listaNumeroAleatorio.length;

    if(quantidadeElementosDaLista == numeroLimite){
        listaNumeroAleatorio = [];
    }

    if(listaNumeroAleatorio.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroAleatorio.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limpaCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}