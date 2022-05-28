import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: center;
  }
`;

export const Movies = styled.div`
  margin: 16px auto;
  max-width: 1250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Movie = styled.img`
  cursor: pointer;
  width: 300px;
  margin-right: 12px;
  margin-bottom: 16px;

  :hover {
    opacity: 0.5;
  }
`;

export const Info = styled.h6`
  color: red;
  margin: 5px 10px 5px 0;
`;
