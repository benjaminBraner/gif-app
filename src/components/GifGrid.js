import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => {
   const { data: images, loading } = useFetchGifs(category);

   return (
      <>
         <h3>{category}</h3>

         {loading && <p>Loading...</p>}
         {/* {loading ? <p>Loading...</p> : null} */}

         <div className="card-grid">
            {
               images.map(img => (
                  <GifGridItem
                     key={img.id}
                     {...img}
                  />
               ))
            }


         </div>
      </>
   )
};

GifGrid.propTypes = {
   category: PropTypes.string.isRequired
}