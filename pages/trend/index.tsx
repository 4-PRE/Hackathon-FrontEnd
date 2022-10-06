import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import trend from "../../public/img/trend.svg";
import arrow from "../../public/img/arrow.svg";
import { useRouter } from "next/router";

function Trend() {
  const [state, setState] = useState(60);
  const router = useRouter();
  const arr = [60, 70, 80];
  const temp2 = [
    {
      id: 1,
      company_name: "중소기업기술혁신협회 대구경북지회",
      start_date: "2022-12-31",
      end_date: "2022-12-31",
      require_number: 1,
      region: "대구광역시",
      region_detail: "달서구",
      telephone: "0537454704",
    },
    {
      id: 26,
      company_name: "인크루트알바콜주식회사",
      start_date: "2022-09-26",
      end_date: "2022-09-26",
      require_number: 1,
      region: "인천광역시",
      region_detail: "부평구",
      telephone: "0221869059",
    },
  ];
  const temp3 = [
    {
      id: 27,
      company_name: "사단법인광주전남여성벤처협회",
      start_date: "2022-09-28",
      end_date: "2022-09-28",
      require_number: 1,
      region: "광주광역시",
      region_detail: "북구",
      telephone: "0629446671",
    },
    {
      id: 33,
      company_name: "사단법인 한국문화산업협회(민간)",
      start_date: "2022-09-26",
      end_date: "2022-09-26",
      require_number: 2,
      region: "세종특별자치시",
      region_detail: "세종시",
      telephone: "0448637305",
    },
  ];
  const temp = [
    [
      {
        id: 2,
        company_name: "(주)티이에스",
        start_date: "2022-11-01",
        end_date: "2022-11-01",
        require_number: 5,
        region: "서울특별시",
        region_detail: "강남구",
        telephone: "025663065",
      },
      {
        id: 3,
        company_name: "부산희망리본 사회적협동조합",
        start_date: "2022-12-30",
        end_date: "2022-12-30",
        require_number: 10,
        region: "부산광역시",
        region_detail: "연제구",
        telephone: "0518618835",
      },
      {
        id: 19,
        company_name: "사단법인 한국문화산업협회(민간)",
        start_date: "2022-09-28",
        end_date: "2022-09-28",
        require_number: 2,
        region: "세종특별자치시",
        region_detail: "세종시",
        telephone: "0448637305",
      },
    ],
    temp2,
    temp3,
  ];
  return (
    <>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Icon>
            <Image src={trend} />
          </Icon>
          <h1>대의 인기 일자리</h1>
          {arr.map((value, index) => (
            <Age
              key={index}
              style={{
                opacity: index * 10 + 60 === state ? 1 : 0,
                top:
                  index * 10 + 60 > state
                    ? "0px"
                    : index * 10 + 60 < state
                    ? "100px"
                    : "46px",
              }}
            >
              {value}
            </Age>
          ))}
          <Arrow onClick={() => setState(state < 80 ? state + 10 : state)}>
            <Image src={arrow} />
          </Arrow>
          <Arrow
            onClick={() => setState(state > 60 ? state - 10 : state)}
            style={{ top: "80px", transform: "rotate(180deg)" }}
          >
            <Image src={arrow} />
          </Arrow>
        </TitleWrapper>
        <ContentWrapper>
          {temp[state / 10 - 6].map((data_, idx) => (
            <div
              id="block"
              key={idx}
              onClick={() => {
                router.push(`/recruit/${data_.id}`);
              }}
            >
              <Company>
                <Title>{data_.company_name}</Title>
                <Address>
                  주소 : {data_.region} {data_.region_detail}
                </Address>
                <Recruit>
                  모집 기간 : {data_.start_date} ~ {data_.end_date}
                </Recruit>
                <Recruit>모집 인원 : {data_.require_number}</Recruit>
                <Recruit>전화번호 : {data_.telephone}</Recruit>
              </Company>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default Trend;

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  height: fit-content;
  background-color: #c3dcf6;
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  border: 3px solid black;
  width: 800px;
  height: 150px;
  background-color: white;
  position: absolute;
  left: calc(50% - 400px);
  top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > h1 {
    padding-left: 60px;
  }
`;

const Icon = styled.span`
  position: absolute;
  width: 100px !important;
  height: 100px !important;
  top: 36px;
  left: 50px;
  > span {
    position: unset !important;
    display: flex !important;
  }
`;

const Arrow = styled.span`
  border-radius: 10px;
  :hover {
    background-color: lightgray;
    transition: 0.3s;
  }
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  width: 50px !important;
  height: 50px !important;
  top: 15px;
  right: 50px;
  > span {
    position: unset !important;
    display: flex !important;
  }
`;

const Age = styled.h1`
  position: absolute;
  left: 170px;
  transition: 0.3s;
`;

const ContentWrapper = styled.div`
  width: 1000px;
  height: 300px;
  margin-top: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const Company = styled.div`
  width: 300px;
  height: 230px;
  background-color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid black;
`;

const Title = styled.h1`
  font-size: 24px;
  border-bottom: 2px solid lightgray;
  margin-bottom: 15px;
`;

const Address = styled.h4``;
const Salary = styled.h4``;
const Recruit = styled.h5``;
