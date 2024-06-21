import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const PhoneVerifiedSvg: React.FC = () => {
  return (
    <Svg width={40} height={40} fill='none'>
      <Rect width={40} height={40} fill='#F5FAFB' rx={20} />
      <Path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M24.167 11.667h-8.334c-.92 0-1.666.746-1.666 1.666v13.334c0 .92.746 1.666 1.666 1.666h8.334c.92 0 1.666-.746 1.666-1.666V13.333c0-.92-.746-1.666-1.666-1.666ZM20 25h.008'
      />
    </Svg>
  );
};

export default PhoneVerifiedSvg;
