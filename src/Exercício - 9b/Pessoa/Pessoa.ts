export default class Pessoa {
  private nome!: string;
  private idade!: number;
  private sexo!: string;

  constructor(nome: string, idade: number, sexo: string) {
    this.setNome(nome);
    this.setIdade(idade);
    this.setSexo(sexo);
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
    console.log('Parabéns!! É o seu aniversário!!')
    this.setIdade(this.getIdade() + 1);
    console.log('Agora você tem:', this.getIdade(), 'anos');
  }
}