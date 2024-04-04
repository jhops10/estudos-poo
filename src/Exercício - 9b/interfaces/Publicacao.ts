export interface Publicacao {
  abrir(): void;
  fechar(): void;
  folhear(pagina: number): void;
  avancarPag(): void;
  voltarPag(): void;
}