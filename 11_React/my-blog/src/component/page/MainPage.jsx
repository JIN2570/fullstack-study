import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import PostList from "../list/PostList";

// 서버에서 데이터를 받아왔다고 가정
// CRA로 프로젝트 만들면 import 사용시 알아서 json을 js로 변환해줌
import data from "../../data.json";
import Button from "../ui/Button";



const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;


// 처음 접속 시 보게될 페이지(=컴포넌트)
function MainPage(props) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        {/* 글 작성하기 페이지로 이동하는 버튼 */}
        <Button
          title='글 작성하기'
          onClick={() => {
            navigate('/post-write');
          }}
            
        />

        {/* 글 목록을 표시 */}
        <PostList posts={data} />
      </Container>
    </Wrapper>
  );
}

export default MainPage;