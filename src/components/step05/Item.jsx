import React from 'react';

function Item({ name, isPacked }) {
    //     if (isPacked) {
    //         return <li> {name} ✅ </li>
    //     }
    //     return <li> {name} </li>
    // }

    // 조건부로 null 반환하면 아무것도 반환하지 않는다
    // if (isPacked) {
    //         return <li> {name} ✅ </li>
    //     }
    //     return null;

    // && 연산자
    //   && 기준으로 왼쪽(조건)이 true 이면 오른쪽(결과)이 반환된다!!
    // true면 표시, false면 미표시
    // return (
    //     <li>{name} {isPacked && '✅'} </li>
    // );

    //
    let itemContent = name;
    if(isPacked){
        itemContent = name + '✅';
    }
    return(
        <li>{itemContent}</li>
    );
}

export default Item;