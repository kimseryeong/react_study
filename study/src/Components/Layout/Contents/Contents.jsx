import LeftContents from './LeftContents';
import RightContents from './RightContents';
import './Contents.css';

const Contents = () => {
    return (
        <main className='contents'>
            <LeftContents />
            <RightContents />
        </main>
    );
}

export default Contents;