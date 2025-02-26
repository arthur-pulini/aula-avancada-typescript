export class GerenciadorVeiculos<T> {
    private veiculos: T[] = [];
  
    // Método para adicionar um veículo
    adicionar(veiculo: T): void {
      this.veiculos.push(veiculo);
    }
  
    // Método para remover um veículo
    remover(veiculo: T): void {
      const index = this.veiculos.indexOf(veiculo);
      if (index !== -1) {
        this.veiculos.splice(index, 1);
      }
    }
  
    // Método para listar os veículos
    listarVeiculos(): T[] {
      return this.veiculos;
    }
  }