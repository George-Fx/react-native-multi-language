import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const ShoppingBasketSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path fill='url(#a)' d='M20 33H9l1.5 6 3.5 3 6.5-.5L20 33Z' />
      <Path fill='url(#b)' d='M20.5 32h9l1.5-8.5H19.5l1 8.5Z' />
      <Path fill='url(#c)' d='m21 33 .5 8.5h7L30 33h-9Z' />
      <Path fill='url(#d)' d='M40.5 31.5H31l1-7.5 10-.5-1.5 8Z' />
      <Path fill='url(#e)' d='M9 32h10.5l-1-9.5L7 23l2 9Z' />
      <Path fill='url(#f)' d='m40.5 32.5-9-.5-3 9.5 3.5.5 6.5-1.5 2-8Z' />
      <Path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        d='m31.25 22.917-2.083 18.75m10.416-18.75L31.25 8.333M4.167 22.918h41.666m-38.541 0 3.333 15.416a4.167 4.167 0 0 0 4.167 3.334h20.416a4.166 4.166 0 0 0 4.167-3.334l3.542-15.416M9.375 32.292h31.25m-30.208-9.375L18.75 8.333m0 14.584 2.083 18.75'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-20.405}
          x2={85.19}
          y1={29.931}
          y2={101.931}
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
          x1={-20.405}
          x2={85.19}
          y1={29.931}
          y2={101.931}
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
          id='c'
          x1={-32.871}
          x2={64.892}
          y1={28.749}
          y2={102.041}
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
          id='d'
          x1={-32.871}
          x2={64.892}
          y1={28.749}
          y2={102.041}
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
          id='e'
          x1={-81.666}
          x2={41.961}
          y1={23.434}
          y2={85.808}
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
          id='f'
          x1={-81.666}
          x2={41.961}
          y1={23.434}
          y2={85.808}
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

export default ShoppingBasketSvg;
