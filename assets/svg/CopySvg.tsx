import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const CopySvg: React.FC = () => {
  return (
    <Svg width={14} height={14} fill='none'>
      <G
        stroke='#666E84'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        clipPath='url(#a)'
      >
        <Path d='M11.667 5.25h-5.25c-.645 0-1.167.522-1.167 1.167v5.25c0 .644.522 1.166 1.167 1.166h5.25c.644 0 1.166-.522 1.166-1.166v-5.25c0-.645-.522-1.167-1.166-1.167Z' />
        <Path d='M2.917 8.75h-.584a1.167 1.167 0 0 1-1.166-1.167v-5.25a1.167 1.167 0 0 1 1.166-1.166h5.25A1.167 1.167 0 0 1 8.75 2.333v.584' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h14v14H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CopySvg;
