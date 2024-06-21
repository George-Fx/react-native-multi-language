import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const WishlistAddBtn: React.FC = () => (
  <Svg width={33} height={33} fill='none'>
    <Rect width={32} height={32} x={0.5} y={0.5} fill='#fff' rx={16} />
    <Rect width={32} height={32} x={0.5} y={0.5} stroke='#EEE' rx={16} />
    <Path
      stroke='#161E2F'
      strokeLinecap='round'
      d='M16.677 11.5v10M11.5 16.323h10'
    />
  </Svg>
);
