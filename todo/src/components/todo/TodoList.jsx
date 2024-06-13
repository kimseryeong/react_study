import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../lib/client';
import { dateState, userState, todoState, todosRender } from '../../lib/Atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const TodoListStyle = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px;
`;


const loadTodoList = async (uuid, date, setDataList, setTodoList, setError) => {

    if(!uuid){
        console.log('로그인 정보 없음');
        return;
    }
    const {data, error} = await supabaseClient.from('todolist')
        .select('*')
        .eq('id', uuid)
        .eq('start_date', date)
    
    if(error) {
        alert('[ TodoList > loadTodoList ] 문제가 발생했습니다.');
        setError('[ TodoList > loadTodoList ] 데이터 로드 중 문제가 발생했습니다.');
        console.log(error);
        return;
    }
    else{
        console.log('[ TodoList > loadTodoList ] 조회성공 >> ');
        console.log(data);
        setDataList(data); //지역상태
        setTodoList(data); //recoil
    }

}

export default function TodoList (){
    const userInfo = useRecoilValue(userState);
    const uuid = userInfo ? userInfo.user.id : null;
    const date = useRecoilValue(dateState);
    const [dataList, setDataList] = useState([]);
    const [todoList, setTodoList] = useRecoilState(todoState)
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        if(!userInfo) return;
        loadTodoList(uuid, date, setDataList, setTodoList, setError);
    }, [uuid, date])
    
    const currTodos = useRecoilValue(todosRender);
    console.log('currTodos');
    console.log(currTodos);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <TodoListStyle>
            {
                currTodos && currTodos.map((v, i) => <TodoItem key={i} text={v.title} idx={v.idx} done={v.complete_state}/>)
            }
        </TodoListStyle>
    );
}