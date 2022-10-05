import type { NextPage } from "next";
import * as S from "../styles/style";
import Slider from "../components/slider";

const Home: NextPage = () => {
  return (
    <S.Container>
      <Slider />
    </S.Container>
  );
};

export default Home;
