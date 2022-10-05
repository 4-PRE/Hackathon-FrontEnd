import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
      "만 65세 이상이며, 현재 혼자 살고게신가요?",
      "독거노인 공동거주시설",
      false,
    ],
  ]);

  let [result, setResult] = React.useState<string[]>([]);

  const getResult = () => {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i][2] === true) {
        temp.push(data[i][1]);
      }
    }
    setResult(temp);
  };

  return (
    <>
      <FormControl>
        {data.map((_, idx) => {
          return (
            <div key={idx}>
              <FormLabel>{data[idx][0]}</FormLabel>
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
                    console.log(data);
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
                    console.log(data);
                  }}
                />
              </RadioGroup>
            </div>
          );
        })}
      </FormControl>
      <button onClick={getResult}>계산하기</button>

      {result.map((data, idx) => {
        return <div key={idx}>{data}</div>;
      })}
    </>
  );
};

export default Question;
