import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderCSS = styled.ul`
  position: sticky;
  list-style: none;
  padding: 10px 20px;
  top: 0;
  background-color: #ffffff;
`;

const HeaderItemCSS = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const LinkCSS = styled(Link)`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: rgb(25, 0, 42);

  &:hover,
  :focus {
    color: rgb(182, 11, 102);
  }
`;

export { HeaderCSS, HeaderItemCSS, LinkCSS };
