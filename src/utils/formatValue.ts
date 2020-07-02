const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    maximumFractionDigits: 2,
  }).format(value); // TODO

export default formatValue;
