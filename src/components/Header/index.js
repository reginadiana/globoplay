import React from "react";
import logo from "../../assets/netflix-logo.png";
import * as Styled from "./style";
import { SearchOutlined } from "@ant-design/icons";

const Header = ({ getSearch }) => (
  <Styled.Header>
    <div><img src={logo} alt="Logo" width="120" height="40" /></div>
    

    <Styled.Search tabIndex="0">
      <SearchOutlined />
      <input
        type="search"
        placeholder="Busque por um titulo ..."
        onChange={(event) => getSearch(event.target.value.toUpperCase())}
      />
    </Styled.Search>
  </Styled.Header>
);

export default Header;
