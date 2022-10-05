import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Banner from "../public/img/download.png";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: -30px;
  left: 0;
  right: 0;
  text-align: center;
  width: 70%;
  background-color: gold;
  z-index: 10;
  border-radius: 12px;
`;

const MainText = styled.h1`
  text-align: center;
  margin: 0;
  padding: 20px;
`;

const MenuItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #333;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Slider: NextPage = () => {
  return (
    <div>
      <Image src={Banner} alt="1" />
        <Container>
        <MainText>무엇을 도와드릴까요?</MainText>
        <MenuContainer>
          {new Array(5).fill(0).map((data, idx) => {
            return (
              <MenuWrapper key={idx}>
                <MenuItem />
                <h3>일자리 구직</h3>
              </MenuWrapper>
            );
          })}
        </MenuContainer>
      </Container>
    </div>
  );
};

export default Slider;
