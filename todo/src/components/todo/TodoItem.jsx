export default function TodoItem ({text}){
    return (
        <div>
            <div>체크표시</div>
            <div>{text}</div>
            <div>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
    );
}