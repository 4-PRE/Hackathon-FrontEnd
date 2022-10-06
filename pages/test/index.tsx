import React from "react";
import type { NextPage } from "next";
import WishForm from "../../components/form/wishForm/index";
import Recommend from "../../components/recommend/index";
import Question from "../../components/form/question";
import { GET_JOBS_URL } from "../../constant/url";
import axios from "axios";

const Test: NextPage = () => {
  React.useEffect(() => {
    let config = {
      method: "get",
      url: `${GET_JOBS_URL}/`,
      headers: { "Content-Type": `application/json` },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {});
  }, []);
  return (
    <main>
      
    </main>
  );
};

export default Test;
