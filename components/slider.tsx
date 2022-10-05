import type { NextPage } from "next";
import React, { useEffect } from "react";
import Image from "next/image";
import Speaker from "../public/img/speaker.png";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom: 70px;
  left: 0;
  right: 0;
  text-align: center;
  width: 50%;
  background-color: #61c9ef;
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
  border: 2px solid lightgray;
  font-weight: bolder;
  font-size: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 140px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: white;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #e6e2e2;
    transition: 0.3s;
  }
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
    alert(
      "음성이 나오고 있습니다. 소리가 들리지 않는다면 설정을 조절해 주세요."
    );
  };
  const router = useRouter();
  const Arr = [
    { text: "적용 복지", url: "/welfare" },
    { text: "일자리 추천", url: "/" },
    { text: "일자리 찾기", url: "/" },
    { text: "통계 자료", url: "/document" },
  ];
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
          {Arr.map((data, idx) => (
            <MenuWrapper key={idx} onClick={() => router.push(data.url)}>
              <MenuItem>
                <p>{idx + 1}</p>
              </MenuItem>
              <h3>{data.text}</h3>
            </MenuWrapper>
          ))}
        </MenuContainer>
      </Container>
    </Wrapper>
  );
};

export default Slider;
