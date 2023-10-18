import Profile from "../Profile";
import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";

function PropsUse() {
  return (
    <>
      <Profile 
        // 키-값 쌍의 형태로 자식 컴포넌트에 props를 전달할 수 있음
        // 정수, 변수, 다른 컴포넌트 등 값을 넣을 때는 {}로 감싼다.
        // 문자열은 {} 생략 가능
        name="고니"
        introduction="안녕하세요. 고니입니다."
        viewCount={1500}
      />

      <Layout
        width={2500}
        height={1440}
        // props로 다른 컴포넌트를 넘기는 것도 가능
        header={
          <Header title="고니의 블로그입니다." />
        }
        footer={
          <Footer />
        }
      />
    </>
  );
}

export default PropsUse;