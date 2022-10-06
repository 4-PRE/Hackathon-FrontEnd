import React from "react";
import type { NextPage } from "next";
import WishForm from "../../components/form/wishForm/index";
import Recommend from "../../components/recommend/index";
import Question from "../../components/form/question";
import Speech from "../../components/speech/index";

import { GET_JOBS_URL } from "../../constant/url";
import axios from "axios";

const Test: NextPage = () => {
  return (
    <main>
      <Speech />
    </main>
  );
};

export default Test;
