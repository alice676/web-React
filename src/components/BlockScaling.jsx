import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  flex: 1;
  height: 100%;
  transition: flex 0.8s ease;
  position: relative;
  background-color: ${(props) => props.bgColor};

  &:hover {
    flex: 5;
  }

  &:hover .text {
    font-size: 56px;
    transition: 0.8s;
  }

  @media (max-width: 768px) {
    height: 18%;
  }
`;

const Text = styled.div`
  font-size: 42px;
  font-weight: bolder;
  text-align: center;
  margin-top: 500px;
  color: #fff;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const items = [
  { bgColor: "#006D77", text: "#006d77" },
  { bgColor: "#83C5BE", text: "#83c5be" },
  { bgColor: "#EDF6F9", text: "#edf6f9" },
  { bgColor: "#FFDDD2", text: "#ffddd2" },
  { bgColor: "#E29578", text: "#e29578" },
];

const BlockScaling = () => {
  return (
    <Wrap>
      {items.map((item, index) => (
        <Item key={index} bgColor={item.bgColor}>
          <Text className="text">{item.text}</Text>
        </Item>
      ))}
    </Wrap>
  );
};

export default BlockScaling;
