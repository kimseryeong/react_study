import React, { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    // const [userName, setUserName] = useState('');
    // const [userAge, setUserAge] = useState('');

    // useEffect(() => {
    //     console.log(`렌더링 완료 !`);
    //     console.log({userName, userAge});
    //     return () => {
    //         console.log('clean up');
    //         console.log(userName);
    //     }
    // });

    // const onChangeName = e => {
    //     setUserName(e.target.value);
    // };

    // const onChangeAge = e => {
    //     setUserAge(e.target.value);
    // };

    const [state, dispatch] = useReducer(reducer, {
        userName: ''
        ,userAge: ''

    })
    const {userName, userAge} = state;
    const onChange = (e) => dispatch(e.target);

    return (
        <div>
            <div>
                <input name="userName" value={userName} onChange={onChange} placeholder='이름'/>
                <input name="userAge" value={userAge} onChange={onChange} placeholder='나이'/>
            </div>
            <div>
                <div><b>이름: </b>{userName}</div>
                <div><b>나이: </b>{userAge}</div>
            </div>
        </div>
    );
}

export default Info;