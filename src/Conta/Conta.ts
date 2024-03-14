export default class Conta {
  public numConta!: number;
  protected tipo!: string;
  private dono!: string;
  private saldo!: number;
  private status!: boolean;

  constructor(saldo: number = 0, status: boolean = false) {
    this.saldo = saldo;
    this.status = status;
   }
  
  // Setters e Getters
  public setNumConta(num: number) {
    this.numConta = num;
  }

  public getNumConta() {
    return this.numConta;
  }

  public setTipo(tipo: string) {
    this.tipo = tipo;
  }

  public getTipo() {
    return this.tipo;
  }

  public setDono(dono: string) {
    this.dono = dono;
  }

  public getDono() {
    return this.dono;
  }

  public setSaldo(value: number) {
    this.saldo += value
  }

  public getSaldo() {
    return this.saldo;
  }

  public abrirConta(tipo: string) {
    this.setTipo(tipo);
    this.status = true;
    if (this.tipo === 'CC') {
      this.saldo = 50;
    } else if (this.tipo === 'CP') {
      this.saldo = 150;
    }
  }

  public fecharConta() {
    if (this.saldo > 0) {
      console.log('Você não pode fechar a conta com saldo positivo.')
    } else if (this.saldo < 0) {
      console.log('Você não pode fechar a conta com saldo negativo.')
    } else {
      this.status = false;
      console.log('Você fechou a sua conta');
    }
  }

  public depositar(value: number) {
    if (this.status === true) {
      this.saldo += value
    } else {
      console.log('Não foi possível depositar na sua conta.')
    }
  }

  public sacar(value: number) {
    if (this.saldo >= value && this.status) {
      this.saldo -= value;
    } else {
      console.log('Você não tem saldo suficiente ou sua conta não está aberta.')
    }
  }

  public pagarMensal() {
    let valor: number;

    if (this.tipo === 'CC') {
      valor = 12
    } else {
      valor = 20;
    }

    if (this.status && this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log('Saldo insuficiente para pagar a mensalidade.')
    }
  }


}