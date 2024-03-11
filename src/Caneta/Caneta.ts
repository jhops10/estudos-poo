export default class Caneta {
  public modelo: string | undefined;
  public cor: string | undefined;
  private ponta: number | undefined;
  protected carga: number | undefined;
  protected tampada: boolean = true;

  public status() {
    console.log('Modelo:', this.modelo)
    console.log('Cor:', this.cor)
    console.log('Ponta:', this.ponta)
    console.log('Carga:', this.carga)
    console.log('Está Tampada?:', this.tampada)
  }

  public destampar(): void {
    this.tampada = false;
  }

  public tampar(): void {
    this.tampada = true;
  }

  public escrever(): string {
    if (this.tampada) {
      return 'Você não pode escrever, pois sua caneta esta tampada.'
    } else {

      return 'Você escreve uma linda frase e gasta 10% da carga de tinta.'
    }
  }

  public rabiscar(): string {
    if (this.tampada) {
      return 'Você não pode rabiscar, pois sua caneta esta tampada.'
    } else {

      return 'Você você faz um rabisco sem sentido e gasta 15% da carga de tinta.'
    }
  }

  public desenhar(): string {
    if (this.tampada) {
      return 'Você não pode desenhar, pois sua caneta esta tampada.'
    } else {

      return 'Você você faz um lindo desenho e gasta 20% da carga de tinta.'
    }
  }
}