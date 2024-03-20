export interface Controlador {
  ligar(): void;
  desligar(): void;
  abrirMenu(): void;
  fecharMenu(): void;
  maisVolume(): void;
  menosVOlume(): void;
  ligarMudo(): void;
  desligarMudo(): void;
  play(): void;
  pause(): void;
}