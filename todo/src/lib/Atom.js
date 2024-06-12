import { atom, selector } from 'recoil';
import { supabaseClient } from './client';

//사용자 정보 상태
export const userState = atom({
    key: 'globalUserInfo'
    ,default: null
})

//날짜 상태
export const dateState = atom({
    key: 'dateState'
    ,default: `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`
})

//투두리스트 상태
export const todoState = atom({
    key: 'todoState'
    ,default: []
})

//에러 상태
export const errorState = atom({
    key: 'errorState',
    default: null
})

//supabase
// export const filteredTodoState = selector({
//     key: 'filteredTodoState',
//     get: async ({get}) => {
//         const userInfo = get(userState);
//         const date = get(dateState);

//         if(!userInfo) return;

//         const {data, error} = await supabaseClient.from('todolist')
//             .select('title, start_date, idx, complete_state')
//             .eq('id', userInfo.id)
//             .eq('start_date', date)

//         if (error) {
//             console.log('문제가 발생했습니다. 다시 시도하세요.');
//             return;
//             // setError('데이터 로드 중 문제가 발생했습니다.');
//         } else {
//             return data;
//         }
        
//     }
// })