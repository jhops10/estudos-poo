import Lutador from "../Lutador/Lutador";

export class Luta {
  private desafiado!: Lutador;
  private desafiante!: Lutador;
  private rounds!: number;
  private aprovada!: boolean;

  constructor() { };

  setDesafiado(desafiado: Lutador) {
    this.desafiado = desafiado;
  }
  getDesafiado() {
    return this.desafiado;
  }

  setDesafiante(desafiante: Lutador) {
    this.desafiante = desafiante;
  }
  getDesafiante() {
    return this.desafiante;
  }

  public marcarLuta() { };
  public lutar() { };
}