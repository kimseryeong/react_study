import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../lib/client';
import { dateState, userState, todoState, filteredTodoState } from '../../lib/Atom';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

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

    console.log(userInfo);
    console.log(uuid);
    console.log(date);

    useEffect(()=>{
        loadTodoList(uuid, date, setDataList, setTodoList, setError);
    }, [userInfo, date])


    if (error) {
        return <div>{error}</div>;
    }

    console.log('todolist >>')
    console.log(todoList);

    return (
        <TodoListStyle>
            {
                todoList && todoList.map((v, i) => <TodoItem key={i} text={v.title} idx={v.idx}/>)
            }
        </TodoListStyle>
    );
}