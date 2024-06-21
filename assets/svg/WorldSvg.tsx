import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const WorldSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Rect width={49} height={49} x={0.5} y={0.5} fill='#fff' rx={24.5} />
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#EEE' rx={24.5} />
      <Path
        stroke='#6B717D'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.269}
        d='M25 33.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5ZM16.75 25h16.5'
      />
      <Path
        stroke='#6B717D'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.269}
        d='M28.173 25A14.241 14.241 0 0 1 25 33.25 14.241 14.241 0 0 1 21.827 25 14.241 14.241 0 0 1 25 16.75 14.241 14.241 0 0 1 28.173 25Z'
      />
    </Svg>
  );
};
