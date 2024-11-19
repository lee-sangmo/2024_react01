import React from 'react';

function Avata({size, person}) {
    const getImageUrl = 'https://i.imgur.com/'
    return (
        <img 
            src={getImageUrl + person.imageId + '.jpg'}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default Avata;