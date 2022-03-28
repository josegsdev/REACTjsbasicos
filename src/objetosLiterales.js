/*
OBJETOS LITERALES:
AL COPIAR UN OBJETO LITERAL SE COPIA SOLO LA REFERENCIA 
EN LA MEMORIA DEL OBJETO, POR LO QUE AL MUTAR LA "COPIA"
TAMBIEN MUTA LA PRIMERA REFERENCIA HECHA A ESE OBJETO

PARA COPIAR POR VALOR UN OBJETO SE RECOMIENDA UTILIZAR EL OPERADOR SPREAD
{...REFERENCIA_OBJETO}
*/

const persona={
    nombre:'Jose',
    apellido:'GS',
    edad:20,
    sexo:'masculino'
  }
  const persona3 ={...persona}
  console.log('REFERENCIA ORIGINAL OBJETO PERSONA: ');
  console.log(persona);
  console.log('***************************************');
  console.log('                                        ');
  const persona2 = persona;
  persona2.nombre='Luis';
  console.log( 'OBJ PERSONA 2 COPIADO Y MUTADO: ');
  console.log(persona2);
  console.log('***************************************');
  console.log('                                        ');
  console.log( ' AHORA OBJ PERSONA APUNTA AL MISMO OBJETO QUE MUTO PERSONA2 : ');
  console.log('persona:');
  console.log(persona);
  console.log('***************************************');
  console.log('                                        ');
  console.log('OBJETO PERSONA 3 CLONADO ANTES DE CUALQUIER MUTACION MANTIENE VALORES ORIGINALES:')
  console.log(persona3);
  console.log('***************************************');
  console.log('                                        ');
  
  
  