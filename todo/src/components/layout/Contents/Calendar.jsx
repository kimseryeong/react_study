import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

// import { loadAllTodos } from '../../../API';
import { dateState, todoState, userState, errorState, calendarEvents, allTodos } from '../../../lib/Atom';


import { FullCalendarContainer } from './FullCalendarContainer'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  //boot5
import { supabaseClient } from '../../../lib/client';
import { useEffect } from 'react';

// const loadAllTodos = async (uuid, setAllTodoList) => {
//     const {data, error} =await supabaseClient.from('todolist').select('*').eq('id', uuid)
    
//     if(error) {
//         console.log('loadAllTodos error');
//         console.log(error);
//         return;
//     }
//     setAllTodoList(data);
// }

// const loadAllTodos = async (uuid) => {
//     if(!uuid) return;

//     // const todos = get(todoState);
//     const {data, error} = await supabaseClient
//         .from('todolist')
//         .select('*')
//         .eq('id', uuid)

//     if(error) {
//         console.log(' calendarEvents fetch error ');
//         console.log(error);
//         return;
//     }

//     console.log(data);
//     const events = data
//         .filter((v) => v.complete_state === true)
//         .map((v) => {
//             return {
//                 title: `📌${v.title}`,
//                 id: `todo_${v.idx}`, 
//                 start: v.start_date, 
//                 backgroundColor: 'transparent',
//                 border: '#A9CCE3',
//                 fontSize: '13px',
//                 fontWeight: '800'
//             }
//         });
//     return events;
// }

export default function Calendar () {
    const setTodoList = useSetRecoilState(todoState); 
    const setError = useSetRecoilState(errorState);
    const currDate = useRecoilValue(dateState);
    const userInfo = useRecoilValue(userState);
    const uuid = userInfo ? userInfo.user.id : '';
    
    //06.13-----------------------------------------------------
    const calEvent = useRecoilValue(calendarEvents);
    console.log(calEvent);
    //06.13-----------------------------------------------------

    // const events = loadAllTodos(uuid);

    const renderTodo = (date) => {
    
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        
        const click = `${year}-${month}-${day}`;
    
        setDate(click);
    }
    const [date, setDate] = useRecoilState(dateState);

    return (
        <>
            <FullCalendarContainer>
                <FullCalendar 
                    plugins={[dayGridPlugin, interaction, bootstrap5Plugin ]}
                    initialView='dayGridMonth'
                    events={calEvent}
                    viewHeight={300}
                    themeSystem='bootstrap5'
                    headerToolbar={{
                        start: 'title',
                        center: '',
                        end: 'prev today next'
                    }}
                    dateClick={(arg) => renderTodo(arg.date)}
                    eventClick={(info) => console.log('클릭',info.event._def)} //이벤트 클릭
                />
                
            </FullCalendarContainer>
        </>
    );
}