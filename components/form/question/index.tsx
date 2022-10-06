import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Header from "../../header";

const Question: NextPage = () => {
  type element = [string, string, boolean];

  const [data, setData] = React.useState<element[]>([
    ["만 65세 이상이며, 월 수입이 180만원 이하이신가요?", "기초연금", false],
    [
      "만 65세 이상이며, 4세대 이상 가정에서 1년 이상 거주하셨나요?",
      "효도수당",
      false,
    ],
    ["만 65세 이상이며, 일자리를 찾고 계신가요?", "노인일자리", false],
    [
      "만 65세 이상이며, 현재 혼자 살고 계신가요?",
      "독거노인 공동거주시설",
      false,
    ],
  ]);

  const [result, setResult] = React.useState<string[] | null>(null);

  const getResult = () => {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i][2] === true) {
        temp.push(data[i][1]);
      }
    }
    console.log(temp);
    setResult(temp);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <FormWrapper
          style={{
            width: "40%",
            left: result ? "100px" : "calc(50% - 350px)",
          }}
        >
          <FormControl>
            <h1>받을 수 있는 복지 알아보기</h1>
            {data.map((_, idx) => {
              return (
                <div key={idx} className="blocks">
                  <p>{data[idx][0]}</p>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name={`row-radio-buttons-group-${idx}`}
                  >
                    <FormControlLabel
                      value="네"
                      control={<Radio />}
                      label="네"
                      onChange={() => {
                        let temp = data;
                        temp[idx][2] = true;
                        setData(temp);
                      }}
                    />
                    <FormControlLabel
                      value="아니요"
                      control={<Radio />}
                      label="아니요"
                      onChange={() => {
                        let temp = data;
                        temp[idx][2] = false;
                        setData(temp);
                      }}
                    />
                  </RadioGroup>
                </div>
              );
            })}
          </FormControl>
          <button onClick={getResult}>계산하기</button>
        </FormWrapper>
        <h1
          style={{
            position: "absolute",
            right: "200px",
            transition: "0.6s",
            opacity: result && !result.length ? "1" : "0",
          }}
        >
          결괏값이 없습니다.
        </h1>

        <ResultWrapper
          style={{ opacity: result && result.length ? 1 : 0, width: "40%" }}
        >
          <h1>받을 수 있는 복지 결과</h1>
          {result?.map((value, index) => (
            <p key={index}>
              {index + 1}. {value}
            </p>
          ))}
        </ResultWrapper>
      </Wrapper>
    </>
  );
};

export default Question;

const Wrapper = styled.div`
  position: relative;
  background-color: #d8ebff;
  width: 100vw;
  height: calc(100vh - 60px);
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.5s;
`;

const FormWrapper = styled.div`
  z-index: 5;
  transition: 0.5s;
  left: calc(50% - 350px);
  position: absolute;
  border: 1px solid black;
  width: 650px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;
  .blocks {
    margin-top: 20px;
    border-bottom: 1px solid black;
  }
  > button {
    height: 60px;
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid lightgray;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      background-color: #d4d3d3;
      transition: 0.3s;
    }
  }
`;

const ResultWrapper = styled.div`
  border: 1px solid black;
  width: 650px;
  height: 600px;
  background-color: white;
  position: absolute;
  right: 100px;
  transition: 0.5s;
  padding: 40px;
  > p {
    margin-top: 20px;
    border-bottom: 1px solid black;
  }
`;
