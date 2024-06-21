import * as React from 'react';
import Svg, {Rect, Path, Circle} from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};

const HeartBigSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg width={30} height={30} fill='none'>
      <Circle cx={15} cy={15} r={15} fill='#fff' />
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.652 11.051a2.895 2.895 0 0 0-4.094 0L15 11.61l-.558-.558a2.895 2.895 0 1 0-4.094 4.094l.558.558L15 19.797l4.094-4.094.558-.558a2.895 2.895 0 0 0 0-4.094v0Z'
      />
    </Svg>
  );
};

export default HeartBigSvg;
