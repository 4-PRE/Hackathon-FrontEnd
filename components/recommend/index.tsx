import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import { GET_JOBS_URL } from "../../constant/url";
import axios from "axios";
import { useRouter } from "next/router";
const Company = styled.div`
  width: 300px;
  height: 230px;
  background-color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid black;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  > #block {
  }
`;

const Title = styled.h1`
  font-size: 24px;
  border-bottom: 2px solid lightgray;
  margin-bottom: 15px;
`;

const Address = styled.h4``;
const Salary = styled.h4``;
const Recruit = styled.h5``;

interface searchData {
  company_name: string;
  end_date: string;
  id: number;
  region: string;
  region_detail: string;
  require_number: number;
  start_date: string;
  telephone: string;
}

const Recommend: NextPage<{ data: searchData[] }> = ({ data }) => {
  const router = useRouter();
  return (
    <Container>
      {data.map((data_, idx) => {
        return (
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
        );
      })}
    </Container>
  );
};

export default Recommend;
