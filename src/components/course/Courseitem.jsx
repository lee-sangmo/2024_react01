import React from 'react';

function Courseitem({image, name}) {
    return (
        <article className="course">
            <img className="course__img" src={`./img/${image}`} alt="" />
            <div className="course__body">
                <div className="course__title">{`입문자를 위한, ${name}`}</div>
                <div className="course__description">{`${name}에 필요한 기본 지식을 배웁니다. `}</div>
            </div>
        </article>
    );
}

export default Courseitem;