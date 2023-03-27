import React from 'react';
import '../customStyles/Card.css'

const Card = ({country}) => {
    return (
        <div className='card'>
            <h2>{country.name.common}</h2>
            
        </div>
    );
};

export default Card;