import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import { Content, LogoImg, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb_logo" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
