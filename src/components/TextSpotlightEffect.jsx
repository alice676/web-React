import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
.context {
    width: 100%;
    height: 100vh;
    background-color: #ed833c;
    overflow: hidden;
}

.wrap {
    margin: 18% auto;
}

.title {
    font-size: 8rem;
    font-weight: bolder;
    text-align: center;
    color: hsla(0, 0%, 100%, 0.08);
    background-clip: text;
    -webkit-background-clip: text;
    background-image: radial-gradient(closest-side, #fff 100%, transparent 0);
    // background-position: 30%;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    /* transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1); */
}

@media (max-width: 768px) {
    .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        margin: 0;
        padding: 0;
    }

    .title {
        font-size: 3rem;
        color: hsla(0, 0%, 100%, 0.08);
        background-clip: none;
        -webkit-background-clip: none;
        background-image: none;
        background-position: 0%;
    }

    .title::before {
        position: absolute;
        content: 'Phone Case';
        font-size: 3rem;
        color: #fff;
        clip-path: circle(80px at 0% 50%);
        animation: spotlight 5s infinite;
    }

    /* 手機版動畫 */
    @keyframes spotlight {
        0% {
            clip-path: circle(80px at 0% 50%);
        }
        50% {
            clip-path: circle(80px at 100% 50%);
        }
        100% {
            clip-path: circle(80px at 0% 50%);
        }
    }
        
    .title-phone{
        display: none;
    }
}
`
const TextSpotlightEffect = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // 更新視窗大小
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // 滑鼠移動事件僅在寬度大於 768px 時生效
        if (windowWidth > 768) {
            const handleMouseMove = (e) => {
                const spotlightSize = 300;
                const titleRect = document.querySelector(".title").getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const spotlightX = mouseX - spotlightSize / 2 - titleRect.left;
                const spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

                setSpotlightPosition({ x: spotlightX, y: spotlightY });
            };

            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowWidth]);

    return (
        <Container>
            <div className="context">
                <div className="wrap">
                    <div
                        className="title"
                        style={
                            windowWidth > 768
                                ? {
                                    backgroundPosition: `${spotlightPosition.x}px ${spotlightPosition.y}px`,
                                }
                                : {}
                        }
                    >
                        Phone Case
                    </div>
                    {windowWidth <= 768 && <div className="title-phone">Phone Case</div>}
                </div>
            </div>
        </Container>
    );
};

export default TextSpotlightEffect;
