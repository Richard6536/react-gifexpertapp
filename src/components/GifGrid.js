import React, { Fragment } from 'react';
import { GifGridItem } from './GifGridItem';
import CardGroup from 'react-bootstrap/CardGroup';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    //data:images, sirve para renombrar data por images
    const { data:images, loading } = useFetchGifs( category );

    return (
        <Fragment>
            <h3>{ category }</h3>
            
            { loading && <p>Cargando...</p>}

            <CardGroup>
                {
                    images.map( img => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
            </CardGroup>
            <hr/>
        </Fragment>
    )
}
