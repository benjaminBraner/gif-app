
import {useState,useEffect} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) => {
   const [state, setState] = useState({
      data: [],
      loading: true
   })

   /*este useEffect me permite ejecutar codigo de manera condicional, como primer argumento reci-
   be una funcion que es el codigo que yo quiero ejecutar, También es posible especificar cuándo 
   se debe ejecutar esta función con un segundo argumento opcional que le podemos pasar.
   Para ello basta con añadir un segundo parámetro a la función, con la lista de los elementos de 
   los que depende. Si el valor de uno de estos elementos que hemos indicado cambia, 
   la función se va a ejecutar con la siguiente actualización.

   Otra posibilidad que nos permite este hook es la de especificar que se ejecute una unica vez,
   solo basta con poner un array vacio como segundo parametro []
   */
   useEffect( () => {
   
      getGifs(category)    
         .then(imgs => {
               setState({
                  data: imgs,
                  loading: false
               })        
         })
   },[category])

   return state; //{data: [], loading: true}
}