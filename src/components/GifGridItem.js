import React from 'react'
import Card from 'react-bootstrap/Card';

export const GifGridItem = ( {id, title, url} ) => {

    console.log(url);

    return (
        <Card className="animate__animated animate__fadeIn" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ url } alt={title} />
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
        </Card.Body>
        </Card>
    )
}
