import Lutador from "../Lutador/Lutador";

export class Luta {
  private desafiado!: Lutador | null;
  private desafiante!: Lutador | null;
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

  public marcarLuta(lutador1: Lutador, lutador2: Lutador) {
    if (lutador1.getCategoria() === lutador2.getCategoria() && lutador1 != lutador2) {
      this.aprovada = true;
      this.desafiado = lutador1;
      this.desafiante = lutador2;
      console.log('Luta Aprovada!');
      console.log('========================');
    } else {
      this.aprovada = false;
      this.desafiado = null;
      this.desafiante = null;
      console.log('ERRO! Luta Não foi Aprovada!');
      console.log('========================');
      }
  };

  public lutar() {
    if (this.aprovada) {
      this.desafiado?.apresentar();
      console.log('========================');
      this.desafiante?.apresentar();
      console.log('========================');
      let vencedor: number = Math.floor(Math.random() * 3);
      switch (vencedor) {
        case 0: {
          console.log("Empate")
          console.log('========================');
          this.desafiado?.empatarLuta();
          this.desafiante?.empatarLuta();
          break;
        }
        case 1: {
          console.log(this.desafiado?.getNome(), "Ganhou a Luta");
          console.log('========================');
          this.desafiado?.ganharLuta();
          this.desafiante?.perderLuta();
          break;
        }
        case 2: {
          console.log(this.desafiante?.getNome(), "Ganhou a Luta");
          console.log('========================');
          this.desafiante?.ganharLuta();
          this.desafiado?.perderLuta();
          break;
          }
      }
    } else {
      console.log('A luta não pode acontecer')
    }
  };
}