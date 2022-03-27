function calcular_media_aritmetica(lista){
    const sumalist = lista.reduce(
        function(valor_acumulado = 0, valor_actual){
            return valor_actual + valor_actual;
        }
    );
    const promediolista = sumalista/lista.length;
    return promediolista;
    }
const lista1 = [
100,
200,
500,
40000,
542,
];
function espar(numero){
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}
let mediana;
const mitad_lista1 = parseFloat(lista1.length/2);
if(espar(lista1.length)){
    const elemento1 = lista1[mitad_lista1 - 1];
    const elemento2 = lista1[mitad_lista1];
    const promedio = calcular_media_aritmetica([
        elemento1,
        elemento2,
    ]);
    mediana = promedio;
}else{
    mediana = lista1[mitad_lista1];
}