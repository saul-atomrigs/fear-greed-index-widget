import React from 'react';
import Svg, { Line, Text as SvgText, Path } from 'react-native-svg';

const Gauge = ({ value }: { value: number }) => {
  const getNeedleAngle = () => {
    // Converts the value to an angle in degrees
    // 0 -> -90 degrees (left), 50 -> 0 degrees (top), 100 -> 90 degrees (right)
    return ((value / 100) * 180) - 90;
  };

  return (
    <>
      <Svg height="200" width="400" viewBox="0 0 400 200">
        {/* Semi-circle */}
        <Path
          d="M 50 150 A 100 100 0 0 1 350 150"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="40"
        />
        {/* Sections (Extreme Fear to Extreme Greed) */}
        <Path
          d="M 50 150 A 100 100 0 0 1 200 50"
          fill="none"
          stroke="#D97706" // Extreme Fear
          strokeWidth="40"
        />
        <Path
          d="M 200 50 A 100 100 0 0 1 350 150"
          fill="none"
          stroke="#34D399" // Greed
          strokeWidth="40"
        />

        {/* Needle */}
        <Line
          x1="200" y1="150"
          x2={200 + 100 * Math.cos((getNeedleAngle() * Math.PI) / 180)}
          y2={150 - 100 * Math.sin((getNeedleAngle() * Math.PI) / 180)} // y2 inverted
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
      </Svg>
    </>
  );
};

export default Gauge;
