import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
};

const NextSvg: React.FC<Props> = ({color = '#FCC55E'}) => {
  return (
    <Svg width={11} height={22} fill='none'>
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m1.033 21 8.934-10L1.033 1'
      />
    </Svg>
  );
};

export default NextSvg;
