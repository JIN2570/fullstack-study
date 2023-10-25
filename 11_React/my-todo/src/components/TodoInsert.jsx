import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd, MdRoom, MdRocket } from "react-icons/md";


const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;

`;

const StyledInput = styled.input`
/* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기

  &::placeholder {
    color: #dee2e6;
  }


`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  cursor: pointer;
  transition: 0.2s background;

  &:hover {
    background: #adb5bd
  }
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// State를 통해 input의 상태를 관리
function TodoInsert({ onInsert }) {
const [value, setValue] = useState('');

const handleChange = (e) => {
  setValue(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();

  // 유효성 검사 추가
  if (!value) { // '', null, undefined
    alert('무엇을 할 지 내용을 입력하세요!');
    return;

  }

  onInsert(value);
  setValue(''); // value값 초기화
};

  return (
    // form 태그 사용 시 input에서 엔터키를 눌렀을 때도 submit 이벤트가 발생
    // (참고) 일반적으로 keyup 이벤트를 통해 엔터키를 감지하는 로직을 작성
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
      type="text" 
      placeholder="할 일을 입력하세요."
      onChange={handleChange}
      value={value}
      // onKeyUp={(e) => {
      //   console.log(e.key);
      //   if (e.key === 'Enter') {
          
      //   }
      // }}
      />
      <StyledButton  type="submit">
        <MdAdd />
      </StyledButton>
    </TodoInsertWrapper>
  );
}


export default TodoInsert;