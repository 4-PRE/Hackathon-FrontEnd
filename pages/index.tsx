import type { NextPage } from "next";
import Header from "../components/header";
import * as S from "../styles/style";
import Slider from "../components/slider";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Slider />
      </S.Container>
    </>
  );
};

export default Home;
