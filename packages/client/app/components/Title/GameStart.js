import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleButton from "./images/button.png";
import TitleButtonHover from "./images/button_touch.png";


const StyledGameStart = styled.div` 
{
    
    position:absolute;
    top: 50%;
    left: 50%;
    z-index : 100;
    transform:translate(-50%, -50%);
    cursor: pointer;
    &:hover
    {
        opacity: 0.7;
    }
    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
}
`;

const GameStart = ({ startGame }) => (
  <StyledGameStart>
    {
      <button type="button" onClick={startGame}>
        <img src = {TitleButton}/>
      </button>
      // <h1>작은 고추</h1>
    }
  </StyledGameStart>
);

GameStart.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default GameStart;
