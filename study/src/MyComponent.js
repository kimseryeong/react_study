import PropTypes from 'prop-types';

const MyComponent = ({name, children, favoriteNumber}) => {
    const style = {
		backgroundColor: 'pink'
		,color: 'black'
		,padding: 16
	};

    return (
        <div style={ style }>
            <h3>나의 새롭고 멋진 컴포넌트</h3>
            안녕하세요, 제 이름은  { name } 입니당 ^^*
            <br></br>
            children 값은 { children } 입니당 !
            제가 좋아하는 숫자는 { favoriteNumber } 입니당 👽👽
        </div>
    );
};

//props type 설정하기 
MyComponent.propTypes = {
    name: PropTypes.string
    ,favoriteNumber: PropTypes.number.isRequired
};


export default MyComponent;