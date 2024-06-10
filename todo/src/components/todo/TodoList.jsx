import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../lib/client';

const TodoListStyle = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const todoList = [
    {
        id: 1
        ,title: `todoList 1`
        
    }
    ,{
        id: 2
        ,title: `todoList 2`
        
    }
]
const uuid = ''
const loadTodoList = async (setError, setDataList) => {
    if (!uuid) {
        alert('uuid 없음!!');
        setError('UUID가 없습니다.');
        return;
    }

    const {data, error} = await supabaseClient.from('todolist')
        .select('*')
        .eq('id', uuid)
        .eq('start_date', '2024-06-10')
    
    if(error) {
        alert('문제가 발생했습니다. 다시 시도하세요.');
        setError('데이터 로드 중 문제가 발생했습니다.');
        return;
    }
    else{
        console.log('조회성공 >> ');
        console.log(data);
        setDataList(data);
    }

}

export default function TodoList ({uuid}){
    const [dataList, setDataList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTodoList(uuid, setDataList, setError);
    }, [uuid]);

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <TodoListStyle>
            
            {
                dataList.length > 0
                ? dataList.map((v, i) => <TodoItem key={i} text={v.title} />)
                : <div>할 일이 없습니다.</div>
            }
        </TodoListStyle>
    );
}