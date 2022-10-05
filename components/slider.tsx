import type { NextPage } from "next";
import React, { useEffect } from "react";
import Image from "next/image";
import Speaker from "../public/img/speaker.png";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom: 70px;
  left: 0;
  right: 0;
  text-align: center;
  width: 70%;
  background-color: #3dc1f1;
  z-index: 1;
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
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  padding-bottom: 0px;
  padding-top: 10px;
  background-color: white;
  margin-bottom: 5px;
  align-items: center;
  flex-direction: column;
`;

const TTSWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    box-shadow: 5px 5px 5px lightgray;
    background-color: white;
    border-radius: 100px;
    padding: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 800px;
    height: 150px;
    font-weight: bold;
    cursor: pointer;
    font-size: 50px;
    transition: 0.3s;
    line-height: 20px;
    :hover {
      transition: 0.3s;
      background-color: #e6e2e2;
    }
    > p {
      margin-left: 50px;
    }
  }
  > div span {
    display: flex !important;
    height: 100px !important;
    width: 100px !important;
  }
`;

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  height: fit-content;
  position: relative;
  padding-bottom: 250px;
  background-color: #eff7ff;
`;

const Slider: NextPage = () => {
  const onClick = () => {
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.text =
      "안녕하십니까. 노인복지서비스 PRE 입니다. 음성 안내를 듣고 음성 안내 버튼 하단의 항목 중 원하시는 것을 선택하세요. 자신에게 적용되는 복지를 알아보고 싶으면 1번, 자신을 위한 일자리를 추천받고 싶으면 2번, 그 외에 다른 일자리를 찾아보고 싶으면 3번, 노인 취업 관련 통계 자료를 열람하려면 4번을 눌러주세요.";
    window.speechSynthesis.speak(speechMsg);
  };
  return (
    <Wrapper>
      <TTSWrapper>
        <div onClick={onClick}>
          <Image src={Speaker} alt={""} />
          <p>음성안내로 시작하기</p>
        </div>
      </TTSWrapper>
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
    </Wrapper>
  );
};

export default Slider;
