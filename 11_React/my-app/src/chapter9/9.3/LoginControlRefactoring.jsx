import { useState } from "react";
import Greeting from "../9.1/Greeting";


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}


function LoginControlRefactoring() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // if문 사용 + button 변수에 컴포넌트 대입(결과적으로 리액트 엘리먼트가 저장됨)
  // JSX 내부에서 조건부 렌더링해도 됨. 이 방법을 더 많이 쓰는데 JSX 내부에서는 if문 사용 불가
  return (
    <>
    {/* Greeting 컴포넌트의 재사용 */}
    <Greeting isLoggedIn={isLoggedIn} />
    {isLoggedIn
    ? <LogoutButton onClick={handleLogoutClick} />
    : <LoginButton onClick={handleLoginClick} />
    }
    </>
  );
}


export default LoginControlRefactoring;