import { Pessoa } from "../Pessoa/Pessoa";

export default class Aluno extends Pessoa {
  private matricula!: number;
  private curso!: string;

  public getMatricula() {
    return this.matricula;
  }
  public setMatricula(nrMatricula: number) {
    this.matricula = nrMatricula;
  }

  public getCurso() {
    return this.curso;
  }
  public setCurso(curso: string) {
    this.curso = curso;
  }

  public pagarMensalidade() {
    console.log('Você pagou a Mensalidade.')
  }
}