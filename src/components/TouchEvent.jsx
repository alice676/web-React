import React, { useState } from "react";

const TouchEvent = () => {
  const [direction, setDirection] = useState(""); // 儲存觸控方向

  // 觸摸開始 X、Y 軸位置
  let startDistanceX = 0;
  let startDistanceY = 0;

  // 觸摸結束 X、Y 軸位置
  let endDistanceX = 0;
  let endDistanceY = 0;

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    if (touch) {
      startDistanceX = touch.screenX;
      startDistanceY = touch.screenY;
    } else {
      alert("TouchEvent error!");
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    if (touch) {
      endDistanceX = touch.screenX;
      endDistanceY = touch.screenY;

      // 計算移動距離
      const moveDistanceX = startDistanceX - endDistanceX;
      const moveDistanceY = startDistanceY - endDistanceY;

      // 判斷 X 軸與 Y 軸的移動距離
      if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
        // 左右
        setDirection(moveDistanceX > 0 ? "左" : "右");
      } else {
        // 上下
        setDirection(moveDistanceY > 0 ? "上" : "下");
      }
    } else {
      alert("TouchEvent error!");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "blanchedalmond",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        color: "blue",
        padding: "100px",
        boxSizing: "border-box",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {direction || "請滑動"}
    </div>
  );
};

export default TouchEvent;
