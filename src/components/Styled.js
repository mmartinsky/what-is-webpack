import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-column-gap: 20px;
  }
`;

export const Iframe = styled.iframe`
  @media (min-width: 1000px) {
    margin-top: 40px;
  }
`;
