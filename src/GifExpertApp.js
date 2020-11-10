import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //Si useState detecta un cambio, renderiza nuevamente la vista
    const [categories, setCategories] = useState(['Mario'])

    /*
    const AgregarCategoria = () => {

        //Agrego una nueva categoría al useState, lo cual detectará un cambio y renderizará nuevamente la vista.
        const nuevaCategoria = 'Donkey Kong';
        setCategories([nuevaCategoria, ...categories]);
    };*/

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => {
                        return <GifGrid key={ category } category={ category } />
                    })
                }
            </ol>

        </Fragment>
    )
}