import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const LockSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        fill='url(#a)'
        d='M39.583 22.917H10.417a4.167 4.167 0 0 0-4.167 4.166v14.584a4.167 4.167 0 0 0 4.167 4.166h29.166a4.167 4.167 0 0 0 4.167-4.166V27.083a4.167 4.167 0 0 0-4.167-4.166Z'
      />
      <Path
        fill='url(#b)'
        d='M43.75 27.083a4.167 4.167 0 0 0-4.167-4.166c-14.89 0-29.166 22.916-29.166 22.916h29.166a4.167 4.167 0 0 0 4.167-4.166V27.083Z'
      />
      <Path
        fill='url(#c)'
        d='M44.167 26.742c0-2.343-1.4-4.242-3.125-4.242-11.168 0-21.875 23.333-21.875 23.333h21.875c1.726 0 3.125-1.9 3.125-4.242V26.742Z'
      />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M18.695 8.278a8.917 8.917 0 0 1 15.222 6.305v6.834H16.083v-6.834c0-2.364.94-4.633 2.612-6.305Zm-5.612 13.139v-6.834a11.917 11.917 0 1 1 23.834 0v6.834h2.666a5.667 5.667 0 0 1 5.667 5.666v14.584a5.667 5.667 0 0 1-5.667 5.666H10.417a5.667 5.667 0 0 1-5.667-5.666V27.083a5.667 5.667 0 0 1 5.667-5.666h2.666Zm22.334 3h-25a2.667 2.667 0 0 0-2.667 2.666v14.584a2.667 2.667 0 0 0 2.667 2.666h29.166a2.667 2.667 0 0 0 2.667-2.666V27.083a2.667 2.667 0 0 0-2.667-2.666h-4.166Z'
        clipRule='evenodd'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-43.873}
          x2={58.122}
          y1={30.883}
          y2={128.021}
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
          x1={-75.093}
          x2={54.28}
          y1={29.599}
          y2={150.521}
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
          x1={-47.002}
          x2={58.315}
          y1={23.618}
          y2={56.757}
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

export default LockSvg;
