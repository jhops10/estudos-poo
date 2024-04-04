export default class Pessoa {
  private nome!: string;
  private idade!: number;
  private sexo!: string;

  constructor(nome: string, idade: number, sexo: string) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  public getNome() {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }

  public getIdade() {
    return this.idade;
  }
  public setIdade(idade: number) {
    this.idade = idade;
  }

  public getSexo() {
    return this.sexo;
  }
  public setSexo(sexo: string) {
    this.sexo = sexo;
  }

  public fazerAniver() {
    this.setIdade(this.getIdade() + 1);
  }
}