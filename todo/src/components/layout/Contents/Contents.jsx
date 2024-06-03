import { useState } from 'react';
import Calendar from './Calendar';
import './Contents.css';
import { dateState } from '../../../lib/Atom';

import { useRecoilValue } from 'recoil';

const date = () => {

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth()+1;
    
    return `${year}  ${month}`;
}


export default function Contents () {
    const clickDate = useRecoilValue(dateState);
    const today = `
        ${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getDate().toString().padStart(2, '0')}
    `;
    
    const onCreate = () => {
        
    }

    return (
        <main className='contents'>
            <div className='left'>
                <Calendar 
                    inputDate={date}
                />
            </div>
            <div className='right'>
                <div className='date-wrap'>
                    <h1>{clickDate ? clickDate : today}</h1>
                </div>
                <input 
                    type='text'

                />
                <button onClick={onCreate}>create</button>
            </div>
        </main>
    );
}

