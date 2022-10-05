import type { NextPage } from "next";
import Header from "../components/header";
import * as S from "../styles/style";
import Slider from "../components/slider";
import Information from "../components/info";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Slider />
        <Information />
      </S.Container>
    </>
  );
};

export default Home;
