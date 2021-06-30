
import { useState } from "react";
import  {AddCategory}  from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {

   
   
   const [categories, setCategories] = useState([""])

   

   return (
      <>
         <h2>GifExpertApp</h2>
         {/* <AddCategory/> maneja lo que se envia en el input */}
         <AddCategory setCategories={setCategories}/>
         <hr/>
         <ol>
            {
               // categories.map(category => 
                  /*<GifGrid/> trae la informacion de la API y retorna las imagenes que se mostraran*/
                  <GifGrid 
                     category={categories}
                     key={categories}
                  />
                     
               // )
            }       
         </ol>
      </>
   );
}
export {GifExpertApp};