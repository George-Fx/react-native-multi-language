import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const WishlistRmvBtnSvg: React.FC = () => (
  <Svg width={33} height={33} fill='none'>
    <Rect width={32} height={32} x={0.5} y={0.5} fill='#fff' rx={16} />
    <Rect width={32} height={32} x={0.5} y={0.5} stroke='#EEE' rx={16} />
    <Path
      fill='#FF7557'
      stroke='#FF7557'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M22.762 11.265a3.897 3.897 0 0 0-5.511 0l-.751.751-.75-.75a3.897 3.897 0 1 0-5.512 5.51l.751.751 5.51 5.51 5.512-5.51.75-.75a3.897 3.897 0 0 0 0-5.512Z'
    />
  </Svg>
);
