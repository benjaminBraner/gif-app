



export const getGifs = async(category) => {
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=N4kgTpjX0UF1jr9W86SpQWAEizZqdVVs`;
   const resp = await fetch(url);
   //2. traigo la data del json con desestructuracion
   const {data} = await resp.json();
   
   /* 3. como data me trae un array con objetos que tienen muchas propiedades que no me sirven, 
   con un map, limpio cada elemento del array*/
   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url
      }
   })

   return gifs;
}