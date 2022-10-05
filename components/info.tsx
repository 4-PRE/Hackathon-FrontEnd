import { NextPage } from "next";
import Img_Help from "../public/img/help.svg";
import Img_About from "../public/img/about.svg";
import Img_Recommend from "../public/img/recommend.svg";
import Img_Search from "../public/img/search.svg";
import Image from "next/image";
import styled from "styled-components";

const blockArr = [
  {
    url: Img_Help,
    title: "서비스가 처음이시라면, 이렇게 이용해보세요.",
    sub: "블라블라",
  },
  {
    url: Img_About,
    title: "자신에게 적용되는 복지를 알아보세요.",
    sub: "ㅁ",
  },
  {
    url: Img_Recommend,
    title: "노인분들을 위한 일자리를 추천해드립니다.",
    sub: "",
    width: 300,
  },
  {
    url: Img_Search,
    title: "다른 일자리를 찾으시나요?",
    sub: "",
  },
];

const Information: NextPage = () => {
  return (
    <>
      {blockArr.map((value, index) => (
        <Block
          imageUrl={value.url}
          isImgSideRight={!!(index % 2)}
          color={!(index % 2) ? "white" : "lightgray"}
          title={value.title}
          sub={value.sub}
          key={index}
          width={value.width}
        />
      ))}
    </>
  );
};

interface BlockProps {
  imageUrl: string;
  isImgSideRight: boolean;
  title: string;
  sub: string;
  color?: string;
  width?: number;
}

const Block = ({
  imageUrl,
  isImgSideRight,
  title,
  sub,
  color,
  width = 450,
}: BlockProps) => {
  return (
    <Wrapper color={color}>
      <CenterWrapper isImgSideRight={isImgSideRight}>
        <div className="info-image" style={{ width: width + "px" }}>
          <Image src={imageUrl} />
        </div>
        <div id="textWrapper">
          <p id="title">{title}</p>
          <p id="sub">{sub}</p>
        </div>
      </CenterWrapper>
    </Wrapper>
  );
};

export default Information;

const Wrapper = styled.div<{ color: string | undefined }>`
  width: 100vw;
  height: 500px;
  background-color: ${(props) => (props.color ? props.color : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterWrapper = styled.div<{ isImgSideRight: boolean }>`
  width: 1000px;
  height: 400px;
  display: flex;
  flex-direction: ${(props) => (props.isImgSideRight ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  .info-image {
    width: 450px;
  }
  > #textWrapper {
    width: 450px;
    height: 300px;
    word-break: keep-all;
    > #title {
      font-weight: bold;
      font-size: 34px;
    }
    > #sub {
      font-size: 20px;
    }
  }
`;
