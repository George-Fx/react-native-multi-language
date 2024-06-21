import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowSvg: React.FC = () => {
  return (
    <Svg width={15} height={9} fill='none'>
      <Path
        fill='#fff'
        d='M14.424 4.924a.6.6 0 0 0 0-.848L10.606.257a.6.6 0 0 0-.849.849L13.152 4.5 9.757 7.894a.6.6 0 1 0 .849.849l3.818-3.819ZM0 5.1h14V3.9H0v1.2Z'
      />
    </Svg>
  );
};
