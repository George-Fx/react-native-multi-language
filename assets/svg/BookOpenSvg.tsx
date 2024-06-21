import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const BookOpenSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        fill='url(#a)'
        d='M4.167 6.25h12.5A8.333 8.333 0 0 1 25 14.583V43.75a6.25 6.25 0 0 0-6.25-6.25H4.167V6.25Z'
      />
      <Path
        fill='url(#b)'
        d='M45.833 6.25h-12.5A8.333 8.333 0 0 0 25 14.583V43.75a6.25 6.25 0 0 1 6.25-6.25h14.583V6.25Z'
      />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M4.167 4.75a1.5 1.5 0 0 0-1.5 1.5V37.5a1.5 1.5 0 0 0 1.5 1.5H18.75a4.75 4.75 0 0 1 4.75 4.746v.004a1.5 1.5 0 1 0 3 0v-.004A4.75 4.75 0 0 1 31.25 39h14.583a1.5 1.5 0 0 0 1.5-1.5V6.25a1.5 1.5 0 0 0-1.5-1.5h-12.5A9.833 9.833 0 0 0 25 9.363a9.83 9.83 0 0 0-8.333-4.613h-12.5ZM26.5 37.626A7.75 7.75 0 0 1 31.25 36h13.083V7.75h-11a6.833 6.833 0 0 0-6.833 6.833v23.043Zm-3 0V14.583a6.833 6.833 0 0 0-6.833-6.833h-11V36H18.75a7.75 7.75 0 0 1 4.75 1.626Z'
        clipRule='evenodd'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-49.277}
          x2={85.096}
          y1={17.185}
          y2={65.155}
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
          x1={-30.141}
          x2={63.812}
          y1={8.046}
          y2={23.375}
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

export default BookOpenSvg;
