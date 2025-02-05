// src/pages/BlockCollapsingEffect.js

import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
// import styles from './BlockCollapsingEffect.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Container = styled.div`
*{
    box-sizing: border-box;
    margin: 0;
    font-family: "Google Sans","Arial",sans-serif,"微軟正黑體";
}

body{
    background: #fff;
}

.box2>img{
    max-width: 100% ;
}

.box {
    width: 80%;
    display: flex;
    margin: 3% auto;
    background-color: antiquewhite;
    border-radius: 30px;
    overflow: hidden;
}

.box1,
.box2 {
    width: 50%;
}

.box1 {
    padding-left: 90px;
}

.title {
    margin: 30px 0 30px;
    font-size: 2rem;
    font-weight: 800;
    text-align: left;
}

.accordion {
    border-radius: 30px;
}

.accordion-item>.accordion-header {
    margin-bottom: 3px;

}

.accordion-item,
.accordion-item .accordion-button {
    background-color: rgb(245, 215, 176) !important;
}

.accordion-item:first-of-type,
.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;

}

.accordion-item:last-of-type,
.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
}

.accordion-item {
    width: 80%;
    background-color: #f8f9fa !important;
    border: none !important;

}

.accordion-button {
    font-weight: 600;
}

.accordion-button:not(.collapsed) {
    color: #b72929 !important;
    font-size: 1.5rem;
    transition: 0.3s;
}

.accordion-body {
    font-size: 16px;
    margin-bottom: 5px;
    background-color: rgb(245, 215, 176) !important;
}

@media (max-width: 1200px) {

    .box {
        width: 85%;
        display: flex;
        flex-wrap: wrap-reverse;
        margin: 5% auto;
        padding: 0;
    }

    .box1,
    .box2 {
        width: 100%;
    }

    .box1 {
        padding:15px;
    }
    img{
        width: 100%;
    }

    .title {
        margin: 30px 0;
        font-weight: 800;
        text-align: center;
        font-size: 2rem;
    }

    .accordion-item {
         width: 100%;
    }

    .accordion-body {
        font-size: 1.5rem;
    }
    .accordion-button {
        font-size: 1.5rem !important;
    }

    .accordion-button:not(.collapsed) {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {

    .title {
        margin: 30px 0;
        font-size: 1.2rem;
        font-weight: 800;
    }

    .accordion-button {
        font-size: 1rem !important;
    }

    .accordion-button:not(.collapsed) {
        font-size: 1rem;
    }

    .accordion-body {
        font-size: 0.8rem;
    }
}

@media (max-width: 576px) {
    .title{
        font-size: 1rem;
    }
}
`;

function BlockCollapsingEffect() {
  const [imgSrc, setImgSrc] = useState('01.jpg');

  // 點擊不同Accordion項目時更新圖片
  const handleImageChange = (image) => {
    setImgSrc(image);
  };

  return (
    <Container>
      <div className="box">
        <div className="box1">
          <h2 className="title">DEVILCASE 惡魔防摔殼 PRO</h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => handleImageChange('02.jpg')}>
                永久抗菌
              </Accordion.Header>
              <Accordion.Body>
                SGS檢驗<code>99.99%</code>耐用<code>永久有效抗菌</code>通過歐美日等國際9大檢驗標準
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => handleImageChange('03.jpg')}>
                多色的選擇搭配
              </Accordion.Header>
              <Accordion.Body>
                多種穩重流行顏色供選擇，打造最具個人特色的設計
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => handleImageChange('04.jpg')}>
                超過軍規標準防摔
              </Accordion.Header>
              <Accordion.Body>
                數次戶外實測，實測高度次數超越軍規標準<code>2倍</code>以上的測試標準
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="box2">
          <img
            src={`/images/block-collapsing-effect/${imgSrc}`}
            alt="Product"
            id="img"
          />
        </div>
      </div>
    </Container>
  );
}

export default BlockCollapsingEffect;