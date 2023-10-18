import Comment from "./Comment";

// 댓글들을 포함하는 컴포넌트
const comments = [
  {
    name: '홍길동',
    content: '안녕하세요, 반갑습니다.'
  },
  {
    name: '유재석',
    content: '리액트 재미있어요~!.'
  },
  {
    name: '이이경',
    content: '저도 리액트 배워보고 싶어요!!.'
  },
  {
    name: '이미주',
    content: '리액트 너무 어려웡~'
  },
];

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* Quiz: props를 추가하여 name과 content 값 전달 */}
      {/* <Comment name="진행" content= "첫 방문입니다."/>
      <Comment name="재석" content= "props 재밌어요." />
      <Comment name="종국" content= "리액트 배우길 잘했어요." /> */}

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용 (map(): 배열 안에 있는 각 요소를 이용하여 새로운 배열을 만듦) 일반 데이터
      배열을 리액트 엘리먼트 이루어진 배열로 만들면 됨 */}
      {comments.map((comment, index) => {
        return (
          <Comment key={index} name={comment.name} content={comment.content}/>
        );
      })}
      {/* map() 함수의 결과 */}
      {[
          <Comment key={0} name={'홍길동'} content={'안녕하세요, 반갑습니다.'}/>,
          <Comment key={1} name={'유재석'} content={'리액트 재미있어요~!.'}/>,
          <Comment key={2} name={'이이경'} content={'저도 리액트 배워보고 싶어요!!.'}/>,
          <Comment key={3} name={'이미주'} content={'리액트 너무 어려웡~'}/>
      ]}
      {/* 코드 단축 시 */}
      {comments.map((comment, index) => <Comment key={index} name={comment.name} content={comment.content}/>)}
    </div>
  );
}

export default CommentList;