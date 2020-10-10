import React from "react";
import PropTypes from 'prop-types';

import {ButtonCSS} from './styledButtonBack';

const ButtonBack = ({ handleClick }) => (
  <ButtonCSS onClick={handleClick}>&#8592; Go Back</ButtonCSS>
);

ButtonBack.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export { ButtonBack };
