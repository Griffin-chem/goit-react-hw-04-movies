import styled from 'styled-components';

const ErrPageCss = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: #333333;
  opacity: 0.95;
  text-align: center;
  line-height: 100vh;
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  `;

const CloseCSS = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
`;

export { ErrPageCss, CloseCSS }