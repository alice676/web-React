import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
* {
    box-sizing: border-box;
    margin: 0;
    font-family: "Google Sans","Arial",sans-serif,"微軟正黑體";
}

img{
    width: 100%;
}

.content{
    position: relative;
    height: 100vh;
    overflow: hidden;
}

#up{
    background-color: black;
    width: 100%;
    height: 50%;
    transition: 0.5s;
}

.imgs{
    position: absolute;
    top: 20%;
    left: 45%;
    z-index: 1;
}

.down{
    width: 100%;
    height: 50%;
    position: relative;
    background-color: #fff;
}

.options{
    position: absolute;
    width: 45px;
    top: 10px;
    right: 25%;
}

.option{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid rgb(136, 136, 136);
    margin: 15px auto ;
    cursor: pointer;
}

/* .option:active{
    transition: 0.2s;
    border: 1px solid rgb(255, 0, 0);
} */

.black{
    background-color: black;
}

.white{
    background-color: rgb(252 249 243);
}

.red{
    background-color: rgb(179 4 40);
}

.yellow{
    background-color: rgb(253 227 126);
}

#text{
    font-size: 80px;
    font-weight: bolder;
    position: absolute;
    bottom: 15%;
    left: 49%;
}

@media (max-width: 1200px) {
    .imgs {
        top: 26%;
        left: 32%;
    }

    .options {
        top: 15px;
        right: 26%;
    }

    #text {
        bottom: 36%;
        left: 41%;
    }

}

@media (max-width: 768px) {
    .imgs {
        left: 31%;
    }

    .options {
        top: 17px;
        right: 17%;
    }

    #text {
        bottom: 20%;
        left: 42%;
    }
}

@media (max-width: 576px) {
    #up {
        width: 100vh;
    }
    img{
        width: 100%;
    }

    .imgs {
        width: 50%;
        left: 23%;
    }

    .options {
        top: 0px;
        right: 7%;
    }

    #text {
        bottom: 36%;
        left: 36%;
        font-size: 60px;
    }
}

@media (max-width: 414px) {
    #text {
        bottom: 15%;
    }
}

`;


const ToggleEffect = () => {
  const colorOptions = [
    { image: './images/toggle-effect/i11-black.png', text: '黑色', color: 'black' },
    { image: './images/toggle-effect/i11-silver.png', text: '白色', color: 'rgb(252 249 243)' },
    { image: './images/toggle-effect/i11-red.png', text: '紅色', color: 'rgb(179 4 40)' },
    { image: './images/toggle-effect/i11-yellow.png', text: '黃色', color: 'rgb(253 227 126)' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const setting = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
    <div className="content">
      <div id="up" style={{ backgroundColor: colorOptions[currentIndex].color }}></div>
      <div className="imgs">
        <img src={colorOptions[currentIndex].image} alt={colorOptions[currentIndex].text} id="img" />
      </div>
      <div className="down">
        <div className="options">
          {colorOptions.map((option, index) => (
            <div
              key={index}
              className="option"
              style={{ backgroundColor: option.color }}
              onClick={() => setting(index)}
            ></div>
          ))}
        </div>
        <div id="text">{colorOptions[currentIndex].text}</div>
      </div>
    </div>
    </Container>
  );
};

export default ToggleEffect;
