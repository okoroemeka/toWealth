import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const Chart = (props) => {
  const { data } = props;
  return (
    <svg viewBox='0 0 600 600'>
      <VictoryPie
        standalone={false}
        width={600}
        height={600}
        data={[
          {
            x: '4%',
            y: 12,
            fill: '#FFA500',
            opacity: 1,
          },
          { x: '96%', y: 150, fill: '#0073F7', opacity: 1 },
        ]}
        innerRadius={180}
        labelRadius={195}
        style={{
          labels: { fontSize: 35, fill: 'white' },
          data: {
            fill: ({ datum }) => datum.fill,
            opacity: ({ datum }) => datum.opacity,
            borderRadius: ({ datum }) => datum.borderRadius,
            borderColor: ({ datum }) => datum.borderColor,
          },
        }}
      />
      <VictoryLabel
        textAnchor='middle'
        style={{ fontSize: 50 }}
        x={300}
        y={300}
        text='$50,000'
      />
    </svg>
  );
};

export default Chart;
