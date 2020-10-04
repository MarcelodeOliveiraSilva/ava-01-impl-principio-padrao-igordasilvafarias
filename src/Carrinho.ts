import { Produto } from './Produto'

export class Carrinho {
  private readonly produtos: Produto[] = []

  /*Violacao identificada no metodo adiciona,
  porque ele esta limitando a entreda de produtos
  em 1 e no maximo 2 produtos*/

  /* prod2? significa parâmetro opcional
  adiciona(prod1: Produto, prod2?: Produto): void {
    this.produtos.push(prod1)
    if (prod2) {
      this.produtos.push(prod2)
    }
  } */

  /* Utilixando padrao rest parameter para resolver a violacao do pricipio */

  adiciona(...prod: Produto[]): void {
    prod.forEach(produto => this.produtos.push(produto))
    // excpetion -> mesagem em caso de carrinho vazio
    if (this.produtos.length === 0) {
      try {
        throw new Error('Something bad happened. It is necessary to select at least one product!');
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  /*
    // testando o metodo com for
    adiciona(...prod: Produto[]): void {
      for (const i in prod) {
        if (prod[i]) {
          this.produtos.push(prod[i])
        }
      }
    }
  */
  toString(): string {
    return 'Conteúdo do Carrinho:\n' +
      '=====================\n' +
      this.produtos.join('\n') // junta os produtos separados por nova linha
  }
}
