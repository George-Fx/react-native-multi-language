import * as React from 'react';
import Svg, {SvgProps, Rect, Path, G, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const EmptyCartSvg: React.FC = () => {
  return (
    <Svg width={182} height={182} fill='none'>
      <Rect
        width={100}
        height={100}
        x={41}
        y={41}
        stroke='#fff'
        strokeWidth={2}
        rx={50}
      />
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M81 74.334 76 81v23.333a3.336 3.336 0 0 0 3.333 3.334h23.334a3.333 3.333 0 0 0 3.333-3.334V81l-5-6.666H81ZM76 81h30'
      />
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M97.667 87.666a6.666 6.666 0 1 1-13.334 0'
      />
      <G filter='url(#a)'>
        <Circle cx={91} cy={91} r={70} stroke='#fff' strokeWidth={2} />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
