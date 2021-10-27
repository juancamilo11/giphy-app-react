import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(categories => [inputValue, ...categories,]);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="form-input"
                    placeholder="Ingrese la nueva categoría"
                    value={inputValue}
                    onChange={ handleInputChange }/>            
            </form>
        </>
    )
}
