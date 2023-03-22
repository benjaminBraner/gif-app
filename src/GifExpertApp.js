
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { History } from "../src/components/History";

const GifExpertApp = () => {

     const [categories, setCategories] = useState([""])

     // console.log(categories);

     return (
          <>
               <h2>GifExpertApp</h2>
               {/* <AddCategory/> maneja lo que se envia en el input */}
               <AddCategory setCategories={setCategories} />
               <ul>
                    {
                         categories.map(category => {
                              return <History key={category} histItem={category} setCategories={setCategories}/>
                         })
                    }
               </ul>
               <hr />
               <ol>
                    {
                         /*<GifGrid/> trae la informacion de la API y retorna las imagenes que se mostraran*/
                         <GifGrid
                              category={categories[0]}
                         />
                    }
               </ol>
          </>
     );
}
export { GifExpertApp };