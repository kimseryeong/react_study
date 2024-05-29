import './Header.css';
import Login from './Login';
import Signup from './Signup';
import React, { useEffect, useReducer, useState } from 'react';



const onLogout = () => {
    window.sessionStorage.removeItem('userInfo');
}

const Header = () => {
    // const [isLogin, setIsLogin] = useState(false);
    const userEmail = sessionStorage.getItem('userEmail');
    console.log('email: ', userEmail);

    const initialState = {
        isLogin: false
        ,user: {}
    }

    const initial = !userEmail ? initialState : JSON.stringify(userEmail);
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
                        <Login>Login</Login>
                        <Signup>Sign Up</Signup>
                    </div>
                }
                
            </div>
        </header>
    );
}

export default Header;