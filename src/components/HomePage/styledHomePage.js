import styled from "styled-components";
import { Link } from "react-router-dom";

const MainListCSS = styled.ul`
  list-style-type: "\u2731";
  padding: 15px 0 0 30px;
  color: rgb(75, 0, 130);
`;

const ListItemCSS = styled.li`
  padding-left: 15px;
  margin-bottom: 5px;
  &:hover,
  :focus {
    color: rgb(130, 0, 22);
    font-weight: 600;
  }
`;

const LinkCSS = styled(Link)`
  font-size: 20px;
  color: rgb(75, 0, 130);
  text-decoration: none;

  &:hover,
  :focus {
    color: rgb(130, 0, 22);
    font-weight: 600;
  }
`;

export { MainListCSS, ListItemCSS, LinkCSS };
