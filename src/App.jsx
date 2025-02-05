import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import BlockCollapsingEffect from './components/BlockCollapsingEffect';
import SliderControl from './components/SliderControl';
import CardEffect from './components/CardEffect';
import ToggleEffect from './components/ToggleEffect';
import ImageSlider from './components/ImageSlider';
import Menu from './components/Menu';
import LoginForm from './components/LoginForm';
import TouchEvent from './components/TouchEvent';
import ImageDisplacementMarquee from './components/ImageDisplacementMarquee';
import TextSpotlightEffect from './components/TextSpotlightEffect';
import TextAnimation from './components/TextAnimation';
import Slider from './components/Slider';
import ProductDescriptionZoom from './components/ProductDescriptionZoom';
import BlockScaling from './components/BlockScaling';

import boxesData from './data/boxesData.json';
import './App.css';

function Box({ link, title, icons, image }) {
  return (
    <div className="box">
      <Link to={link} target="_blank">
        {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
        <div className="box_title">
          <span>{title}</span>
          <div className="icon">
            {icons.map((iconClass, index) => (
              <i className={iconClass} key={index}></i>
            ))}
          </div>
        </div>
        <img src={image} alt={title} />
      </Link>
      {/* </a> */}
    </div>
  );
}

function Home() {

  return (

    <div className="wrap">
      <div className="title">WEB DESIGN</div>
      <div className="system">
        <i className="fa-solid fa-star"></i> Functional
      </div>
      <div className="boxes">
        {boxesData.map((box, index) => {
          const imageNumber = String(index + 1).padStart(2, '0');
          const imagePath = `/images/${imageNumber}.png`;
          return (
            <Box
              key={index}
              link={box.link}
              title={box.title}
              icons={box.icons}
              image={imagePath} // 動態生成的圖片路徑
            />
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* 根路徑顯示首頁 */}
        <Route path="/" element={<Home />} />
        <Route path="/block-collapsing-effect" element={<BlockCollapsingEffect />} />
        <Route path="/slide-control" element={<SliderControl />} />
        <Route path="/card-effect" element={<CardEffect />} />
        <Route path="/toggle-effect" element={<ToggleEffect />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/touch-event" element={<TouchEvent />} />
        <Route path="/Image-displacement-Marquee" element={<ImageDisplacementMarquee />} />
        <Route path="/text-spotlight-effect" element={<TextSpotlightEffect />} />
        <Route path="/text-animation" element={<TextAnimation />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/product-description-zoom" element={<ProductDescriptionZoom />} />
        <Route path="/block-scaling" element={<BlockScaling />} />

        {/* 可在此添加其他路由 */}
      </Routes>
    </Router>
  );
}

export default App;
