import { onUpdateTodo, onDeleteTodo, onChangeCheck } from '../../API';
import { todoState, userState } from '../../lib/Atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import styled, {css} from 'styled-components';
import Modal from 'react-modal';

const ItemStyle = styled.div`
    display:flex;
    margin: 10px;

    .buttons{
        margin-left: auto;
    }
`;

const Check = styled.div`
    border: 1px solid black;
    margin-right: 10px;
    width: 35px;
    height: 25px;

    ${props => props.done && css`
        border: 1px solid #7FB3D5;
        color: #7FB3D5;
        text-decoration: line-line-through;
    `}
`;

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

export default function TodoItem ({text, idx, done}){

    // console.log(text, idx, done);

    const [doneState, setDoneState] = useState(done);
    // const boolDone = done === 'N' ? false : true;

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
        setTodoList((prev) => prev.map(t => t.idx === data.idx ? data : t));
    }

    //삭제
    const onDelete = async () => {
        console.log('onDelete');

        await onDeleteTodo(uuid, idx);
        setTodoList((prev) => prev.filter(t => t.idx !== idx));
    }

    //완료체크
    const onCheck = async () => {
        console.log('현재완료상태: ', done);

        const data = await onChangeCheck(idx, !done);
        console.log(data);
        setTodoList((prev)=> prev.map(t => t.idx === data.idx ? data : t));
    }

    // console.log(doneState);

    return (
        <ItemStyle>
            <Check done={done} onClick={onCheck}>{done && '완료'}</Check>
            <div>{text}</div>
            <div class="buttons">
                <button onClick={onModal}>수정</button>
                <button onClick={onDelete}>삭제</button>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={style}
            >
                할 일 수정 모달
                <input type='text' name='newTodo' onChange={(e) => setNewTodo(e.target.value)} placeholder={text}/>
                <button onClick={onUpdate}>수정</button>
                <button onClick={onClose}>취소</button>
            </Modal>
        </ItemStyle>
    );
}