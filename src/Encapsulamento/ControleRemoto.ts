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
    console.log(this.getLigado());
    console.log(this.getVolume());
    console.log(this.getTocando());
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
    this.setVolume(-10)
  }
  ligarMudo(): void {
    this.volume = 0;
  }
  desligarMudo(): void {
    this.setVolume(50);
  }
  play(): void {
    this.setTocando(true);
  }
  pause(): void {
    this.setTocando(false);
  }
}