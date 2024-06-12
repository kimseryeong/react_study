import { onUpdateTodo, onDeleteTodo } from '../../API';
import { todoState, userState } from '../../lib/Atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { Modal } from 'react-modal';
import { useState } from 'react';


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

export default function TodoItem ({text, idx}){

    const setTodoList = useSetRecoilState(todoState);
    const userInfo = useRecoilValue(userState);
    const uuid = userInfo ? userInfo.user.id : null;
    const [newTodo, setNewTodo] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const onModal = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    //수정
    const onUpdate = async () => {
        console.log('onUpdate');

        const data = await onUpdateTodo(uuid, idx, newTodo, onClose);
        setTodoList((prev) => [...prev, data]);
    }

    //삭제
    const onDelete = async () => {
        console.log('onDelete');

        const data = await onDeleteTodo(uuid, idx);
        setTodoList((prev) => [...prev, data]);
    }



    return (
        <>
            <div>체크표시</div>
            <div>{text}</div>
            <div>
                <button onClick={onModal}>수정</button>
                <button onClick={onDelete}>삭제</button>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}    
                style={style}
            >
                할 일 수정 모달
                <input type='text' name='newTodo' onChange={(e) => setNewTodo(e.target.value)}/>
                <button onClick={onUpdate}>수정</button>
                <button onClick={onClose}>취소</button>
            </Modal>
        </>
    );
}