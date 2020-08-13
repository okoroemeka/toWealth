import React, { useState, Fragment } from 'react';

import WorthCard from '../../../Reusable/WorthCard';
import NetworthIcon from '../../../UI/Icons/Networth';
import Target from '../../../UI/Icons/Target';
import Calendar from '../../../Reusable/Calendar';
import TableHead from '../../../Reusable/TableHead';
import TableData from '../../../Reusable/TableData';
import './networth.scss';

const Networth = (props) => {
  const [displayAssetTable, setDisplayAssetTable] = useState(false);
  const [displayLiabiltyTable, setDisplayLiabiltyTable] = useState(false);
  const [displayMore, setDisplayMore] = useState(false);

  return (
    <div className='row networth__dashboard'>
      <div className='col-l-7'>
        <div className='row networth__dashboard__card__wrapper'>
          <WorthCard
            className='card__networth'
            cardTitle='MY NET WORTH'
            iconButtonClassName='icon__networth'
            iconClassName='savings__icon'
            Icon={NetworthIcon}
            iconColor='#ec4c47'
          />
          <WorthCard
            className='card__target'
            cardTitle='TARGET WORTH'
            iconButtonClassName='icon__target'
            iconClassName='target__icon'
            Icon={Target}
          />
        </div>
        <div className='calendar__wrapper'>
          <Calendar />
        </div>
        <div className='row'>
          <div className='asset__table'>
            <TableHead
              headerWrapperClassName='asset__table__header'
              firstTitle='Asset'
              secondTitle='6,365.87'
              toggleCaret={displayAssetTable}
              handleShowTable={() => setDisplayAssetTable(!displayAssetTable)}
            />
            <div className='asset__table__body'>
              {displayAssetTable ? (
                <div className='table__body'>
                  <TableData
                    displaySell
                    displayIcon={false}
                    displayMore={displayMore}
                    handleClickMore={() => setDisplayMore(!displayMore)}
                  />
                </div>
              ) : (
                <Fragment />
              )}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='liability__table'>
            <TableHead
              headerWrapperClassName='liability__table__header'
              firstTitle='liabilities'
              secondTitle='6,365.87'
              toggleCaret={displayLiabiltyTable}
              handleShowTable={() =>
                setDisplayLiabiltyTable(!displayLiabiltyTable)
              }
            />
            <div className='liabity__table__body'>
              {displayLiabiltyTable ? (
                <div className='table__body'>
                  <TableData
                    displaySell
                    displayIcon={false}
                    displayMore={displayMore}
                    handleClickMore={() => setDisplayMore(!displayMore)}
                  />
                </div>
              ) : (
                <Fragment />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networth;
