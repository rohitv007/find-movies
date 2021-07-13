import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../../images/search-icon.svg";
import { Content, Wrapper } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [search, setSearch] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      setSearchTerm(search);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [search, setSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
