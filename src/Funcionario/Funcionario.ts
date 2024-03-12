export default class Funcionario {
  private nome!: string;
  private idade!: number;
  private pcd!: boolean;

  constructor(nome: string, idade: number, pcd: boolean) {
    this.setNome(nome)
    this.setIdade(idade);
    this.setPcd(pcd)
  }

  public getStatus() {
    console.log('Nome:', this.getNome());
    console.log('Idade:' , this.getIdade());
    console.log('PCD?:', this.getPcd());
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setIdade(idade: number): void {
    this.idade = idade;
  }

  public getIdade(): number {
    return this.idade;
  }

  public setPcd(pcd: boolean) {
    this.pcd = pcd;
  }

  public getPcd(): boolean {
    return this.pcd;
  }
}