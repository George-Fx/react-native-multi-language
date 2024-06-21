import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

type Props = {
  color?: string;
};

const GoBackSvg: React.FC<Props> = ({color = '#193364'}) => {
  return (
    <Svg width={8} height={14} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M7 13 1 7l6-6'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h8v14H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default GoBackSvg;
