import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const CrossSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#FF7557' rx={24.5} />
      <Path
        stroke='#FF7557'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m30 20.5-10 10M20 20.5l10 10'
      />
    </Svg>
  );
};
