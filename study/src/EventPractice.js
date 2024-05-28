import React, { useState } from 'react';

const EventPractice = () => {
    
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    
    // const onClick = () => {
    //     alert(username + ': ' + message);
    //     setUsername('');
    //     setMessage('');
    // };
        
    // const onKeyPress = e => {
    //     if(e.key === 'Enter'){
    //         onClick();
    //     }
    // }
    
    //form 으로 state 값 가져오기 (input 개수가 많아질수록 관리하기 용이)
    const [form, setForm] = useState({
        username: ''
        ,message: ''
    });

    const {username, message} = form;
    const onChange = e => {
         // 기존의 form 복사 후 원하는 값 덮어 씌우기
        const nexForm = { ...form, [e.target.name]: e.target.value }
        setForm(nexForm);
    };
    const onClick = e => {
        console.log(`${username}: ${message}`);
        alert(username + ': ' + message);
        setForm({
            username: ''
            ,message: ''
        });
    }
    const onKeyPress = e => {
        if(e === 'Enter'){
            onClick();
        }
    }

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
                type='text'
                name='username'
                placeholder='사용자명'
                value={username}
                onChange={onChange}
            />
            <input
                type='text'
                name='message'
                placeholder='입력해봐라'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;