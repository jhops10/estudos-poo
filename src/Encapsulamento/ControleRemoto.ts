import { Controlador } from "./interfaces/controlador.interface";

export class ControleRemoto implements Controlador {
  private volume!: number;
  private ligado!: boolean;
  private tocando!: boolean;
  constructor() {
    this.volume = 50;
    this.ligado = false;
    this.tocando = false;
  }

  private getVolume(): number {
    return this.volume;
  }
  private setVolume(volume: number) {
    this.volume += volume;
  }

  private getLigado(): boolean {
    return this.ligado;
  }
  private setLigado(ligado: boolean):void {
    this.ligado = ligado;
  }

  private getTocando(): boolean {
    return this.tocando;
  }
  private setTocando(tocando: boolean) {
    this.tocando = tocando;
  }


  ligar(): void {
    this.setLigado(true);
  }
  desligar(): void {
    this.setLigado(false);
  }
  abrirMenu(): void {
    if (this.getLigado()) {
      console.log('-----MENU-----');
      console.log(this.getLigado());
      console.log(this.getVolume());
      console.log(this.getTocando());
    } else {
      console.log('Controle Desligado')
    }
  }
  fecharMenu(): void {
    console.log('Menu Desligado')
  }
  maisVolume(): void {
    if (this.getLigado()) {
      this.setVolume(10)
    }
  }
  menosVOlume(): void {
    if (this.getLigado() && this.volume > 10) {
      this.setVolume(-10)
    } else {
      console.log('Você já está no volume mínimo.')
    }
  }
  ligarMudo(): void {
    this.volume = 0;
  }
  desligarMudo(): void {
    this.setVolume(50);
  }
  play(): void {
    if (!this.getTocando()) {
      this.setTocando(true);
    } else {
      console.log('Você já está tocando.')
    }
  }
  pause(): void {
    if (this.getTocando()) {
      this.setTocando(false);
    } else {
      console.log('Nada Tocando no momento.')
    }
  }
}