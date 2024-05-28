import React, {Component} from 'react';

class Counter extends Component {

    //state 초기값 설정하는 방법 1 
    //: constructor 내에 this.state로 작성 
    // constructor(props){
    //     super(props); //반드시 super 호출
    //     this.state = { //초기값 설정하기
    //         number: 0
    //         ,fixedNumber: 0 //state 초기값 여러 개 설정하면?
    //     }
    // }

    //state 초기값 설정하는 방법 2
    //: state 객체 생성
    state = {
        number: 0
        , string: 'coffee'
        , fixedNumber: 0
    }

    render(){
        const { number, fixedNumber, string } = this.state; //state 조회
        const style = {
            backgroundColor: 'skyblue'
            , padding: 20
        };

        return (
            <div style={ style }>
                <h1>{ number }</h1>
                <h2>고정값: { fixedNumber }, { string } 마시고 싶당</h2>
                <button onClick={ () => {
                    //this.setState 사용하여 state에 새로운 값 삽입
                    this.setState({ number: number + 1 })
                    
                    //this.setState 내에 함수 삽입
                    //prevState: 기존 상태, props: 현재 상태
                    this.setState((prevState, props) => ({ 
                        //업데이트 하고 싶은 내용 삽입
                        number: prevState.number + 1
                    }));

                    //setState() 사용하여 값 없데이트 후 특정 로직을 실행하고 싶을땐
                    //두번째 파라미터로 콜백 함수 등록가능
                    this.setState(
                        {number: number + 1},
                        () => { 
                            console.log('방금 setState가 호출됨');
                            console.log(this.state);
                         }
                    )
                } }> + 1</button>
                <button onClick={ () => {
                    //this.setState 사용하여 state에 새로운 값 삽입
                    this.setState({ number: number - 1 })
                } }> - 1</button>
            </div>
        );
    }
}

export default Counter;