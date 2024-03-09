export default class Caneta {
  constructor(modelo, cor, ponta, carga, tampada) {
    this.modelo = modelo;
    this.cor = cor;
    this.ponta = ponta;
    this.carga = carga;
    this.tampada = tampada
  }

  tampar() {
    this.tampada = true;
    console.log('Você tampou a sua caneta.')
  }

  destampar() {
    this.tampada = false;
    console.log('Você destampou a sua caneta.')
  }

  escrever() {
    if (this.tampada) {
      console.log('Para escrever, você primeiro precisa destampar a caneta.')
    } else {
      console.log('Você escreve uma linda frase e gasta 10% da sua carga de tinta.')
      this.carga -= 10;
    }
  }

  rabiscar() {
    if (this.tampada) {
      console.log('Para rabiscar, você primeiro precisa destampar a caneta.')
    } else {
      console.log('Você faz um rabisco enorme e gasta 20% da sua carga de tinta.')
      this.carga -= 20;
    }
  }



}