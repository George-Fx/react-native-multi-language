import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const MailVerifiedSvg: React.FC = (): JSX.Element | null => {
  return (
    <Svg width={40} height={40} fill='none'>
      <Rect width={40} height={40} fill='#F5FAFB' rx={20} />
      <Path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M13.333 13.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H13.333c-.916 0-1.666-.75-1.666-1.667V15c0-.917.75-1.667 1.666-1.667Z'
      />
      <Path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M28.333 15 20 20.833 11.667 15'
      />
    </Svg>
  );
};

export default MailVerifiedSvg;
