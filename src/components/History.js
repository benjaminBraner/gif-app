import '../styles/components/History.css';


export const History = ({ histItem, setCategories }) => {

   const showElement = () => {
      setCategories(categories => {
         let y = [...categories].filter(c => c !== histItem);
         return [histItem, ...y];
      });
   }

   return (
      <>
      {histItem ? <li onClick={showElement}>{histItem}</li> : null}

      
      
      </>
   )
}
