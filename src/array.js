const numeros1 =[1,2,3,4];
const numeros2 =numeros1;
console.log(numeros1)
console.log(numeros2)

numeros2.push(5)

console.log(numeros1)
console.log(numeros2)

/* 
PARA COPIAR EL VALOR Y NO LA REFERENCIA EN MEMORIA USAR
EL OPERADOR SPREAD
[...arrayReferencia]
*/ 
const numeros3=[...numeros1,6,7,8,9]

console.log(numeros1)
console.log(numeros2)
console.log(numeros3)

/*
EL METODO MAP() RECORRE EL ARRAY APLICANDO LOS CAMBIOS ESPECIFICADOS 
EN LA FUNCION CALLBACK Y RETORNA UNA EL VALOR, 
PASANDOLO POR VALOR NO POR REFERENCIA
*/
const numeros4=numeros3.map((item)=>{
  return item * 2;
})
console.log(numeros4);
