import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import logo from "../public/img/logo.svg";

const Header: NextPage = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Logo onClick={() => router.push("/")}>
        <Image src={logo} />
      </Logo>
      <TextsWrapper>
        <p onClick={() => router.push("/welfare")}>복지 알아보기</p>
        <p>일자리 찾기</p>
        <p>도움말</p>
      </TextsWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.3);
  z-index: 10;
  width: 100vw;
  height: 60px;
  background-color: #4cc3ff;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 100px;
  margin-left: 50px;
  cursor: pointer;
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
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    transition: 0.3s;
    :hover {
      background-color: #e6e2e2;
      transition: 0.3s;
    }
  }
`;
