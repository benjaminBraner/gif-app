import React,{useState} from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
   const [inputValue, setInputValue] = useState("");

   const handleInputValue = (e) => {
      /*Básicamente, trae el valor de cualquier input al que se solicitó.
      En este caso, es el elemento input, por lo que se puede acceder a todo lo que inserte 
      en su input a través de e.target.value*/
      setInputValue(e.target.value)
      //el state sera lo que sea que este en el input
   } 

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log("formulario enviado");

      if (inputValue.trim().length > 2) {
         // setCategories( category => [...category, inputValue]);
         setCategories([inputValue]);
         /*no puedo llamar el primer elemento del state del otro componente porque desde este com-
         ponente no tengo acceso a el como tal, y como el estado actual de la categoria tambien se
         puede llamar con un callback lo hago de esa forma, y el parametro representaria el estado
         actual del state */

         setInputValue("");
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={inputValue}   
            /*onChange permite escuchar el cambio de valor de un input */
            onChange={handleInputValue}
         />
      </form>
   )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}