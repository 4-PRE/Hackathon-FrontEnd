import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Banner from "../../../public/img/download.png";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Line = styled.hr`
  width: 100%;
  color: black;
`;

const Bold = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const Light = styled.p``;

const EditButton = styled.button``;

const AppendButton = styled.button``;

export const NameInput = styled.input`
  display: block;
  height: 10px;
  margin: 10px 0;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid black;
  &::placeholder {
    font-size: 16px;
  }
`;

const Info: NextPage = () => {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Bold>개인기본정보</Bold>
          <Light style={{ marginLeft: "10px" }}>
            가입 시 등록한 정보를 다시 한번 확인해주세요
          </Light>
        </div>
        <EditButton>수정하기</EditButton>
      </Container>
      <Line />

      <div style={{ width: "115px", display: "flex", flexDirection: "column" }}>
        <Image src={Banner} alt={"아"} width={"115px"} height={"150px"} />
        <AppendButton>사진등록</AppendButton>
      </div>
      <NameInput type={`text`} />
      <NameInput type={`text`} />
      
    </>
  );
};

export default Info;
