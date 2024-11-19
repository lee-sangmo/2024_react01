import React from 'react';
import Avata from './Avata';

function Profile() {
    return (
        <div>
            <Avata
                size={100}
                person={{ name: 'hong', imageId: 'YfeOqp2' }}
            />
            <Avata
                size={80}
                person={{ name: 'park',  imageId: 'OKS67lh' }}
            />
            <Avata
                size={60}
                person={{ name: 'Lee', imageId: '1bX5QH6' }}
            />
        </div>
    );
}

export default Profile;