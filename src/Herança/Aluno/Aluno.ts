import Pessoa from "../Pessoa/Pessoa";

export default class Aluno extends Pessoa {
  private matricula!: number;
  private curso!: string;


  public getMatricula() {
    return this.matricula;
  }
  public setMatricula(numMatricula: number) {
    this.matricula = numMatricula;
  }

  public getCurso() {
    return this.curso;
  }
  public setCurso(curso: string) {
    this.curso = curso;
  }


  public cancelarMatricula(){}
}