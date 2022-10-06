import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import trend from "../../public/img/trend.svg";
import arrow from "../../public/img/arrow.svg";

function Trend() {
  const [state, setState] = useState(60);
  const arr = [60, 70, 80];
  return (
    <>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Icon>
            <Image src={trend} />
          </Icon>
          <h1>대의 인기 일자리</h1>
          {arr.map((value, index) => (
            <Age
              key={index}
              style={{
                opacity: index * 10 + 60 === state ? 1 : 0,
                top:
                  index * 10 + 60 > state
                    ? "0px"
                    : index * 10 + 60 < state
                    ? "100px"
                    : "46px",
              }}
            >
              {value}
            </Age>
          ))}
          <Arrow onClick={() => setState(state < 80 ? state + 10 : state)}>
            <Image src={arrow} />
          </Arrow>
          <Arrow
            onClick={() => setState(state > 60 ? state - 10 : state)}
            style={{ top: "80px", transform: "rotate(180deg)" }}
          >
            <Image src={arrow} />
          </Arrow>
        </TitleWrapper>
      </Wrapper>
    </>
  );
}

export default Trend;

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  height: fit-content;
  background-color: #c3dcf6;
  margin-top: 60px;
  position: relative;
`;

const TitleWrapper = styled.div`
  border: 3px solid black;
  width: 800px;
  height: 150px;
  background-color: white;
  position: absolute;
  left: calc(50% - 400px);
  top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > h1 {
    padding-left: 60px;
  }
`;

const Icon = styled.span`
  position: absolute;
  width: 100px !important;
  height: 100px !important;
  top: 36px;
  left: 50px;
  > span {
    position: unset !important;
    display: flex !important;
  }
`;

const Arrow = styled.span`
  border-radius: 10px;
  :hover {
    background-color: lightgray;
    transition: 0.3s;
  }
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  width: 50px !important;
  height: 50px !important;
  top: 15px;
  right: 50px;
  > span {
    position: unset !important;
    display: flex !important;
  }
`;

const Age = styled.h1`
  position: absolute;
  left: 170px;
  transition: 0.3s;
`;
