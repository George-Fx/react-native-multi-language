import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const FailSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        fill='url(#a)'
        d='M25 45.833c11.506 0 20.833-9.327 20.833-20.833 0-11.506-9.327-20.834-20.833-20.834C13.494 4.166 4.167 13.494 4.167 25S13.494 45.833 25 45.833Z'
      />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M25 5.667C14.323 5.667 5.667 14.322 5.667 25c0 10.677 8.656 19.333 19.333 19.333 10.678 0 19.333-8.656 19.333-19.333 0-10.678-8.655-19.334-19.333-19.334ZM2.667 25C2.667 12.665 12.666 2.666 25 2.666c12.334 0 22.333 10 22.333 22.334S37.334 47.333 25 47.333C12.666 47.333 2.667 37.334 2.667 25Zm29.644-7.31a1.5 1.5 0 0 1 0 2.12L27.12 25l5.19 5.19a1.5 1.5 0 1 1-2.122 2.12L25 27.121l-5.19 5.19a1.5 1.5 0 1 1-2.12-2.122L22.878 25l-5.19-5.188a1.5 1.5 0 1 1 2.122-2.122L25 22.88l5.188-5.19a1.5 1.5 0 0 1 2.122 0Z'
        clipRule='evenodd'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-51.525}
          x2={168.959}
          y1={18.651}
          y2={145.071}
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

export default FailSvg;
