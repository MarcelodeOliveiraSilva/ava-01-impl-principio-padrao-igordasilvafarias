export class Produto {
  readonly descricao: string

  constructor(descricao: string) {
    this.descricao = descricao
  }

  toString(): string {
    return `Produto ${this.descricao}`
  }
}
