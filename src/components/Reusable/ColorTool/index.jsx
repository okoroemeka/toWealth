import React from 'react';

import plane from '../../../assets/images/plane.svg';
import jet from '../../../assets/images/jet.svg';
import computer from '../../../assets/images/computer.svg';
import tick from '../../../assets/images/tick1.svg';
import ColorBar from '../../UI/ColorBar';
import './colorTool.scss';

const ColorTool = ({ colorsState = [], handleSelectColor = () => null }) => {
  return (
    <div className='color__tool'>
      <div className='color__bar'>
        <h4>Color</h4>
        <div className='color__area'>
          {colorsState.map(({ colorId, color, active }) => (
            <ColorBar
              key={colorId}
              color={color}
              handleClick={() =>
                handleSelectColor({
                  type: 'SELECT__COLOR',
                  payload: { colorId, color },
                })
              }
            >
              {active && <img src={tick} alt='mark' className='mark' />}
            </ColorBar>
          ))}
          <ColorBar color='#d8d8d8' className='others__button'>
            <span className='others__text'>Others</span>
          </ColorBar>
        </div>
      </div>
      <div className='color__icon'>
        <h4>Icon</h4>
        <div className='icon'>
          <ColorBar color='#b620e0' />
          <ColorBar color='#979797'>
            <img src={plane} alt='plane' className='bar__icon' />
          </ColorBar>
          <ColorBar color='#979797'>
            <img src={jet} alt='jet' className='bar__icon' />
          </ColorBar>
          <ColorBar color='#979797'>
            <img src={computer} alt='computer' className='bar__icon' />
          </ColorBar>
          <ColorBar color='#d8d8d8' className='others__button'>
            <span className='others__text'>Others</span>
          </ColorBar>
        </div>
      </div>
    </div>
  );
};

export default ColorTool;
