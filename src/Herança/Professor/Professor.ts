import Pessoa from "../Pessoa/Pessoa";

export default class Professor extends Pessoa {
  private especialidade!: string;
  private salario!: number;

  public getEspecialidade() {
    return this.especialidade;
  }
  public setEspecialidade(especialidade: string) {
    this.especialidade = especialidade;
  }

  public getSalario() {
    return this.salario;
  }
  public setSalario(salario: number) {
    this.salario = salario;
  }

  public receberAumento(aumento: number) {
    this.setSalario(this.getSalario() + aumento);
  }
}