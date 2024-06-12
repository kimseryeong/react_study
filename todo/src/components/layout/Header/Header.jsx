import { supabaseClient } from '../../../lib/client';
import { userState } from '../../../lib/Atom';
import './Header.css';
import Login from './Login';
import Signup from './Signup';
import React, { useEffect, useReducer, useState } from 'react';
import { useRecoilState } from 'recoil';


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


//06.11----------------------------------------------------
const onLogout = async () => {
    
    let { error } = await supabaseClient.auth.signOut()
    if(error) {
        console.log(error);
        return;
    }
    alert('로그아웃 성공')
}
//06.11----------------------------------------------------

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
    

    //06.11 user session recoil 다시 담기-----------------------------------------
    const [session, setSession] = useRecoilState(userState);
    useEffect( ()=>{
        supabaseClient.auth.getSession().then(({data: {session}}) => {
            setSession(session);
        })
        supabaseClient.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
    }, [setSession])

    console.log('session');
    console.log(session);

    //06.11 ---------------------------------------------------------------------

    return (
        <header className='header'>
            <p className='logo'></p>
            <div className='btn-contents'>
                {session ? 
                    <>
                        <p className='userInfo'>{ session.user.email }</p>
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