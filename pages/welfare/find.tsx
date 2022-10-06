import axios from "axios";
import React from "react";
import type { NextPage } from "next";
import { POST_WELFARE_URL } from "../../constant/url";

const Find: NextPage = () => {
  // const [result, setResult] = React.useState<string[]>([]);
  // const [result2, setResult2] = React.useState<string[]>([]);

  type form = [string, string, boolean];

  let form: form[] = [
    ["저소득자", "LOW_INCOME", false],
    ["장애인", "DISABLED", false],
    ["국가유공자", "VETERAN", false],
  ];

  let form2: form[] = [
    ["교육 지원", "EDUCATION", false],
    ["의료 지원", "MEDICAL", false],
    ["문화생활 지원", "CULTURE", false],
    ["경제적 지원", "FINANCIAL", false],
    ["기타 정부부처 소관", "OTHER", false],
  ];

  const submit = () => {
    let temp: string[] = [];
    let temp2: string[] = [];
    console.log(form, form2);

    for (let i = 0; i < form.length; i++) {
      if (form[i][2] === true) {
        temp.push(form[i][1]);
      }
    }

    for (let i = 0; i < form2.length; i++) {
      if (form2[i][2] === true) {
        temp2.push(form2[i][1]);
      }
    }

 

    const instance = axios.create()

  return (
    <>
      {form.map((data, idx) => {
        return (
          <div key={idx}>
            <input
              type="checkbox"
              name="check"
              value={data[1]}
              onChange={(e) => {
                form[idx][2] = !form[idx][2];
              }}
            />
            <label htmlFor="check">{data[0]}</label>
          </div>
        );
      })}

      {form2.map((data, idx) => {
        return (
          <div key={idx}>
            <input
              type="checkbox"
              name="check2"
              value={data[1]}
              onChange={(e) => {
                form2[idx][2] = !form2[idx][2];
              }}
            />
            <label htmlFor="check2">{data[0]}</label>
          </div>
        );
      })}
      <button onClick={submit}>계산하기</button>
    </>
  );
};

export default Find;
