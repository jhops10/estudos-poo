export default class Lutador {

  private nome!: string;
  private nacionalidade!: string;
  private altura!: number;
  private peso!: number;
  private categoria!: string;
  private vitorias!: number;
  private derrotas!: number;
  private empates!: number;

  constructor(nome: string, nacionalidade: string, altura: number, peso: number, vitorias: number, derrotas: number, empates: number) {
    this.setNome(nome);
    this.setNacionalidade(nacionalidade);
    this.setAltura(altura);
    this.setPeso(peso);
    this.setVitorias(vitorias);
    this.setDerrotas(derrotas);
    this.setEmpates(empates);
}


  getNome() {
    return this.nome;
  }
  setNome(nome: string) {
    this.nome = nome;
  }

  getNacionalidade() {
    return this.nacionalidade;
  }
  setNacionalidade(nacionalidade: string) {
    this.nacionalidade = nacionalidade;
  }

  getAltura() {
    return this.altura;
  }
  setAltura(altura: number) {
    this.altura = altura;
  }

  getPeso() {
    return this.peso;
  }
  setPeso(peso: number) {
    this.peso = peso;
    this.setCategoria();
  }

  getCategoria() {
    return this.categoria;
  }
  setCategoria() {
    if (this.getPeso() < 52.2) {
      this.categoria = 'Inválida'
    } else if (this.getPeso() <= 70.3) {
      this.categoria = 'Leve'
    } else if (this.getPeso() <= 83.9) {
      this.categoria = 'Médio'
    } else if (this.getPeso() <= 120.2) {
      this.categoria = 'Pesado'
    } else {
      this.categoria = 'Inválida'
    }
  }

  getVitorias() {
    return this.vitorias;
  }
  setVitorias(numVitorias: number) {
    this.vitorias = numVitorias;
  }

  getDerrotas() {
    return this.derrotas;
  }
  setDerrotas(numDerrotas: number) {
    this.derrotas = numDerrotas;
  }

  getEmpates() {
    return this.empates;
  }
  setEmpates(numEmpates: number) {
    this.empates = numEmpates;
  }

  //Métodos
  public apresentar() {
    console.log('Lutador:', this.getNome());
    console.log('Origem:', this.getNacionalidade());
    console.log('Altura:', this.getAltura());
    console.log('Pesando:', this.getPeso(), 'Kg');
    console.log('Ganhou:', this.getVitorias());
    console.log('Perdeu:', this.getDerrotas());
    console.log('Empatou:', this.getEmpates());
  }

  public status() {
    console.log(this.getNome());
    console.log('É um peso:', this.getCategoria());
    console.log(this.getVitorias(), 'Vitórias');
    console.log(this.getDerrotas(), 'Derrotas');
    console.log(this.getEmpates(), 'Empates');
  }

  public ganharLuta() {
    this.vitorias += 1;
}

  public perderLuta() {
    this.derrotas += 1;
  }

  public empatarLuta() {
    this.empates += 1;
  }


}