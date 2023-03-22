import PropTypes from "prop-types";

export const GifGridItem = ({title, url}) => {
   // console.log({id,title,url});
   return (
      <div className="card animate__animated animate__bounce">
         <p>{title}</p>
         <img src={url} alt={title}></img>
      </div>
   )             
}

GifGridItem.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
}