import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import styled from 'styled-components';

const TodoBoardStyle = styled.div`
    overflow-y: auto;
    flex: 1;
    width: 100%;
    background: #ddd;
`;

export default function TodoBoard (){
    return (
        <TodoBoardStyle>
            <TodoList />
            <TodoCreate />
        </TodoBoardStyle>
    );
}