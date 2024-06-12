import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { supabaseClient } from '../../lib/client';
import { dateState, errorState, todoState, userState } from '../../lib/Atom';

import { onCreateTodo } from '../../API';

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

export default function TodoCreate (){

    const [newTodo, setNewTodo] = useState('');

    const date = useRecoilValue(dateState);
    const userInfo = useRecoilValue(userState);
    const uuid = userInfo ? userInfo.user.id : null;
    const setError = useSetRecoilState(errorState);
    const setTodoList = useSetRecoilState(todoState);
    
    const [isOpen, setIsOpen] = useState(false);
    const onModal = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    //06.12
    const onCreate = async () => {
        console.log('onCreate');

        const data = await onCreateTodo(uuid, date, newTodo, onClose, setError);
        setTodoList((prev) => [...prev, data]);
    }
    //06.12

    return (
        <>
            {userInfo ? <button onClick={onModal}>+ 할 일 추가</button> : <div>로그인 후 이용가능합니다.</div>}
            
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}    
                style={style}
            >
                할 일 추가 모달
                <input type='text' name='newTodo' onChange={(e) => setNewTodo(e.target.value)}/>
                <button onClick={onCreate}>등록</button>
                <button onClick={onClose}>취소</button>
            </Modal>
        
        </>
    );
}