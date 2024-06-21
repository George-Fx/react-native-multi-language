import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
};

const PrevSvg: React.FC<Props> = ({color = '#1E2538'}) => {
  return (
    <Svg width={11} height={22} fill='none'>
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M9.967 21 1.033 11 9.967 1'
      />
    </Svg>
  );
};

export default PrevSvg;
