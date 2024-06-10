import { dateState } from '../../lib/Atom';
import { useRecoilValue } from 'recoil';



export default function TodoHead(){
    const date = () => {
    
        const newDate = new Date();
        const year = newDate.getFullYear();
        const month = newDate.getMonth()+1;
        
        return `${year}  ${month}`;
    }
    const clickDate = useRecoilValue(dateState);
    const today = `
        ${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getDate().toString().padStart(2, '0')}
    `;
    
    return (
        <>
            <div className='date-wrap'>
                <h1>{clickDate ? clickDate : today}</h1>
            </div>
            {/* <TodoTemplate/> */}
        </>
    );
}