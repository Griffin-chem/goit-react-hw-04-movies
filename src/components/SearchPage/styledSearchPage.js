import styled from "styled-components";
import { Link } from "react-router-dom";

const ListCSS = styled.ul`
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

const SearchFieldCSS = styled.input`
  width: 350px;
  font-size: 16px;
  line-height: 25px;
  margin-left: 30px;
`;

const SearchButtonCSS = styled.input`
  width: 100px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  line-height: 25px;
  margin-left: 30px;
  background-color: rgb(15, 36, 224);
  color: #ffffff;
  font-weight: 600;
  border: 1px solid rgb(0, 0, 255);
`;
export { ListCSS, ListItemCSS, LinkCSS, SearchFieldCSS, SearchButtonCSS };
