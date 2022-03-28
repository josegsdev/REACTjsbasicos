const fullUrl='http://api.giphy.com/v1/gifs/search?api_key=RsN2cA8VwENy5cer2pc9JBz16SKtyrcU&limit=10&q=dragon ball';


const getImagen= async(u)=>{

  try {
    const consulta = await fetch(u);
    const data= await consulta.json();
    const {url:imgUrl} =  data.data[0].images.original;
    const ig=document.createElement('img');
    ig.src=imgUrl;
    document.body.append(ig);
  } catch (error) {
    console.log(error)
  }

}

getImagen(fullUrl);