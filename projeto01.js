/*
PROJETO 01 - A JORNADA DO HERÓI
Aluno: Deyvet Walef dos Santos Martins
Turma: C016-M01-LAP
Versão do Programa: Final
*/
const prompt = require("prompt-sync")();

//DECLARAÇÃO DE ARRAY PARA OTIMIZAR E EVITAR GERAÇÃO DE MUITAS VARIÁVEIS:
let respostas = [];
let fim = "nao";
let contadorRepostas = 0;

//BACKGROUND DA HISTÓRIA:
console.log(
  "Você é o Cristiano Ronaldo, a besta enjaulada, e está disputando a Champions League pelo Real Madrid.\nHoje os galáticos enfrentarão o poderoso Liverpool de Salah na final dessa competição!\n"
);

//ESTRUTURA DE REPETIÇÃO WHILE PARA ENCERRAR O JOGO APENAS QUANDO CR7 QUISER:
while (fim == "nao") {
  //ESTRUTURA CONDICIONAL PARA ARMAZENAR E CONTAR AS REPOSTAS DO PAPAI CRIS:
  respostas[0] = prompt(
    "Você lembrou de ingerir bastante água durante o dia? "
  );
  if (respostas[0] == "SIM" || respostas[0] == "sim") {
    contadorRepostas++;
  }

  respostas[1] = prompt(
    "Você lembrou de treinar finalizações ontem durante o dia? "
  );
  if (respostas[1] == "SIM" || respostas[1] == "sim") {
    contadorRepostas++;
  }

  respostas[2] = prompt(
    "Você seguiu todas as recomendações do Técnico Carlo Ancelotti? "
  );
  if (respostas[2] == "SIM" || respostas[2] == "sim") {
    contadorRepostas++;
  }

  respostas[3] = prompt(
    "Você teve uma ótima noite de sono na noite anterior? "
  );
  if (respostas[3] == "SIM" || respostas[3] == "sim") {
    contadorRepostas++;
  }
  respostas[4] = prompt(
    "Você se olhou no espelho e falou que estava lindo hoje, o milior? "
  );
  if (respostas[4] == "SIM" || respostas[4] == "sim") {
    contadorRepostas++;
  }

  //MOSTRANDO O RESULTADO:
  if (contadorRepostas == 0) {
    console.log(
      "O Real Madrid é eliminado da Champions League e sua atuação é tão pífia que chega a ser substituído logo no primeiro tempo.\n"
    );
  } else if (contadorRepostas == 1 || contadorRepostas == 2) {
    console.log(
      "Você joga o básico e não se destaca, o Liverpool ganha o jogo por 2x0.\n"
    );
  } else if (contadorRepostas == 3) {
    console.log(
      "\nVocê chega a marcar um gol de pênalti, mas o Real Madrid perde por pouco.\n"
    );
  } else if (contadorRepostas == 4) {
    console.log(
      "\nVocê marca um golaço de falta, mas mesmo assim o Real Madrid vai para a prorrogação e vocês se classificam apenas nos pênaltis.\n"
    );
  } else if (contadorRepostas == 5) {
    console.log(
      "\nVocê marca um hat-trick e o Real goleia o Liverpool. André Heinning grita na narração 'ELE É UM MONSTROO, UMA BESTA!'.\n"
    );
  } else {
    console.log("****Você tá de hack!****\n");
  }

  fim = prompt("Deseja encerrar o jogo?");
}
