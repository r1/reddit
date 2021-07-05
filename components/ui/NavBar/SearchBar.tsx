import styled from "styled-components";

const Search = styled.input`
  outline: none;
  color: #242424;
  background-color: #161616;
  font-weight: bold;
  width: 19em;
  height: 3.6em;
  border-radius: 55px;
  border: 1px solid #282828;
  padding: 0 16px 0 24px;
`;

function SearchBar() {
  return (
    <div>
      <Search type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
