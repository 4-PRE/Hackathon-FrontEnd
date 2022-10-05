import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

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

const Recommend: NextPage = () => {
  return (
    <Container>
      {new Array(5).fill(null).map((data, idx) => {
        return <Company key={idx} />;
      })}
    </Container>
  );
};

export default Recommend;
