import React from "react";
import type { NextPage } from "next";
import axios from "axios";
import { GET_JOBS_URL } from "../../constant/url";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";
const Container = styled.div`
  width: 95%;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;
const Company_name = styled.h1``;
const Address = styled.h1``;
const MainText = styled.h2``;
const Left = styled.div`
  width: 200px;
  color: grey;
`;
const Line = styled.hr`
  margin: 40px auto;
  height: 2px;
  background-color: #00aaff;
  border: 0;
  box-sizing: border-box;
`;

const Single: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분
  const id = route?.id;

  interface single {
    company_name: string; // 회사 이름
    start_date: string; // 시작일자
    end_date: string; // 종료일자
    work_start_hour: number; // 업무 시작시간(24시간제)
    work_end_hour: number; // 업무 종료
    description: string;
    age: string;
    arrange: string;
    require_number: string;
    region: string;
    address: string; // 주소
    telephone: string; // 전화번호
  }

  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<single>();

  // const data = {
  //   company_name: "company_name", // 회사 이름
  //   start_date: "start_date", // 시작일자
  //   end_date: "end_date", // 종료일자
  //   work_start_hour: "work_start_hour", // 업무 시작시간(24시간제)
  //   work_end_hour: "work_end_hour", // 업무 종료
  //   description: "description",
  //   age: "age",
  //   require_number: "require_number",
  //   region: "region",
  //   address: "address", // 주소
  //   telephone: "telephone", // 전화번호
  // };

  React.useEffect(() => {
    if (id != null) {
      let config = {
        method: "get",
        url: `${GET_JOBS_URL}/${id}`,
        headers: { "Content-Type": `application/json` },
      };
      setLoading(true);
      axios(config)
        .then((response) => {
          console.log(response.data.result);
          setData(response.data.result);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <Container>
      {loading ? (
        <div>정보를 불러오는 중입니다..</div>
      ) : (
        data && (
          <>
            <Company_name>{data.company_name}</Company_name>
            <Line />

            <div style={{ display: "flex" }}>
              <Left>전화번호</Left>
              <div> {data.telephone}</div>
            </div>
            <Line />

            <MainText>모집 조건</MainText>

            <div style={{ display: "flex" }}>
              <Left>
                <div>모집 인원</div>
                <div>직종</div>
                <div>나이</div>
              </Left>
              <div>
                <div>{data.require_number}</div>
                {data.arrange ? (
                  <div>{data.arrange}</div>
                ) : (
                  <div>직종이 없습니다</div>
                )}
                <div>{data.age}</div>
              </div>
            </div>

            <Line />

            <MainText>근무 조건</MainText>
            <div style={{ display: "flex" }}>
              <Left>
                <div>시급</div>
                <div>설명</div>
                <div>근무 시간</div>
                <div>근무 기간</div>
              </Left>
              <div>
                <div>기관문의</div>
                <div>
                  {data.description ? data.description : "설명이 없습니다."}
                </div>
                <div>
                  {data.work_start_hour} ~ {data.work_end_hour}시
                </div>
                <div>
                  {data.start_date} ~ {data.end_date}
                </div>
              </div>
            </div>
            <Line />

            <MainText>근무 지역</MainText>
            <div style={{ display: "flex" }}>
              <Left>
                <div>지역</div>
                <div>주소</div>
              </Left>
              <div>
                <div> {data.region}</div>
                <div> {data.address}</div>
              </div>
            </div>
            <Line />
          </>
        )
      )}
    </Container>
  );
};

export default Single;
