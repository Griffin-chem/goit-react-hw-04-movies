import styled from "styled-components";

const CastListCSS = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  align-items: center;
`;

const ListItemCSS = styled.li`
  text-align: center;
  margin-bottom: 20px;
`;

const ActorCSS = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 3px;
`;

const CharCSS = styled.p`
  font-size: 16px;
`;

const CastImageCSS = styled.img`
  width: 100px;
  margin-bottom: 5px;
`;

export { CastListCSS, ListItemCSS, ActorCSS, CharCSS, CastImageCSS };
