import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
.content{
    overflow: hidden;
}
.box{
    // position: relative;
    margin: 20px;
    width: 100%;
    padding: 0;
}
.img-wrapper{
    width: 1280px;
    position: absolute;
}

#control {
    width: 1280px;
    overflow: auto;
    position: absolute;
    top: 80%;
}

#content{
    width:5000px;
}

img{
    width: 100%;
}

p {
    margin: 0 20px;
`;

const ImageSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (e) => {
    const div = e.target;
    const contentWidth = div.scrollWidth - div.clientWidth; // 總長度
    const x = div.scrollLeft; // 現在位移位置
    const totalPages = 38; // 總照片張數
    const pageWidth = contentWidth / totalPages; // 每張圖片所佔寬度
    const currentPageIndex = Math.round(x / pageWidth); // 計算目前的圖片索引
    setCurrentPage(currentPageIndex);
  };

  return (
    <Container>
      <div className="content">
      <div className="box">
        <div className="img-wrapper">
          <img
            id="change_image"
            src={`./images/image-slider/c_aircross_${currentPage}-1620x1000.png`}
            alt={`Slide ${currentPage}`}
          />
        </div>
      </div>
      <div id="control" onScroll={handleScroll}>
        <div id="content"><br /></div>
      </div>
      <p id="show">Horizontally: {currentPage}px</p>
      </div>
    </Container>
  );
};

export default ImageSlider;
