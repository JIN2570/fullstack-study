import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearSelectedProduct, getSlectedProduct, selectSelectedProduct } from '../features/product/productSlice';
import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';
import TabContenets from '../components/TabContenets';


// 스타일드 컴포넌트 이용한 에니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail(props) {
  // URL 파라미터 가져오기
  const { productId } = useParams();
  const dispath = useDispatch();
  const product = useSelector(selectSelectedProduct);
  const [orderCount, setOrderCount] = useState(1); // 주문수량
  const [showTabIndex, setShowTabIndex] = useState(0); // 탭 상태
  const [showTabList, setShowTabList] = useState('detail');

  // 숫자 포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });




  const [showInfo, setShowInfo] = useState(true); // Info Alert창 상태
console.log(product);
  useEffect(() => {
    // Info 띄우고 3초 뒤에 사라지게 만들기
    const timeout =  setTimeout(() => {
    setShowInfo(false);
    }, 3000);
    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleChangeOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사
    if (isNaN(e.target.value)) {
      toast.error('💯숫자만 입력하세요!')
      return;
    }
    setOrderCount(Number(e.target.value));
  };



  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/JIN2570/API-JSON/products/${productId}`);
        dispath(getSlectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductById();

      // 상세 페이지가 언마운트 될 때 전역 상태 초기화
  return () => {
    dispath(clearSelectedProduct())
  };
  }, []);

  // 없는 상품일 때 예외 처리
  if (!product) {
    return null; // 아무것도 렌더링하지 않음
  }

  return (
    <Container className='pt-3'>
      {/* Alert을 띄우고 3초 뒤에 사라지게 만들기
        힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정
      */}
      {showInfo &&
      <StyledAlert variant='info' onClick={() => setShowInfo(false)} dismissible>
        현재 34명이 이 상품을 보고 있습니다.
      </StyledAlert>
      }
      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>{ formatter.format(product.price)}원</p>

          <Col md={4} className='m-auto mb-3'>
            <Form.Control type='text' value={orderCount} onChange={handleChangeOrderCount} />
          </Col>

          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>

      {/* 탭 버튼 UI 만들기 */}
      <Nav variant="tabs" defaultActiveKey="/home" className='my-3'>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-0" onClick={() => setShowTabIndex(0)}>상세정보</Nav.Link> */}
          <Nav.Link eventKey="link-0" onClick={() => setShowTabList('detail')}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-1" onClick={() => setShowTabIndex(1)}>리뷰</Nav.Link> */}
          <Nav.Link eventKey="link-1" onClick={() => setShowTabList('review')}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-2" onClick={() => setShowTabIndex(2)}>Q&amp;A</Nav.Link> */}
          <Nav.Link eventKey="link-2" onClick={() => setShowTabList('qa')}>Q&amp;A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-3" onClick={() => setShowTabIndex(3)}>반품/교환정보</Nav.Link> */}
          <Nav.Link eventKey="link-3" onClick={() => setShowTabList('exchange')}>반품/교환정보</Nav.Link>
        </Nav.Item>
      </Nav>
    {/* 방법2: 컴포넌트로 추출 */}
    {/* <TabContenets showTabIndex={showTabIndex} /> */}

    {/* 방법3: 배열이나 객체 형태로 만들어서 조건부 렌더링(편법) */}
    {/* 배열 형태 */}
    {/* {
      [
        <div>탭 내용1</div>,
        <div>탭 내용2</div>,
        <div>탭 내용3</div>,
        <div>탭 내용4</div>
      ][showTabIndex]
    } */}

    {/* Quiz: 객체 형태 조건부 렌더링 */}
    {
      {
        'detail': <div>탭 내용1</div>,
        'review': <div>탭 내용2</div>,
        'qa': <div>탭 내용3</div>,
        'exchange': <div>탭 내용4</div>,
      }[showTabList]
      
    }
    </Container>
  );
}

export default ProductDetail;   