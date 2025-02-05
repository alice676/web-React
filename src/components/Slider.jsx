import React from "react";
import styled from 'styled-components';

const Container = styled.div`
body {
  height: 100vh;
  margin: 0;
}

.title {
  font-size: 46px;
  font-weight: 800;
  margin: 35px;
  text-align: left;
}

#wrap {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 420px;
  padding-bottom: 5px;
}

#slide {
  position: absolute;
  display: flex;
  animation: slide 12s linear infinite;
}

#slide:hover {
  animation-play-state: paused;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.img {
  width: 400px;
  margin: 0 20px;
}

img {
  width: 100%;
  box-shadow: 3px 3px 12px gray;
}

@media (max-width: 1200px) {
}

@media (max-width: 768px) {
  .title {
    font-size: 48px;
  }

  .img {
    width: 260px;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 24px;
    margin: 30px 12px;
    text-align: center;
  }

  .img {
    width: 170px;
    margin: 0 10px;
  }

  #wrap {
    height: 175px;
  }
}

@media (max-width: 414px) {
  .title {
    font-size: 22px;
    margin: 30px 2px;
  }
}
`;

const ImageSlider = ({ images }) => {
  return (
    <div id="wrap">
      <div id="slide">
        {images.map((image, index) => (
          <div className="img" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="img" key={`duplicate-${index}`}>
            <img src={image} alt={`Slide Duplicate ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Slider = () => {
  const images = ["/images/Slider/01.jpg", "/images/Slider/02.jpg", "/images/Slider/03.jpg", "/images/Slider/04.jpg"];

  return (
    <Container>
    <div>
      <div className="title">DEVILCASE 惡魔防摔殼 PRO 2</div>
      <ImageSlider images={images} />
      <div className="title">DEVILCASE 惡魔防摔殼 PRO 2</div>
      <ImageSlider images={images} />
    </div>
    </Container>
  );
};

export default Slider;
