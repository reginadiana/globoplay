import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;

  @media screen and (max-width: 592px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
      margin: 20px 0;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background: #fff;
  border-radius: 4px;
  background-color: transparent;

  svg {
    color: white;
  }

  input {
    outline: none;
    margin-left: 10px;
    color: white;
    background-color: transparent;
  }
`;
