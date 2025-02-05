import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
body {
    margin: 0;
    padding: 0;
    background: #232323;
    color: #cdcdcd;
    font-family: "Avenir Next", "Avenir", sans-serif;
}

#menuToggle {
    display: block;
    position: relative;
    top: 50px;
    left: 34%;
    z-index: 1;
}

#menuToggle a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
}

#menuToggle a:hover {
    color: tomato;
}

#menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: 0;
    /* left: -5px; */
    cursor: pointer;
    opacity: 0;
    z-index: 2;
}

/*漢堡條*/
#menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #494848;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

/* 點擊後漢堡條動畫*/
#menuToggle input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

/*隱藏漢堡條中間的線*/
#menuToggle input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

/*位移漢堡條最後一條位置*/
#menuToggle input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

#menu {
    position: absolute;
    width: 34%;
    height: calc(100vh);
    margin: -100px 0 0 -50px;
    /* padding: 50px; */
    padding-top: 100px;
    background: #ededed;
    list-style-type: none;
    transform: translate(0, -100%);
    transition: all 1s ease;
}

#menu li {
    padding: 10px 0;
    font-size: 22px;
}

#menuToggle input:checked~ul {
    transform: none;
}

@media (max-width: 768px) {
    #menu {
        margin: -100px 0 0 -30px;
        width: 100vw;
        height: 100vh;
    }

    #menuToggle {
        top: 50px;
        left: 30px;
    }
}
`;
const Menu = () => {
    // 定義一個狀態來追蹤 menu 是否開啟
    const [isOpen, setIsOpen] = useState(false);

    // 切換 menu 開關的函數
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Container>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
                <span></span>
                <span></span>
                <span></span>

                {/* 如果 menu 開啟，顯示選項 */}
                {isOpen && (
                    <ul id="menu">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/info'>Info</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                )}
            </div>
        </nav>
        </Container>
    );
};

export default Menu;
