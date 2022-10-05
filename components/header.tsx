import { NextPage } from "next";
import styled from "styled-components";

const Header: NextPage = () => {
  return (
    <Wrapper>
      <Logo />
      <TextsWrapper>
        <p>복지 알아보기</p>
        <p>일자리 찾기</p>
        <p>도움말</p>
      </TextsWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  z-index: 10;
  width: 100vw;
  height: 60px;
  background-color: gray;
  position: sticky;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin-left: 50px;
`;

const TextsWrapper = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  margin-right: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > p {
    font-size: 18px;
  }
`;
