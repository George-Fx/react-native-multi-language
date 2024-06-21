import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};

const HeartProductSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#C8CDD9' rx={24.5} />
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M32.367 18.842a4.584 4.584 0 0 0-6.484 0l-.883.883-.883-.883a4.584 4.584 0 0 0-6.484 6.483l.884.883L25 32.692l6.483-6.484.884-.883a4.582 4.582 0 0 0 0-6.483v0Z'
      />
    </Svg>
  );
};

export default HeartProductSvg;
