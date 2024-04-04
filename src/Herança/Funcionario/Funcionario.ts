import Pessoa from "../Pessoa/Pessoa";

export default class Funcionario extends Pessoa {
  private setor!: string;
  private trabalhando!: boolean;


  public getSetor() {
    return this.setor
  }
  public setSetor(setor: string) {
    this.setor = setor;
  }

  public getTrabalhando() {
    return this.trabalhando
  }
  public setTrabalhando(trabalhando: boolean) {
    this.trabalhando = trabalhando;
  }

  public mudarTrabalho(novoTrabalho: string) {
    this.setSetor(novoTrabalho);
  }
}