import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const CheckCircleSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        fill='url(#a)'
        d='M45.833 23.083V25A20.834 20.834 0 1 1 33.48 5.958'
      />
      <Path
        fill='url(#b)'
        d='M45.833 23.083V25A20.834 20.834 0 1 1 33.48 5.958S37.872 7.5 41.686 12c3.814 4.5 4.147 11.083 4.147 11.083Z'
      />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M20.74 6.13A19.333 19.333 0 0 1 32.868 7.33a1.5 1.5 0 0 0 1.22-2.74A22.333 22.333 0 1 0 47.334 25v-1.918a1.5 1.5 0 0 0-3 0V25A19.333 19.333 0 1 1 20.74 6.13Zm26.155 3.263a1.5 1.5 0 1 0-2.123-2.12L25 27.066l-5.188-5.19a1.5 1.5 0 1 0-2.122 2.122l6.25 6.25a1.5 1.5 0 0 0 2.122 0L46.895 9.393Z'
        clipRule='evenodd'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-106.115}
          x2={71.475}
          y1={6.151}
          y2={58.306}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#812500' />
          <Stop offset={0.158} stopColor='#B30056' />
          <Stop offset={0.297} stopColor='#FF5945' />
          <Stop offset={0.406} stopColor='#FFBD2D' />
          <Stop offset={0.533} stopColor='#F5FF43' />
          <Stop offset={0.618} stopColor='#82E82D' />
          <Stop offset={0.733} stopColor='#00C79F' />
          <Stop offset={0.83} stopColor='#00CCEC' />
          <Stop offset={0.958} stopColor='#69DBFF' />
        </LinearGradient>
        <LinearGradient
          id='b'
          x1={-106.115}
          x2={71.475}
          y1={6.151}
          y2={58.306}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#812500' />
          <Stop offset={0.158} stopColor='#B30056' />
          <Stop offset={0.297} stopColor='#FF5945' />
          <Stop offset={0.406} stopColor='#FFBD2D' />
          <Stop offset={0.533} stopColor='#F5FF43' />
          <Stop offset={0.618} stopColor='#82E82D' />
          <Stop offset={0.733} stopColor='#00C79F' />
          <Stop offset={0.83} stopColor='#00CCEC' />
          <Stop offset={0.958} stopColor='#69DBFF' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CheckCircleSvg;
