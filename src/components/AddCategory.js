import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/AddCategory.css';

export const AddCategory = ({ setCategories }) => {


     const [inputValue, setInputValue] = useState('');

     const handleInputChange = (e) => {
          setInputValue(e.target.value)
     }

     const handleSubmit = (e) => {
          e.preventDefault();

          if (inputValue.trim().length > 2) {
               setCategories(categories => {
                    let y = [...categories].filter(c => c !== inputValue)
                    return [inputValue, ...y];
               });

               setInputValue('');
          }
     }

     return (
          <>
               <form onSubmit={handleSubmit}>
                    <input
                         type='text'
                         value={inputValue}
                         onChange={handleInputChange}
                    />
                    <button type='submit'>Submit</button>
               </form>
          </>
     )
}

AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired
}