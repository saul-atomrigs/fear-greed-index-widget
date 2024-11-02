import React from 'react';
import Svg, { Line, Text as SvgText, Path } from 'react-native-svg';

const Gauge = ({ value }: { value: number }) => {
  const getNeedleAngle = () => {
    const reversedValue = 100 - value;
    return (reversedValue / 100) * 180;
  };

  return (
    <>
      <Svg height="200" width="300" viewBox="0 0 400 200">
        {/* Semi-circle */}
        <Path
          d="M 50 150 A 100 100 0 0 1 350 150"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="40"
        />

        {/* Needle */}
        <Line
          x1="200" y1="150"
          x2={200 + 100 * Math.cos((getNeedleAngle() * Math.PI) / 180)}
          y2={150 - 100 * Math.sin((getNeedleAngle() * Math.PI) / 180)}
          stroke="black"
          strokeWidth="4"
        />

        {/* Value Display */}
        <SvgText
          x="200"
          y="180"
          fontSize="24"
          fill="black"
          textAnchor="middle"
          fontWeight="bold"
        >
          {value}
        </SvgText>

        {/* Left Label: 공포 */}
        <SvgText
          x="50"
          y="130"
          fontSize="20"
          fill="purple"
          textAnchor="middle"
          fontWeight="bold"
        >
          공포
        </SvgText>

        {/* Right Label: 탐욕 */}
        <SvgText
          x="350"
          y="130"
          fontSize="20"
          fill="red"
          textAnchor="middle"
          fontWeight="bold"
        >
          탐욕
        </SvgText>
      </Svg>
    </>
  );
};

export default Gauge;
