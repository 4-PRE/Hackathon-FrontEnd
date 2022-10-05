import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import { GET_JOBS_URL } from "../../constant/url";
import axios from "axios";

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
  React.useEffect(() => {
    let config = {
      method: "get",
      url: `${GET_JOBS_URL}/2`,
      headers: { "Content-Type": `application/json` },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <Container>
      {new Array(5).fill(null).map((data, idx) => {
        return (
          <div key={idx}>
            <Company>ddwqd</Company>
          </div>
        );
      })}
    </Container>
  );
};

export default Recommend;
