export class EstoqueVeiculos<T> {
    // Armazena a quantidade de veículos por modelo
    private estoque: { [modelo: string]: number } = {};
  
    // Método para adicionar veículos ao estoque
    adicionarEstoque(modelo: string, quantidade: number): void {
      if (this.estoque[modelo]) {
        this.estoque[modelo] += quantidade;
      } else {
        this.estoque[modelo] = quantidade;
      }
    }
  
    // Método para remover veículos do estoque
    removerEstoque(modelo: string, quantidade: number): void {
      if (this.estoque[modelo]) {
        if (this.estoque[modelo] >= quantidade) {
          this.estoque[modelo] -= quantidade;
        } else {
          console.log(`Não há estoque suficiente de ${modelo}.`);
        }
      } else {
        console.log(`${modelo} não encontrado no estoque.`);
      }
    }
  
    // Método para consultar a quantidade disponível de um modelo
    consultarEstoque(modelo: string): number {
      return this.estoque[modelo] || 0;
    }
  }