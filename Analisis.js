// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // Mediana General
  const salariosHN = Honduras.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosHNSorted = salariosHN.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralHN = medianaSalarios(salariosHNSorted);
  
  // Mediana del top 10%
  const spliceStart = (salariosHNSorted.length * 90) / 100;
  const spliceCount = salariosHNSorted.length - spliceStart;
  
  const salariosHNTop10 = salariosHNSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10HN = medianaSalarios(salariosHNTop10);
  
  console.log({
    medianaGeneralHN,
    medianaTop10HN,
  });