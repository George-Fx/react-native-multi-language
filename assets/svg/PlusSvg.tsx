import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const PlusSvg: React.FC = () => {
  return (
    <Svg width={30} height={30} fill='none'>
      <Circle cx={15} cy={15} r={15} fill='#1E2538' />
      <Path
        fill='#fff'
        d='M15.726 15.707V19h-1.423v-3.293H11v-1.414h3.303V11h1.423v3.293H19v1.414h-3.274Z'
      />
    </Svg>
  );
};

export default PlusSvg;
