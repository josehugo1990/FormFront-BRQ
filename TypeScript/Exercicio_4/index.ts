let dominio: number[] = [5, 12, 36, 8, 7, 1, 85, 45];
let listaValores: number[] = [
  7, 9, 13, 26, 1, 14, 85, 12, 23, 45, 58, 47, 33, 14, 2, 4,
];

const comparar = (a: number[], b: number[]) => {
  let entrada = a.filter((itemLista) => b.includes(itemLista));
  entrada.sort((a, b) => a - b);
  console.log(entrada);
  return entrada;
};

comparar(dominio, listaValores);