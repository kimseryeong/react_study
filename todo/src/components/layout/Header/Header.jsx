import './Header.css';
import Login from './Login';
import Signup from './Signup';
import React, { useEffect, useReducer, useState } from 'react';
import { atom, useRecoilState } from 'recoil';


const sessionStorageEffect = (key) => ({setSelf, onSet}) => {
    const savedValue = sessionStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue)); //atom값 변경하는 함수
    }
    
    //atom값 변경될 때 실행되는 콜백함수
    onSet((newValue, _, isReset) => { //isReset: 초기화 여부 반환 
        isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
};

// const currUserEmail = atom({
//     key: 'currUser'
//     ,default: null
//     ,effects: [
//         sessionStorageEffect('userEmail')
//     ]
// })



const onLogout = () => {
    //     window.sessionStorage.removeItem('userInfo');
}

const Header = () => {
    //const [currUserInfo, setCurrUserInfo] = useRecoilState(currUserEmail);
    //console.log('Header.jsx / 현재 세션 이메일 정보: ', currUserInfo);

    console.log('props:');
    console.log();
    // const [isLogin, setIsLogin] = useState(false);
    const userEmail = sessionStorage.getItem('userEmail');
    //console.log('email: ', userEmail);

    const initialState = {
        isLogin: false
        ,user: {}
    }

    //const initial = !userEmail ? initialState : JSON.stringify(userEmail);
    // cosnt [StaticRange, dispatch] = useReducer(reducer, initial);

    const userName = sessionStorage.getItem('userName');
    const isLogin = !userEmail ? false : true;
    


    return (
        <header className='header'>
            <p className='logo'>ToDoList</p>
            <div className='btn-contents'>
                {isLogin ? 
                    <>
                        <p className='userInfo'>{ userName }</p>
                        <button onClick={onLogout}>Logout</button>
                    </>
                    : 
                    <div>
                        <Login propsFunction={sessionStorageEffect}>Login</Login>
                        <Signup>Sign Up</Signup>
                    </div>
                }
                
            </div>
        </header>
    );
}

export default Header;