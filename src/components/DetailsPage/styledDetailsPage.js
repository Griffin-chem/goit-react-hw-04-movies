import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailsBlockCSS = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PosterCSS = styled.img`
  width: 250px;
  display: inline-block;
`;

const InfoBlockCSS = styled.div`
  width: calc(100vw - 250px);
  display: inline-block;
  margin-left: 30px;
`;

const MovieTitleCSS = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ScoreCSS = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 10px;
`;

const SubcaptionCSS = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const OverviewCSS = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const GenresListCSS = styled.ul`
  list-style: none;
`;

const ListItemCSS = styled.li`
  display: inline-block;
  padding-left: 15px;
  font-size: 14px;
`;

const AddBlockCSS = styled.div`
margin: 15px 0;
padding: 10px 20px;
border-top: 1px solid rgb(13, 25, 80);
border-bottom: 1px solid rgb(13, 25, 80);
`;

const LinkCSS = styled(Link)`
  display: block;
  padding-left: 25px;
  font-size: 14px;
  margin-bottom: 3px;
`;

export {
  PosterCSS,
  InfoBlockCSS,
  DetailsBlockCSS,
  MovieTitleCSS,
  ScoreCSS,
  SubcaptionCSS,
  OverviewCSS,
  GenresListCSS,
  ListItemCSS,
  AddBlockCSS,
  LinkCSS,
};
