import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  height: fit-content;
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.black};
`;
