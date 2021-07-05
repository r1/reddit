import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = styled.section`
  height: 100%;
  width: 350px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #121212;
  overflow-x: hidden;
  padding-top: 20px;
`;

const DivLogo = styled.div`
  text-align: center;
`;

const DivSearch = styled.div`
  padding-top: 1.5em;
  text-align: center;
`;

function NavBar() {
  return (
    <Header>
      <DivLogo>
        <Logo />
      </DivLogo>
      <DivSearch>
        <SearchBar />
      </DivSearch>
    </Header>
  );
}

export default NavBar;
