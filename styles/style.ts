import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.black};
`;
