import styled, { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css' // bootsteap CSS 추가
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Main from "./page/Main";


const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center; // 디자인 편하게 하려고 꼼수
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

const StyledButton = styled(Button)`

`;


function App() {
  return (
    <>
      <GlobalStyle />
      {/* 부트스트랩 연습 */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* <button type="button" className="btn-btn-primary">Primary</button> */}

      {/* 헤더 영역: 상단 내비게이션 바 */}
      {/* <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">진행 바</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header> */}
      {/* Quiz: Layout 컴포넌트로 추출 및 Outlet을 활용하여 라우팅 구성해보기 */}
      {/* src/page/Layout.js */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        {/* index: index route(여기서는 default child route) */}

        {/* <Route path="cart" element={undefined} /> */}
      </Routes>
    </>
  );
}

export default App;


// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 너눈 기존 것이 더 익숙하다 싶으면 기존 부트스트랩을 써도 무관
// https://react-bootstrap.netlify.app/

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios