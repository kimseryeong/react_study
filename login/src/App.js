import logo from './logo.svg';
import './App.css';
import kakaoLoginImg from './kakao_login_medium_narrow.png'
import { BrowserRouter } from 'react-router-dom';


function App() {
  const Rest_api_key='a3b5b2dffeffac10518565f633af9f12' //REST API KEY
  const redirect_uri = 'http://localhost:3000/oauth' //Redirect URI
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  const token = new URL(window.location.href).searchParams.get("code");

  // console.log(token);
  return (
    <>
        <a href={KAKAO_AUTH_URL}>
          <img src={kakaoLoginImg}/>
        </a>
    </>
  ) 

}
//export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const SocialKakao = ()=>
  {
      const Rest_api_key=`${process.env.REACT_APP_KAKAO_API}` //REST API KEY
      const redirect_uri = 'http://localhost:3000/oauth' //Redirect URI
      // oauth 요청 URL
      const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
      const handleLogin = ()=>{
          window.location.href = kakaoURL
      }
      return(
      <>
      <button onClick={handleLogin}>카카오 로그인</button>
      </>
      )
  }
  const code = new URL(window.location.href).searchParams.get("code");


export default App;
