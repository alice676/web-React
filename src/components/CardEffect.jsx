import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
body {
    background-color: #bcbdc3;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    width: 100%;
}

.card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 20px;
    /* width: 100%; */
}

.card-box {
    width: 23%;
}

.card {
    position: relative;
    /* width: 300px; */
    height: 400px;
    background-color: #fff;
    cursor: pointer;
    perspective: 1000px; /* 透視效果 */
    font-size: 18px;
    font-weight: bold;
    color: white;
    transition: transform 0.5s, background-color 0.5s;
}

.card.flip {
    background-color: rgba(45, 11, 195, 0.564);
}

.card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card-front,
.card-back {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    backface-visibility: hidden; /* 隱藏背面 */
}

.card-back {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(45, 11, 195, 0.564);
    color: white;
    transform: rotateY(180deg);
}

.card-title {
    color: #ffc71e;
    font-size: 26px;
}

.card-text {
    line-height: 35px;
}

hr {
    margin: 20px 0;
}

.card-price {
    font-size: 26px;
    text-align: center;
    margin: 20px 10px;
    color: #f05908;
    font-weight: bold;
}

.connect{
    background-color: #282828;
    color: #fff;
    text-align: center;
    width: 100vw;
    height: 50vw;
    z-index: 0;
}

.connect-box{
    margin: 5%;
    width: 30%;
    height: 80%;
    transition: width 2s;
    position: absolute;
    background-color: #46205e;
    z-index: 1;
}

.connect-text{
    font-size: 5rem;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    top: 50%;
    z-index: 2;
}

.connect-text:hover+.connect-box{
    width: 90%;
    margin-right: 0;
}

@media (max-width: 768px) {
    .card-container {
        flex-wrap: wrap;
    }

    .card-box {
        width: 100%;
    }

    .card {
        width: 100%;
    }

    .connect{
        width: 100vw;
        height: 100vw;
    }
    
    .connect-box{
        margin: 25px;
        width: 80vw;
        height: 80vw;
    }
    
    .connect-text{
        font-size: 1.2rem;
    }

    .connect-text:hover+.connect-box{
        width: 80vw;
        margin-right: none;
    }
}
`;

const Card = ({ image, title, description, price }) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card-box">
      <div className={`card ${flipped ? 'flip' : ''}`} onClick={flipCard}>
        <div
          className="card-inner"
          style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
        >
          <div className="card-front">
            <img src={image} alt={title} />
          </div>
          <div
            className="card-back"
            style={{ display: flipped ? 'block' : 'none' }}
          >
            <div className="card-title">{title}</div>
            <hr />
            <div className="card-text">{description}</div>
          </div>
        </div>
      </div>
      <div className="card-price">NT ${price}</div>
    </div>
  );
};

const CardEffect = () => {
  const products = [
    {
      image: './images/card-effect/pic01.jpg',
      title: '惡魔防摔殼 PRO 2',
      description: '防摔能力強，可替換四邊防撞邊角及金屬扣+掛繩組:相對其他款式更重。',
      price: 1580,
    },
    {
      image: './images/card-effect/pic02.jpg',
      title: '惡魔防摔殼 PRO',
      description: '包覆與防護非常全面，防護性較其他款強，重量也較其他款型稍重。',
      price: 1180,
    },
    {
      image: './images/card-effect/pic03.jpg',
      title: '惡魔防摔殼 標準版',
      description: '添加"抗黃因子"，減緩外殼泛黃速度。',
      price: 980,
    },
    {
      image: './images/card-effect/pic04.jpg',
      title: '惡魔防摔殼 3',
      description: '表面材質親膚，彈性好，止滑能力佳，通過SGS無毒抗菌檢驗。',
      price: 1180,
    },
  ];

  return (
    <Container>
    <div>
      <div className="card-container">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      <div className="connect">
        <div className="connect-text">devilcase@devilcase.com.tw</div>
        <div className="connect-box"></div>
      </div>
    </div>
    </Container>
  );
};

export default CardEffect;
