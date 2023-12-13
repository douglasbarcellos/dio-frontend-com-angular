const valorDinheiro = parseFloat(gets());
const moedaOrigem = gets();
const moedaDestino = gets();

// Aqui é verificado se valorDinheiro é um número.
// !isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(valorDinheiro)) {
  // Definição fixa das taxas de câmbio para as moedas:
  const taxaCambioBRLtoUSD = 0.1875;
  const taxaCambioBRLtoEUR = 0.1520;
  const taxaCambioUSDtoBRL = 5.3333;
  const taxaCambioEURtoBRL = 6.5789;

  let valorConvertido;

  // Crie uma estrutura condicional que realize a conversão das moedas:
  if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
  } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
  } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
  } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
  }

  // Imprima a conversão com duas casas decimais:
  print(`${valorDinheiro} ${moedaOrigem} equivalem a ${valorConvertido.toFixed(2)} ${moedaDestino}.`);
} else {
  // Se o valorDinheiro não for um número, imprima uma mensagem de erro.
  print('Valor inválido. Insira um número válido para a conversão.');
}
