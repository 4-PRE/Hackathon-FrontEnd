import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import { GET_WELFARE_URL, POST_WELFARE_URL } from "../../constant/url";

const Find = () => {
  const router = useRouter();
  // const [result, setResult] = React.useState<string[]>([]);
  // const [result2, setResult2] = React.useState<string[]>([]);
  const [data, setData] = React.useState<any[] | null>(null);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);
  const [userNumber, setUserNumber] = React.useState(-1);
  const [curPage, setCurPage] = useState(1);

  type form = [string, string, boolean];

  const submit = async (randomNumber: number) => {
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

    let data = {
      targets: temp,
      wish_benefits: temp2,
    };
    let config = {
      method: "patch",
      url: POST_WELFARE_URL + `/${randomNumber}`,
      data: data,
      withCredentials: true,
    };
    console.log(config.url);

    await axios(config)
      .then((res) => {
        console.log(res);
        let config = {
          method: "get",
          url: GET_WELFARE_URL + `/${userNumber}?page=${pageNumber}`,
          data: data,
          withCredentials: true,
        };

        axios(config)
          .then((res) => {
            console.log(res.data);
            setData(res.data.list);
            setPageCount(res.data.page_count);
            console.log(pageCount);
            console.log("1", res.data.list);
          })
          .catch((err) => {
            console.log(err);
            console.log("get err");
          });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(temp, temp2);
  };

  React.useEffect(() => {
    const randomNumber = Math.round(Math.random() * 1000);
    localStorage.setItem("key", randomNumber.toString());
    console.log(localStorage.getItem("key"));
    setUserNumber(randomNumber);
  }, []);

  React.useEffect(() => {
    let config = {
      method: "get",
      url: GET_WELFARE_URL + `/${userNumber}?page=${pageNumber}`,
      data: data,
      withCredentials: true,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        let config = {
          method: "get",
          url: GET_WELFARE_URL + `/${userNumber}?page=${pageNumber}`,
          data: data,
          withCredentials: true,
        };

        axios(config)
          .then((res) => {
            setData(res.data.list);
            setPageCount(res.data.page_count);
            console.log(pageCount);
          })
          .catch((err) => {
            console.log(err);
            console.log("get err");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  const [form, setForm] = React.useState<form[]>([
    ["저소득자", "LOW_INCOME", false],
    ["장애인", "DISABLED", false],
    ["국가유공자", "VETERAN", false],
  ]);

  const [form2, setForm2] = React.useState<form[]>([
    ["교육 지원", "EDUCATION", false],
    ["의료 지원", "MEDICAL", false],
    ["문화생활 지원", "CULTURE", false],
    ["경제적 지원", "FINANCIAL", false],
    ["기타 정부부처 소관", "OTHER", false],
  ]);

  return (
    <>
      <Header />
      <Wrapper>
        <FormWrapper
          style={{
            width: "40%",
            left: data ? "100px" : "calc(50% - 350px)",
          }}
        >
          <h1>받을 수 있는 복지 알아보기</h1>
          {form.map((data, idx) => {
            return (
              <label className="blocks" key={idx}>
                <input
                  type="checkbox"
                  name="check"
                  value={data[1]}
                  onChange={(e) => {
                    let temp = [...form];
                    temp[idx][2] = !form[idx][2];
                    setForm(temp);
                  }}
                />
                <p>{data[0]}</p>
              </label>
            );
          })}

          {form2.map((data, idx) => {
            return (
              <label className="blocks" key={idx}>
                <input
                  type="checkbox"
                  name="check2"
                  value={data[1]}
                  onChange={(e) => {
                    let temp = [...form2];
                    temp[idx][2] = !form2[idx][2];
                    setForm2(temp);
                  }}
                />
                <p>{data[0]}</p>
              </label>
            );
          })}
          <button
            onClick={() => {
              submit(userNumber);
              router.push("/welfare#focus");
            }}
          >
            계산하기
          </button>
        </FormWrapper>
        <h1
          style={{
            position: "absolute",
            right: "200px",
            transition: "0.6s",
            opacity: data && !data.length ? "1" : "0",
          }}
        >
          결괏값이 없습니다.
        </h1>
        <ResultWrapper
          style={{ opacity: data && data.length ? 1 : 0, width: "40%" }}
        >
          <div id="focus" />
          <h1>받을 수 있는 복지 목록 ({curPage}page)</h1>
          {data &&
            data.map((data_: any, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    margin: "50px auto",
                    paddingBottom: "20px",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div>
                    <h2>{data_.department}</h2>
                    <br />
                    <h3>{data_.division}</h3>
                  </div>
                  <div>{data_.summary}</div>
                </div>
              );
            })}
          <ButtonWrapper>
            {new Array(pageCount).fill(0).map((_, idx) => {
              return (
                <button
                  key={idx}
                  style={{
                    backgroundColor:
                      idx + 1 === curPage ? "lightgray" : "unset",
                  }}
                  onClick={() => {
                    setPageNumber(idx);
                    setCurPage(idx + 1);
                    router.push("/welfare#focus");
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </ButtonWrapper>
        </ResultWrapper>
      </Wrapper>
    </>
  );
};

export default Find;

const Wrapper = styled.div`
  position: relative;
  background-color: #d8ebff;
  width: 100vw;
  min-height: calc(100vh - 60px);
  height: fit-content;
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
    display: flex;
    flex-direction: row;
    > p {
      margin-left: 10px;
    }
  }
  > button {
    height: 60px;
    font-weight: bold;
    font-size: 30px;
    margin-top: 30px;
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
  overflow-y: scroll;
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

const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  > button {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.3s;
    :hover {
      transition: 0.3s;
      background-color: #e9e5e5 !important;
    }
  }
`;
