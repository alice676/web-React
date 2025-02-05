import React from 'react';
import styled from 'styled-components';

const Boxes = styled.div`
  display: flex;
  width: 100%;
  margin: 5% auto;
  justify-content: center;

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

const Box = styled.div`
  margin: 2% 5%;
  position: relative;
  width: 20%;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 80%;
    margin-bottom: 10%;
  }
`;

const ImgContainer = styled.div`
  z-index: 1;
`;

const Image = styled.img`
  width: 75%;
  transition: all 1s;

  ${Box}:hover & {
    width: 85%;

    @media (max-width: 576px) {
      width: 85%;
    }
  }
`;

const BoxText = styled.div`
  position: absolute;
  left: 142px;
  top: 376px;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  border-radius: 50%;
  transition: all 1s;
  background-color: #f8ecd9;

  ${Box}:hover & {
    width: 250px;
    height: 250px;
    line-height: 250px;

    @media (max-width: 576px) {
      width: 250px;
      height: 250px;
      line-height: 250px;
    }
  }

  @media (max-width: 576px) {
    left: 80px;
    top: 270px;
    width: 172px;
    height: 172px;
    line-height: 172px;
  }
`;

const ProductBox = ({ image, description }) => {
  return (
    <Box>
      <ImgContainer>
        <Image src={image} alt={description} />
      </ImgContainer>
      <BoxText>{description}</BoxText>
    </Box>
  );
};

const ProductDescriptionZoom = () => {
  return (
    <Boxes>
      <ProductBox image="/images/product-description-zoom/i11-black.png" description="Apple iPhone 11 黑色" />
      <ProductBox image="/images/product-description-zoom/i11-silver.png" description="Apple iPhone 11 白色" />
      <ProductBox image="/images/product-description-zoom/i11-red.png" description="Apple iPhone 11 紅色" />
    </Boxes>
  );
};

export default ProductDescriptionZoom;
