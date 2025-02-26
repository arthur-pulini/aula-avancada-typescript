import { Veiculo } from '../interface/Veiculo';

export function gerarRelatorio(veiculos: Veiculo[]): string {
  let relatorio = 'Relatório de Veículos Cadastrados:\n\n';
  
  if (veiculos.length === 0) {
    return 'Nenhum veículo cadastrado.';
  }

  veiculos.forEach((veiculo, index) => {
    relatorio += `Veículo ${index + 1}:\n`;
    relatorio += `  Marca: ${veiculo.marca}\n`;
    relatorio += `  Modelo: ${veiculo.modelo}\n`;
    relatorio += `  Ano: ${veiculo.ano}\n`;
  });

  return relatorio;
}