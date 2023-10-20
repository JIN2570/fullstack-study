import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClickLogin = () => {
    setIsLoggedIn(true);
  };

  const handleClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar 
      // Quiz: 로그인 상태와 이벤트 핸들러를 툴바 컴포넌트로 넘겨 로그인 여부에
      // 따라 툴바의 렌더링이 바뀌도록 구현
      isLoggedIn={isLoggedIn}
      onClickLogin={handleClickLogin}
      onClickLogout={handleClickLogout}
      />
      <div style={{ padding: 16 }}>😃리액트 공부 사이트</div>
      {/* 윈도우즈 이모지 단축키: 윈도우키 + 마침표(.) */}
    </div>
  );
}

export default LandingPage;