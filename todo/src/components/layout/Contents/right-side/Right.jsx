const date = () => {

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth()+1;
    
    return `${year}  ${month}`;
}

const onCreate = () => {
    const date = prompt('YYYY-MM-DD 형식 날짜 입력 >> ');

    console.log(date);
    return date;
}


export default function Right() {
    return (
        <div className='right'>
            <div>
                {date()}
            </div>
            <input 
                type='text'

            />
            <button onClick={onCreate}>create</button>
        </div>
    );
}
