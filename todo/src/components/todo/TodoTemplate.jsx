import TodoHead from './TodoHead';
import TodoBoard from './TodoBoard';
import styled from 'styled-components';

const TodoTemplateStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export default function TodoTemplate(){
    return (
        <TodoTemplateStyle>
            <TodoHead />
            <TodoBoard />
        </TodoTemplateStyle>
    );
}