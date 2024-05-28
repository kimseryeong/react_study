import React, { Component } from 'react';

class ScrollBox extends Component{
    //스크롤바 맨 아래로 내리는 메서드
    scrollToBottom = () => {
        //scrollTop: 세로 스크롤바 위치
        //scrollHeight: 스크롤이 있는 박스 안의 div 높이 (== 650)
        //clientHeight: 스크롤이 있는 박스의 높이(300)
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    //스크롤바 맨 위로 올리는 메서드
    scrollToTop = () => {
        this.box.scrollTop = 0;
    }

    render(){

        const style = {
            border: '1px solid black'
            ,height: '300px'
            ,width: '300px'
            ,overflow: 'auto'
            ,position: 'relative'
        };

        const innerStyle = {
            width: '100%'
            ,height: '650px'
            ,background: 'linear-gradient(white, black)'
        }

        return (
            <div style={style} ref={(ref) => this.box=ref}>
                <div style={innerStyle}></div>
            </div>
        );
    }
}
export default ScrollBox;