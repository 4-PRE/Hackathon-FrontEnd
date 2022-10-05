import { NextPage } from "next";
import styled from "styled-components";

const Header: NextPage = () => {
  return (
    <Wrapper>
      <p>asdf</p>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 50px;
  background-color: gray;
  position: fixed;
  top: 0px;
  right: 0px;
`;
