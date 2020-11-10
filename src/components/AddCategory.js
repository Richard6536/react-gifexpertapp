import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            //Recibo setCategories desde el componente GifExpertApp y agrego el valor del input al arreglo
            setCategories(categorias => [inputValue, ...categorias]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1> {inputValue} </h1>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Busca un GIF"
                type="text" value={inputValue} onChange={ handleInputChange }
                />
            </InputGroup>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}