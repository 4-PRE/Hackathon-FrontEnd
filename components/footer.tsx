import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import github from "../public/img/github.png";
import logo from "../public/img/logo.svg";

const Footer: NextPage = () => {
  return (
    <Wrapper>
      <CenterWrapper>
        <div id="top">
          <div>
            <b>FrontEnd</b>
            <p>홍지민</p>
            <p>이경수</p>
          </div>
          <div>
            <b>BackEnd</b>
            <p>김승길</p>
            <p>이승민</p>
          </div>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div id="bottom">
          <div id="logo">
            <div>
              <Image src={logo} />
            </div>
            <p>Team. PRE</p>
          </div>
          <div id="img">
            <Image src={github} />
          </div>
        </div>
      </CenterWrapper>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  width: 100vw;
  height: 250px;
  background-color: #dedede;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterWrapper = styled.div`
  width: 80%;
  height: 100%;
  > #top {
    height: 65%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    > div {
      margin-top: 20px;
    }
  }
  #bottom {
    height: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid black;
    > #img {
      width: 40px;
      cursor: pointer;
    }
    > #logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      > div {
        width: 100px;
        margin-right: 10px;
      }
    }
  }
`;
