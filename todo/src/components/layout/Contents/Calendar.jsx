import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { dateState, todoState, userState, errorState } from '../../../lib/Atom';


import { FullCalendarContainer } from './FullCalendarContainer'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  //boot5
import { useEffect } from 'react';


// const events = [
//     {title: 'event1', start: new Date()},
//     {
//         id:'event2',
//         title: 'event2',
//         start: '2024-06-02', 
//         end: '2024-06-04', 
//         backgroundColor: '#A9CCE3', 

//     },
//     {title: 'event10', start: '2024-06-02', end: '2024-06-07', backgroundColor: '#A9CCE3'},
//     {title: 'event3', start: '2024-06-07', backgroundColor: '#A9CCE3'},
// ]

const date = () => {

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth()+1;
    
    return `${year}  ${month}`;
}

export default function Calendar () {
    const setTodoList = useSetRecoilState(todoState); 
    const setError = useSetRecoilState(errorState);
    const currDate = useRecoilValue(dateState);
    const userInfo = useRecoilValue(userState);
    const uuid = userInfo ? userInfo.id : '';

    //06.11-----------------------------------------------------

    //06.11-----------------------------------------------------


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
                    // events={events}
                    viewHeight={300}
                    themeSystem='bootstrap5'
                    headerToolbar={{
                        start: 'title',
                        center: '',
                        end: 'prev today next'
                    }}
                    // navLinks={true}
                    // navLinkDayClick={(date, e)=>{ //date 클릭
                    //     console.log(date); 
                    //     console.log(date.toISOString()); 
                    //     console.log(e.pageX, e.pageY)
                    //     console.log(e.srcElement.classList);
                    //     console.log(this);
                    // }}
                    dateClick={(arg) => renderTodo(arg.date)}
                    eventClick={(info) => console.log('클릭',info.event._def)} //이벤트 클릭
                />
                
            </FullCalendarContainer>
        </>
    );
}