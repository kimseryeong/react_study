import Calendar from './Calendar';
import './Contents.css';
import TodoTemplate from '../../todo/TodoTemplate';

export default function Contents () {


    return (
        <main className='contents'>
            <div className='left'>
                <Calendar />
            </div>
            <div className='right'>
                <TodoTemplate />
            </div>
        </main>
    );
}

