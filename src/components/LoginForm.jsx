import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-body {
  width: 90%;
  max-width: 500px;
  height: 400px;
  border: 1px solid rgb(210, 209, 209);
  margin: 30px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.content {
  margin: 20px;
}

.box1,
.box2 {
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

#tips {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

button {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 30px;
  padding: 10px 30px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(1);
}

#down-box {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}
`;

const LoginForm = () => {
    const [username, setUsername] = useState(""); // 追蹤帳號輸入
    const [password, setPassword] = useState(""); // 追蹤密碼輸入

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleMouseMove = () => {
        const button = document.getElementById("loginButton");
        const tips = document.getElementById("tips");
        const downBox = document.getElementById("down-box");

        if (password === "") {
            // 獲取 `down-box` 和按鈕的尺寸
            const downBoxRect = downBox.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();

            // 計算最大水平和垂直位移，考慮按鈕寬高
            const maxLeft = downBoxRect.width - buttonRect.width;
            const maxTop = downBoxRect.height - buttonRect.height;

            // 隨機生成按鈕的新位置，確保按鈕不超出範圍
            const randomX = Math.random() * maxLeft;
            const randomY = Math.random() * maxTop;

            // 設置按鈕的新位置
            button.style.marginLeft = `${randomX}px`;
            button.style.marginTop = `${randomY}px`;

            // 修改按鈕樣式和提示
            button.style.backgroundColor = "red";
            tips.textContent = "請輸入密碼!!!";
        } else {
            // 清除提示並恢復按鈕顏色
            tips.textContent = "";
            button.style.backgroundColor = "blue";
        }
    };

    const handleClick = () => {
        if (!username) {
            alert("請輸入帳號!");
            return;
        }

        if (!password) {
            alert("請輸入密碼!");
            return;
        }

        alert("登入成功");
    };

    return (
        <Container>
            <div className="login-body">
                <div className="content">
                    <div className="box1">
                        <p>帳號:</p>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="box2">
                        <p>密碼:</p>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div id="tips"></div>
                </div>
                <div id="down-box">
                    <button
                        id="loginButton"
                        onMouseMove={handleMouseMove}
                        onClick={handleClick}
                    >
                        登入
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default LoginForm;