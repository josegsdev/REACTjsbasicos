const fullUrl='http://api.giphy.com/v1/gifs/search?api_key=RsN2cA8VwENy5cer2pc9JBz16SKtyrcU&limit=10&q=dragon ball';

const peticion=fetch(fullUrl);

peticion
  .then(respuesta=> respuesta.json())
  .then(({data})=>{ 
    const {url}=data[0].images.original;
    const ig=document.createElement('img');
    ig.src=url;
    document.body.append(ig);
  })
.catch(console.log)



/*FORMA LARGA 
peticion.then((respuesta)=>{
  console.log(respuesta);
  respuesta.json().then((jsonResp)=>{
    console.log(jsonResp)
  })
}).catch(console.warn)
*/