import React from "react";
import type { NextPage } from "next";
import WishForm from "../../components/form/wishForm/index";
import Recommend from "../../components/recommend/index";
import Question from "../../components/form/question";
import { GET_JOBS_URL } from "../../constant/url";
import axios from "axios";

const Test: NextPage = () => {
  let config = {
    method: "get",
    url: `${GET_JOBS_URL}/2`,
    headers: {},
    withCredentials: true,
  };
  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {});
  // http://192.168.50.3:8080/jobs/2

  return (
    <main>
      <Question />
    </main>
  );
};

export default Test;
