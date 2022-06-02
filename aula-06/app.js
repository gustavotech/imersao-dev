var gustavo = {nome: "gustavo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var rex = { nome: "rex", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
  
  gustavo.pontos = calculaPontos(gustavo);
  rex.pontos = calculaPontos(rex);
  
  function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }
  
  var jogadores = [gustavo, rex];
  
  // essa function é para mostra o resultado na tela
  function exibeNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  exibeNaTela(jogadores);
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeNaTela(jogadores);
  }
  
  function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeNaTela(jogadores);
  }