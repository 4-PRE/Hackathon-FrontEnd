import JobRate from "../../public/img/jobrate.png";
import GetJobRate from "../../public/img/getjobrate.png";
import styled from "styled-components";
import Header from "../../components/header";
import Image from "next/image";
import Speech from "../../components/speech/index";

function Document() {
  return (
    <>
      <Header />
      <Speech />
      {/* <Wrapper>
        <h1>노인 취업 및 복지 관련 통계 자료</h1>
        <div id="blockwrapper">
          <Block title="연령별 인구(65세 이상)" number="9,018,412 (명)" />
          <Block title="고령인구(65세 이상) 비중" number="17.5 (%)" />
          <Block title="노인 가구 소득(65세 이상)" number="3,026.5 (만원)" />
        </div>
        <div>
          <Image src={GetJobRate} />
        </div>
        <div>
          <Image src={JobRate} />
        </div>
      </Wrapper> */}
    </>
  );
}

interface BlockProps {
  title: string;
  number: string;
}
function Block({ title, number }: BlockProps) {
  return (
    <BlockWrapper>
      <p id="title">{title}</p>
      <p id="number">{number}</p>
      <p id="description">통계청, 장래인구추계, 2022년</p>
    </BlockWrapper>
  );
}
export default Document;

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  min-height: calc(100vh - 60px);
  height: fit-content;
  margin-top: 60px;
  background-color: #d8ebff;
  display: flex;
  flex-direction: column;
  align-items: center;
  > #blockwrapper {
    display: flex;
    flex-direction: row;
    width: 700px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  > h1 {
    margin: 20px;
  }
  > div {
    margin-bottom: 10px;
  }
`;

const BlockWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  width: 320px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  #title {
    font-weight: bold;
    font-size: 25px;
  }
  #number {
    color: red;
    font-weight: bold;
  }
  #description {
    font-size: 15px;
    margin-top: 10px;
  }
`;
