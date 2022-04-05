var dominio = [5, 12, 36, 8, 7, 1, 85, 45];
var listaValores = [
    7, 9, 13, 26, 1, 14, 85, 12, 23, 45, 58, 47, 33, 14, 2, 4,
];
var comparar = function (a, b) {
    var entrada = a.filter(function (itemLista) { return b.includes(itemLista); });
    entrada.sort(function (a, b) { return a - b; });
    console.log(entrada);
    return entrada;
};
comparar(dominio, listaValores);
