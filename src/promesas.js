const ejemplo=(parametro)=>{
    return new Promise((resolve,reject)=>{
      const frase =(parametro.length > 1)?"El parametro es: "+parametro:undefined;
      if(frase){
        resolve(frase)
      }else{
        reject('parametro undefined')
      }
    });
  }
  
  ejemplo('casa')
  .then((p)=>{
    console.log(p)
  }).catch(console.warn)
  .finally(console.log('termino de promesa'))