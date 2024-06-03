import React, { useEffect, useState, useReducer } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Modal from 'react-modal';

import { supabaseClient } from '../../../lib/client';

type Inputs = {
    email: String;
    name: String;
    password: String;
    passwordCheck: String;
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Signup = ({children}) => {
    // console.log(supabaseClient);

    //react-hook-form lib
    const {
        register
        ,handleSubmit
        ,watch
        ,setError
        ,formState: { errors }
    } = useForm();

    const onSubmit = (data) => onSignUp(data);

    // console.log(watch('email'));

    const [state, dispatch] = useReducer(reducer, {
        email: ''
        ,name: ''
        ,password: ''
        ,passwordCheck: ''
    });
    
    // const { email, name, password, passwordCheck } = state;
    const onChange = (e) => dispatch(e.target);
    
    const style = {
        overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000}
        ,content: {
            textAlign: 'center'
            ,width: '400px'
            ,height: '500px'
            ,margin: 'auto'
            ,borderRadius: '10px'
            ,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            ,padding: '20px'
        }
    }

    const [signupOpen, setSignupOpen] = useState(false);

    //signup click
    const signupClick = () => {
        setSignupOpen(true);
    }

    //signup modal close
    const closeSignup = () => {
        setSignupOpen(false);
    }

    //비밀번호 확인
    // let isSame = false;
    // const onPwCheck = (e) => {
    //     console.log(`watch('password'): ${watch('password')}`);
    //     console.log(`value: ${e.target.value}`);
        
    //     if(watch('password') === watch('passwordCheck')){
    //         isSame = true;
    //     }
    // }
    // console.log(isSame);
    // {!isSame ? <span className='err'>비밀번호가 일치하지 않습니다.</span> : <span></span>}
    // console.log(watch('password'));
    // console.log(watch('passwordCheck'));
    //  = (watch('password') === watch('passwordCheck ')
    //     && watch('password') !== '' 
    //     && watch('passwordCheck ') !== '');

    //supabase signup
    const onSignUp = async (input_data) => {
        
        
        // if(!isSame){
        //     alert('비밀번호 틀림');
        //     return;
        // }

        try{
            const { data, error } = await supabaseClient
                .from('USER_INFO')
                .insert([
                { email: input_data.email, name: input_data.name, password: input_data.password },
                ])
                // .select()    

            if (data){
                console.log('data: ', data);
            }
        }
        catch (error) {
            alert('문제발생');
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={signupClick}>{children}</button>

            <Modal
                isOpen={signupOpen}
                onRequestClose={closeSignup}
                style={style}
            >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='signup-wrap'>
                    <h1>{children}</h1>

                    <div className='input-wrap wrap'>
                        {/* <span className='input_title'>email</span> */}
                        <input 
                            className='input_row' 
                            type='text' 
                            name='email' 
                            placeholder='email'
                            {...register('email', 
                                { required: true 
                                , pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    ,message: "invalid email address"
                                }
                                }
                            )}
                            // onChange={onChange} 
                            // required
                        />
                        {errors.email && <span className='err'>Check your email</span>}
                        <input 
                            className='input_row' 
                            type='text' name='name' 
                            placeholder='name' 
                            {...register('name', { required: true })}
                            // onChange={onChange} 
                            // required
                        />
                        <input 
                            className='input_row' 
                            type='password' 
                            name='password' 
                            placeholder='password' 
                            {...register('password', { required: true })}
                            // onChange={onChange} 
                            // required
                        />
                        <input 
                            className='input_row' 
                            type='password' 
                            name='passwordCheck' 
                            placeholder='check your password' 
                            {...register('passwordCheck', { required: true })}
                            // onChange={onPwCheck} 
                            // required
                        />
                        
                        {errors.passwordCheck && <span>This field is required</span>}
                    </div>
                    <div className='btn-wrap wrap'>
                        <button className='btn' onClick={closeSignup}>cancel</button>
                        <button className='btn backColor' type='submit'>{ children }</button>
                        {/* <button className='btn backColor' onClick={onSignUp}>{ children }</button> */}
                    </div>
                </div>
            </form>
            </Modal>
        </>
    );
}
export default Signup;