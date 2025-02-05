import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
* {
    margin: 0;
    box-sizing: border-box;
}

img {
    width: 100%;
}

.main {
    display: flex;
    text-align: center;
    width: 100%;
}

.box {
    margin: 20px;
    border: 1px solid #000;
    width: 25%;
    padding: 0;
}

.name {
    font-size: 32px;
    font-weight: bolder;
    margin: 20px 0;
}

.price {
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: 15px;
    color: crimson;
}

#textOutput {
    display: none;
}

.control_box {
    width: 30%;
    margin: 25px auto;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 3px 6px 3px rgb(0 0 0 / 12%);
    border-radius: 10px;

}

.control_name {
    font-size: 26px;
    margin: 10px;
    padding-top: 10px;
}

input[type="range"] {
    width: 300px;
}

.control_down {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
}

@media (max-width: 768px) {
    .main {
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .box {
        width: 45%;
        margin: 10px;
    }

    .name {
        font-size: 18px;
        margin: 10px 0;
    }

    .price {
        font-size: 22px;
        margin-bottom: 15px;
    }

    .control_box {
        width: 90%;
        margin: 15px auto;
    }

    .control_name {
        font-size: 22px;
    }

}
`;

const products = [
    { id: 4, name: '惡魔防摔殼 標準版', price: 980, image: '/images/slide-control/04.jpg' },
    { id: 3, name: '惡魔防摔殼 標準磁吸版', price: 1080, image: '/images/slide-control/03.jpg' },
    { id: 2, name: '惡魔防摔殼 PRO', price: 1180, image: '/images/slide-control/02.jpg' },
    { id: 1, name: '惡魔防摔殼 PRO 2', price: 1580, image: '/images/slide-control/01.jpg' },
];


function SliderControl() {
    const [maxPrice, setMaxPrice] = useState(1580);

    const handlePriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    return (
        <Container>
        <div className="product-slider">
            <div className="main">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="box"
                        style={{ display: product.price <= maxPrice ? 'block' : 'none' }}
                    >
                        <div className="pic">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="name">{product.name}</div>
                        <div className="price">
                            NT <span className="price_tag">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="control_box">
                <div className="control_name">價格</div>
                <div className="control_slide">
                    <input
                        id="Input"
                        type="range"
                        min="980"
                        max="1580"
                        step="100"
                        value={maxPrice}
                        onChange={handlePriceChange}
                    />
                    <output id="textOutput">{maxPrice}</output>
                </div>
                <div className="control_down">
                    <div className="control_text">低</div>
                    <div className="control_text">高</div>
                </div>
            </div>
        </div>
        </Container>
    );
}

export default SliderControl;