import React from 'react';

// 이벤트 핸들러는 사용자가 마우스를 클릭하거나, 입력상자에서 키보드를 타이핑하는 등 사용자와의
// 상호작용에 따라 실행되는 사용자 정의 함수이다
// ** 특징: 이벤트 핸들러를 추가하기 위해서는 먼저 함수를 정의하고 이를 jsx 태그에 props 형태로 전달한다
function Event01(props) {
    // 사용자 정의함수(이벤트 핸들러)
    function handleClick(){
        alert("왜 눌러?")
    }
    return (
        <>
        <button onClick={handleClick}>Click Here</button><br />
        <button onClick={function handleClick2(){alert("자꾸 누를래?")}}>눌러죠~</button><br />
        <button onClick={() => {alert("누르지 마라 잉~")}}>누르지마시오</button>
        </>
    );
}

export default Event01;