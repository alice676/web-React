import React from "react";
import styled from 'styled-components';

const Container = styled.div`
img {
  width: 100%;
  height: 100%;
}

.background {
  width: 500px;
  height: 100px;
  margin: 40px 60px 0;
}

.box {
  width: 50px;
  overflow: hidden;
}

.text {
  white-space: nowrap;/* 不換行 */
  font-size: 36px;
  font-weight: bolder;
  font-family: Arial;
}

/* 動態效果 */
.fadingEffect {
  width: 100%;
  animation: showHide 3s ease-in;
}

@keyframes showHide {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.pic {
  width: 30%;
  margin: 0 10px;
  border: 1px solid #000;
}

@media (max-width: 1200px) {
}

@media (max-width: 768px) {
  .boxes {
    width: 100%;
    overflow: hidden;
  }
  .background {
    width: 100vh;
    margin: 40px 0 0 10px;
  }
  .text {
    font-size: 32px;
  }
  .pic {
    display: block;
  }
}

@media (max-width: 576px) {
  .background {
    height: 50px;
    margin: 30px 0 20px 10px;
  }
  .text {
    font-size: 26px;
  }
}
`;
const Box = () => {
  return (
    <Container>
    <div className="boxes">
      <div className="background">
        <div className="box fadingEffect">
          <div className="text">DEVILCASE 惡魔防摔殼 PRO</div>
        </div>
      </div>
      <div className="content">
        <div className="pic">
          <img src="/images/text-animation/01.jpg" alt="01" />
        </div>
        <div className="pic">
          <img src="/images/text-animation/02.jpg" alt="02" />
        </div>
        <div className="pic">
          <img src="/images/text-animation/03.jpg" alt="03" />
        </div>
      </div>
    </div>
    </Container>
  );
};

const TextAnimation = () => {
  return (
    <div>
      <Box />
      <Box />
      <Box />
    </div>
  );
};

export default TextAnimation;