import Pessoa from "../Pessoa/Pessoa";
import { Publicacao } from "../interfaces/Publicacao";

export default class Livro implements Publicacao {
  private titulo!: string;
  private autor!: string;
  private totPaginas!: number;
  private pagAtual!: number;
  private aberto!: boolean;
  private leitor!: Pessoa;

  constructor(titulo: string, autor: string, totPaginas: number, leitor: Pessoa) {
    this.setTitulo(titulo);
    this.setAutor(autor);
    this.setTotPaginas(totPaginas);
    this.setLeitor(leitor);
    this.setAberto(false);
    this.setPagAtual(0);
   }

  abrir(): void {
    this.setAberto(true);
  }
  fechar(): void {
    this.setAberto(false);
  }
  folhear(pagina: number): void {
    console.log('Você folheou o livro até a página', pagina);
    this.setPagAtual(pagina);
  }
  avancarPag(): void {
    this.setPagAtual(this.getPagAtual() + 1);
  }
  voltarPag(): void {
    this.setPagAtual(this.getPagAtual() - 1);
  }

  public getTitulo() {
    return this.titulo;
  }
  public setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  public getAutor() {
    return this.autor;
  }
  public setAutor(autor: string) {
    this.autor = autor;
  }

  public getTotPaginas() {
    return this.totPaginas;
  }
  public setTotPaginas(totPaginas: number) {
    this.totPaginas = totPaginas
  }

  public getPagAtual() {
    return this.pagAtual;
  }
  public setPagAtual(pagAtual: number) {
    this.pagAtual = pagAtual
  }

  public getAberto() {
    return this.aberto;
  }
  public setAberto(aberto: boolean) {
    this.aberto = aberto;
  }

  public getLeitor() {
    return this.leitor;
  }
  public setLeitor(leitor: Pessoa) {
    this.leitor = leitor;
  }

  public detalhes() {
    console.log('Você está lendo o livro:', this.getTitulo());
    console.log('Autor:', this.getAutor());
    console.log('Total de Páginas:', this.getTotPaginas());
    console.log('Você atualmente está lendo a página:', this.getPagAtual());
  }
}