import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const PhoneNoVerifiedSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#FF7557' rx={24.5} />
      <Path
        stroke='#FF7557'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M29.167 16.667h-8.334c-.92 0-1.666.746-1.666 1.666v13.334c0 .92.746 1.666 1.666 1.666h8.334c.92 0 1.666-.746 1.666-1.666V18.333c0-.92-.746-1.666-1.666-1.666ZM25 30h.008'
      />
    </Svg>
  );
};
