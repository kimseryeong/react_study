import { useState } from 'react';
import Modal from 'react-modal';
import { supabaseClient } from '../../lib/client';

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

const uuid = '192954f0-2305-4734-8777-211fd51d7d62'

export default function TodoCreate (){
    

    const [createTodo, setCreateTodo] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const onModal = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const onCreate = async () => {
        console.log(createTodo);

        const {data, error} = await supabaseClient.from('todolist')
            .insert([
                {
                    id: uuid, 
                    title: createTodo, 
                    start_date: '2024-06-10',
                    complete_state: 'N', 
                }
            ])

        debugger;

        if (error) {
            console.log(error);
        } else {
            console.log('성공', data);
        }
        onClose();
    }
    return (
        <>
            <button onClick={onModal}>+ 할 일 추가</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}    
                style={style}
            >
                할 일 추가 모달
                <input type='text' name='newTodo' onChange={(e) => setCreateTodo(e.target.value)}/>
                <button onClick={onCreate}>등록</button>
                <button onClick={onClose}>취소</button>
            </Modal>
        
        </>
    );
}