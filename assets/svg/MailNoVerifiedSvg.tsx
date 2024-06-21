import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const MailNoVerifiedSvg: React.FC = (): JSX.Element | null => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#FF7557' rx={24.5} />
      <Path
        stroke='#FF7557'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M18.333 18.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H18.333c-.916 0-1.666-.75-1.666-1.667V20c0-.917.75-1.667 1.666-1.667Z'
      />
      <Path
        stroke='#FF7557'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M33.333 20 25 25.833 16.667 20'
      />
    </Svg>
  );
};
