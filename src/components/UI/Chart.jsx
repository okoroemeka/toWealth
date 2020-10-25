import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const Chart = (props) => {
  const { data, goalValue } = props;
  return (
    <svg viewBox='0 0 600 600'>
      <VictoryPie
        standalone={false}
        width={600}
        height={600}
        data={[
          {
            x: `${data?data[0]?.value:45}%`,
            y: data?data[0]?.value:50,
            fill: '#FFA500',
            opacity: 1,
          },
          { x: `${data?data[1]?.value:55}%`, y:data?data[1]?.value:55, fill: '#0073F7', opacity: 1 },
        ]}
        innerRadius={185}
        labelRadius={197}
        style={{
          labels: { fontSize: 28, fill: 'white' },
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
        text={`$${goalValue||'5,000'}`}
      />
    </svg>
  );
};

export default Chart;
