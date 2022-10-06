import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import { GET_JOBS_URL } from "../../constant/url";
import axios from "axios";
import { useRouter } from "next/router";
const Company = styled.div`
  width: 300px;
  height: 200px;
  background-color: #ccc;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Address = styled.h4``;
const Salary = styled.h4``;
const Recruit = styled.h5``;

interface searchData {
  company_name: string;
  end_date: string;
  id: number;
  region: string;
  regionDetail: string;
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
            key={idx}
            onClick={() => {
              router.push(`/recruit/${data_.id}`);
            }}
          >
            <Company>
              <Title>{data_.company_name}</Title>
              <Address>
                주소 : {data_.region} {data_.regionDetail}
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
