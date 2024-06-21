import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
};

const BurgerSvg: React.FC<Props> = ({color = '#193364'}) => {
  return (
    <Svg width={25} height={12} fill='none'>
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeWidth={2}
        d='M1 1h18M1 6h23M1 11h18'
      />
    </Svg>
  );
};

export default BurgerSvg;
