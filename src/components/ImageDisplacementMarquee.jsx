import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.page {
    display: none;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.page.active {
    display: flex;
}

.page h1 {
    font-size: 10rem;
    color: #ffffff;
    font-weight: bold;
}

#page1 {
    background-color: #41a9ea;
}

#page2 {
    background-color: #f56fae;
}

#page3 {
    background-color: #c16bff;
}

.pic{
    height: auto;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(-20deg);
}

.float {
    animation: float2 3s ease-in-out infinite;
}

img{
    width: 70%;
}

/* 跑馬燈 */
#marquee {
    background-color: #f3bc08;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px 0;
}

#marquee span {
    display: inline-block;
    padding-right: 20px;
    font-size: 1.2rem;
    animation: marquee 5s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@media (max-width: 768px) {
    .page h1 {
        font-size: 5rem;
    }
}

`;
const pages = [
    { id: "page1", title: "Iphone 14", img: "./images/Image-displacement-Marquee/i14-blue.png", bgColor: "#41a9ea" },
    { id: "page2", title: "Iphone 13", img: "./images/Image-displacement-Marquee/i13-pink.png", bgColor: "#f56fae" },
    { id: "page3", title: "Iphone 12", img: "./images/Image-displacement-Marquee/i12-purple.png", bgColor: "#c16bff" },
];

const ImageDisplacementMarquee = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // 處理滾輪事件
    useEffect(() => {
        const handleWheel = (event) => {
            const delta = Math.sign(event.deltaY);
            const nextPage = currentPage + delta;

            if (nextPage >= 0 && nextPage < pages.length) {
                setCurrentPage(nextPage);
            }
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [currentPage]);

    return (
        <Container>
            <div className="app">
                {pages.map((page, index) => (
                    <div
                        key={page.id}
                        className={`page ${currentPage === index ? "active" : ""}`}
                        style={{ backgroundColor: page.bgColor }}
                    >
                        <h1>{page.title}</h1>
                        <div className="pic float">
                            <img src={page.img} alt={page.title} />
                        </div>
                    </div>
                ))}
                <div id="marquee">
                    <span>iPhone 新機上市!!! </span>
                    <span>iPhone 新機上市!!! </span>
                    <span>iPhone 新機上市!!! </span>
                    <span>iPhone 新機上市!!! </span>
                    <span>iPhone 新機上市!!! </span>
                    <span>iPhone 新機上市!!! </span>
                </div>
            </div>
        </Container>
    );
};

export default ImageDisplacementMarquee;
