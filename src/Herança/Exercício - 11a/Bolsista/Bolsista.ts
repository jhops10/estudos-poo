import Aluno from "../Aluno/Aluno";

export default class Bolsista extends Aluno {
  private bolsa!: number;

  public getBolsa() {
    return this.bolsa;
  }
  public setBolsa(bolsa: number) {
    this.bolsa = bolsa;
  }


  public renovarBolsa() {
    console.log('Bolsa Renovada')
  }

  public override pagarMensalidade() {
    console.log('Pagou a mensalidade como bolsista');
  }
}