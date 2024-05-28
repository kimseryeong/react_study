import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요 !');
    const onClickLeave = () => setMessage('안녕히 가세요 !');

    const [color, setColor] = useState('pink');


    /** 객체 state 업데이트 */
    const object = {a: 1, b: 2, c: 3};
    const nextObject = { ...object, b: 2 };//사본 생성 후 b 값만 덮어쓰기

    /** 배열 state 업데이트 */
    const array = [
        {id: 1, value: true}
        ,{id: 2, value: true}
        ,{id: 3, value: false}
    ];
    //새 항목 추가
    let nextArray = array.concat({id: 4}) 
    //id === 2 인 항목 제거
    nextArray.filter(item => item.id !== 2); 
    //id === 1 인 항목의 value를 false로 설정
    nextArray.map(item => 
        (item.id === 1 ? {...item, value: false} : item)
    );



    return (
        <div>
            <button onClick={ onClickEnter }>입장</button>
            <button onClick={ onClickLeave }>퇴장</button>
            <h1 style={ {color} }>{ message }</h1>
            <button style={ {color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={ {color: 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style={ {color: 'blue'}} onClick={() => setColor('blue')}>파랑색</button>
        </div>
    );

}

export default Say;