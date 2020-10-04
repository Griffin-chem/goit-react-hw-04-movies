import styled from 'styled-components';

const HeaderCSS = styled.ul`
  position: sticky;
  list-style: none;
  padding: 5px 20px;
`;

const HeaderItemCSS = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

export { HeaderCSS, HeaderItemCSS }