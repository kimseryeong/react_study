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
  *   - 문자, 숫자, array, object 모든 형식 다 가능
  *   - 웹이 App 처럼 동작하게 만들고 싶을 때 유용 
  *     (데이터가 바뀌는 경우 HTML이 자동으로 재렌더링이 됨)
  *   - 자주 변경되는 중요한 데이터를 state로 저장해서 사용 ⭐⭐
  */
  let [title, changeTitle] = useState(['여자 상의 추천', '여자 하의 추천', '남자 상의 추천']); //[a, b] 형태

  console.log(title);
  console.log(changeTitle);

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className="list">
        
        <h3> { title[0] } <span onClick={() => {1+1}}>❤️</span> 0 </h3>
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

      
      <img src={ logo }/>
    </div>
  );
}

export default App;
