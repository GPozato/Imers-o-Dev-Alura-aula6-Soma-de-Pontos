//          chave. valor.
var rafa = {nome:"Rafa", vitorias:2, empates:1, derrotas:1, pontos:0};
var paulo = {nome:"Paulo", vitorias:1, empates:1, derrotas:2, pontos:0};

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

var jogadores = [rafa, paulo];

function exibeJogadoresNaTela(jogadores){
    var elementos = ""
    for (var i = 0; i< jogadores.length; i++){
        elementos += "<tr><td>" + jogadores[i].nome + "</td>"
        elementos += "<td>" + jogadores[i].vitorias + "</td>"
        elementos += "<td>"+ jogadores[i].empates + "</td>"
        elementos += "<td>"+ jogadores[i].derrotas + "</td>"
        elementos += "<td>" + jogadores[i].pontos + "</td>"
        elementos += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elementos += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elementos += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elementos += "</tr>"
        }

    var tabelaJogadores= document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML=elementos;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}