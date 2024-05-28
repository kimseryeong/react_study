import React, { useState, useReducer } from 'react';

const Counter = () => {
    // const [value, setValue] = useState(0); //초기값 0

    // return (
    //     <div>
    //         <p>현재 카운터 값은 <b>{ value }</b> 입니당</p>
    //         <button onClick={() => setValue(value + 1)}>+1</button>
    //         <button onClick={() => setValue(value - 1)}>-1</button>
    //     </div>
    // );

    const [state, dispatch] = useReducer(reducer, { value: 0});

    return (
        <div>
            <p>현재 카운터 값은: {state.value}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );

}

function reducer (state, action) {
    switch(action.type){
        case 'INCREMENT':
            return { value: state.value + 1};
        case 'DECREMENT':
            return { value: state.value - 1};
        default:
            return state; // 아무것도 해당되지 않을 때 기존 상태 반환
    }
}

export default Counter;