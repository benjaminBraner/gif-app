

export const GifGridItem = ({id, title, url}) => {
   // console.log({id,title,url});
   return (
      <div className="card animate__animated animate__bounce">
         <p>{title}</p>
         <img src={url} alt={title}></img>
      </div>
   )             
}