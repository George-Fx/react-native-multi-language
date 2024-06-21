import * as React from 'react';
import Svg, {SvgProps, Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

export const GiftSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Rect width={49} height={49} x={0.5} y={0.5} fill='#fff' rx={24.5} />
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#EEE' rx={24.5} />
      <G
        stroke='#6B717D'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        clipPath='url(#a)'
      >
        <Path d='M31.667 25v8.333H18.333V25M33.333 20.833H16.667V25h16.666v-4.167ZM25 33.333v-12.5M25 20.833h-3.75a2.083 2.083 0 1 1 0-4.166c2.917 0 3.75 4.166 3.75 4.166ZM25 20.833h3.75a2.083 2.083 0 0 0 0-4.166c-2.917 0-3.75 4.166-3.75 4.166Z' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M15 15h20v20H15z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
