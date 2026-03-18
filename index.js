// Funcion para calcular el total de una cuenta con propina
const calcularTotalConPropina = (cuenta, porcentaje) => cuenta + (cuenta * porcentaje / 100);

console.log(calcularTotalConPropina(50000, 10)); // 55000