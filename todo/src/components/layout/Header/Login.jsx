import React, { useState } from 'react';
import Modal from 'react-modal';
import { supabaseClient } from '../../../lib/client';
import { useForm, SubmitHandler } from "react-hook-form"
import { atom, useRecoilState } from 'recoil';


const style = {
    overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000}
    ,content: {
        textAlign: 'center'
        ,width: '400px'
        ,height: '300px'
        ,margin: 'auto'
        ,borderRadius: '10px'
        ,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        ,padding: '20px'
    }
}


const Login = ({children, propsFunction, props}) => {

    console.log('login userinfo:', props);

    const {
        register
        ,handleSubmit
        ,watch
        ,setError
        ,formState: { errors }
    } = useForm();

    const onSubmit = (data) => onLogin(data);
    
    const [loginOpen, setLoginOpen] = useState(false);

    const loginClick = () => {
        setLoginOpen(true);
    }

    const reset = () => {
        
    }
    const closeLogin = () => {
        reset();
        setLoginOpen(false);
    }

    
    const onLogin = async (inputData, props) => {
        
        let { data, error } = await supabaseClient.auth.signInWithPassword({
            email: inputData.email,
            password: inputData.password
        })

        closeLogin();
        if(error) {
            alert('로그인 실패 !!!!');
            console.log(error);
            return;
        }

        console.log('로그인 완료');
        console.log(data);

        

    }


    return (
        <>
            
            <button onClick={loginClick}>{children}</button>

            <Modal
                isOpen={loginOpen}
                onRequestClose={closeLogin}
                style={style}
            >
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>{children}</h1>
                <div className='input-wrap wrap'>
                    <input 
                        className='input_row' 
                        type='text' 
                        name='email' 
                        placeholder='email'
                        {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                    />
                    {errors.email && <span className='err'>Check your email</span>}
                    <input 
                        className='input_row' 
                        type='password' 
                        name='password' 
                        placeholder='password'
                        {...register('password', {required: true})}
                    />
                </div>
                <div className='btn-wrap wrap'>
                    <button className='btn' onClick={closeLogin}>cancel</button>
                    <button className='btn backColor' type='submit'>{ children }</button>
                </div>
            </form>
            </Modal>
        </>

    );
}
export default Login;