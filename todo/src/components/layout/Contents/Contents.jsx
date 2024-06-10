import { useState } from 'react';
import Calendar from './Calendar';
import './Contents.css';
import TodoTemplate from '../../todo/TodoTemplate';

import { dateState } from '../../../lib/Atom';

import { useRecoilValue } from 'recoil';

const date = () => {

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth()+1;
    
    return `${year}  ${month}`;
}


export default function Contents () {


    return (
        <main className='contents'>
            <div className='left'>
                <Calendar 
                    inputDate={date}
                />
            </div>
            <div className='right'>
                <TodoTemplate />
            </div>
        </main>
    );
}

