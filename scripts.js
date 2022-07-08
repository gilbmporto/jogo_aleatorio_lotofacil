/* Place your JavaScript in this file */
var arrayDeComparacao = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var i = 10;
var x;
var numAleat;
var numAleatString;
var numResetString;
var numTesteString;
var jogoGerado = false;

const gerarJogoAleatorio = function(){
    while (i > 0) {
    numAleat = Math.floor(Math.random() * 26);
    if (numAleat === arrayDeComparacao[numAleat - 1]) {
        arrayDeComparacao[numAleat - 1] = '';
        numAleatString = numAleat.toString();
        document.getElementById(numAleatString).innerHTML = arrayDeComparacao[numAleat - 1];
        i--;
        }
        
    }
    
};

const Resetar = () => {
    for (let j = 1; j < 26; j++) {
        numResetString = j.toString();
        if (j < 10) {
            document.getElementById(numResetString).innerHTML = '0' + numResetString;
        } else {
            document.getElementById(numResetString).innerHTML = numResetString;
        }
    }
}

const BotaoJogoAleat = document.getElementById('botaoRandom');
const BotaoResetar = document.getElementById('botaoReset');

BotaoJogoAleat.onclick = () => {
    if (jogoGerado === false) {
        
        jogoGerado = true;
        gerarJogoAleatorio();
    } else {
        window.alert('Você já gerou um jogo! Clique em resetar para gerar um novo jogo!')
    };
};

BotaoResetar.onclick = () => {
    if (jogoGerado === true) {
        Resetar();
        jogoGerado = false;
        i = 10;
    } else {
        window.alert('Você precisa apertar em "Gerar Jogo Aleatório" antes de resetar!')
    };
};