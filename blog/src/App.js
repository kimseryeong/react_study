//출처 : 코딩애플 Youtube - 리액트 기초

import React, { useState } from 'react'; //리액트 내장 함수 state 사용
import logo from './logo.svg'; //로고 이미지 import 후 변수처럼 사용
import './App.css';

function App() {
  
  
  /** 📌 state
  *   - useState() 리액트 내장 함수 import 후 사용
  *     import React, { useState } from 'react';
  *   - 변수 대신 사용하는 데이터 저장 공간
  *   - ES6 distructuring 문법 형식 : [a, b]
  *     a: state, b: state변경 함수
  *   - 문자, 숫자, array, object 모든 형식 다 가능
  *   - 웹이 App 처럼 동작하게 만들고 싶을 때 유용 
  *     (데이터가 바뀌는 경우 HTML이 자동으로 재렌더링이 됨)
  *   - 자주 변경되는 중요한 데이터를 state로 저장해서 사용 ⭐⭐
  */

  let [title, changeTitle] = useState(['여자 상의 추천', '여자 하의 추천', '여자 신발 추천']); //[a, b] 형태
  let [like, changeLike] = useState(0);
  let posts = '강남 고기 맛집';


  //함수 생성 후 onClick 속성에 삽입 -> ()소괄호 없이
  function fnChangeTitle(){

    //state 수정 : 복사본을 만들어서 수정 (deep copy)
    let newArray = [... title];
    newArray[0] = '남자 상의 추천';
    changeTitle( newArray );
  }

  //return 내에는 하나의 <div>만 가능 !!
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ fnChangeTitle }>버튼</button>

      <div className="list">
        <h3> { title[0] } <span onClick={ () => { changeLike(like + 1) } }>❤️</span> { like } </h3>
        <p>5월 14일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>5월 14일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>5월 14일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
      
      
    </div>
  );
}

/* component
    - 반복출현하는 HTML 덩어리들
    - 자주 변경되는 HTML UI 들
    - 다른 페이지를 구성할 때

    <단점>
    - state 쓸 때 복잡해짐
**/
function Modal(){
  return (
    <div className='detailModal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;
