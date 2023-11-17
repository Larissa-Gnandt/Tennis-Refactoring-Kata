class JogoDeTennis {
  constructor(jogador1, jogador2) {
    this.jogador1 = jogador1;
    this.jogador2 = jogador2;
    this.pontuacaoJogador1 = 0;
    this.pontuacaoJogador2 = 0;
    this.nomeDasPontuacoes = ["Love", "Fifteen", "Thirty", "Forty"];
    this.pontosLimitesParaGanhar = 4;
  }

  ganhaPontos(jogador) {
    jogador === "jogador1"
      ? this.pontuacaoJogador1++
      : this.pontuacaoJogador2++;
  }

  obterPontuacao() {
    if (this.pontuacaoJogador1 === this.pontuacaoJogador2) {
      return this.obterPontuacaoIgual();
    } else if (
      this.pontuacaoJogador1 >= this.pontosLimitesParaGanhar ||
      this.pontuacaoJogador2 >= this.pontosLimitesParaGanhar
    ) {
      return this.obterPontuacaoVitoriaOuVantagem();
    } else {
      return this.obterPontuacaoRegular();
    }
  }

  obterPontuacaoIgual() {
    if (this.pontuacaoJogador1 < this.nomeDasPontuacoes.length) {
      return `${this.nomeDasPontuacoes[this.pontuacaoJogador1]}-All`;
    } else {
      return "Deuce";
    }
  }

  obterPontuacaoVitoriaOuVantagem() {
    const subtrairResultado = this.pontuacaoJogador1 - this.pontuacaoJogador2;
    const jogadorVantagem =
      subtrairResultado === 1 ? this.jogador1 : this.jogador2;

    if (Math.abs(subtrairResultado) === 1) {
      return `Vantagem ${jogadorVantagem}`;
    } else {
      return `Ganhando por ${jogadorVantagem}`;
    }
  }

  obterPontuacaoRegular() {
    const pontuacaoJogador1 = this.nomeDasPontuacoes[this.pontuacaoJogador1];
    const pontuacaoJogador2 = this.nomeDasPontuacoes[this.pontuacaoJogador2];
    return `${pontuacaoJogador1}-${pontuacaoJogador2}`;
  }
}

if (typeof window === "undefined") {
  module.exports = JogoDeTennis;
}
