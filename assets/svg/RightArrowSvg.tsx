import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightArrowSvg: React.FC = () => {
  return (
    <Svg width={8} height={15} fill='none'>
      <Path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M1.2 12.96 5.995 7.2 1.2 1.44'
      />
    </Svg>
  );
};

export default RightArrowSvg;
