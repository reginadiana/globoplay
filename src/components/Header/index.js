import React, { useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/netflix-logo.png";
import { Context } from "../../context";
import * as Styled from "./style";

const Header = () => {
  const { setSearch } = useContext(Context);

  return (
    <Styled.Header>
      <div>
        <img src={logo} alt="Logo" width="120" height="40" />
      </div>

      <Styled.Search tabIndex="0">
        <SearchOutlined />
        <input
          type="search"
          placeholder="Busque por um titulo ..."
          onChange={(event) => setSearch(event.target.value.toUpperCase())}
        />
      </Styled.Search>
    </Styled.Header>
  );
};

export default Header;
