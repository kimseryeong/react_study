import TodoTemplate from './components/todo/TodoTemplate';

import { supabaseClient } from './lib/client';
import { dateState, todoState, userState } from './lib/Atom';

import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

// const loadTodoList = async (uuid, date, setDataList, setTodoList, setError) => {

//     const {data, error} = await supabaseClient.from('todolist')
//         .select('*')
//         .eq('id', uuid)
//         .eq('start_date', date)
    
//     if(error) {
//         alert('문제가 발생했습니다. 다시 시도하세요.');
//         setError('데이터 로드 중 문제가 발생했습니다.');
//         console.log(error);
//         return;
//     }
//     else{
//         console.log('조회성공 >> ');
//         console.log(data);
//         setDataList(data);
//         setTodoList(data);
//     }


// }

export default function TodoProvider(){
    const userInfo = useRecoilValue(userState);
    const uuid = userInfo ? userInfo.id : '';
    const date = useRecoilValue(dateState);
    const [dataList, setDataList] = useState([]);
    const [todoList, setTodoList] = useRecoilState(todoState)
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     if(uuid) loadTodoList(uuid, date, setDataList, setTodoList, setError);
    // }, [userInfo, date]);

    if (error) {
        return <div>{error}</div>;
    }
    
    return (
        <TodoTemplate></TodoTemplate>
    );
}