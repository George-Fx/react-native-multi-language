import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const LogOutMainSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        fill='url(#a)'
        d='M18.75 43.75h-8.333a4.167 4.167 0 0 1-4.167-4.167V10.417a4.167 4.167 0 0 1 4.167-4.167h8.333'
      />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M8.531 8.531c.5-.5 1.178-.781 1.886-.781h8.333a1.5 1.5 0 0 0 0-3h-8.333a5.667 5.667 0 0 0-5.667 5.667v29.166a5.667 5.667 0 0 0 5.667 5.667h8.333a1.5 1.5 0 0 0 0-3h-8.333a2.667 2.667 0 0 1-2.667-2.667V10.417c0-.708.281-1.386.781-1.886Zm23.742 4.992a1.5 1.5 0 0 1 2.121 0l10.415 10.415.018.018A1.491 1.491 0 0 1 45.25 25c0 .38-.143.76-.43 1.05l-.01.012-10.416 10.415a1.5 1.5 0 1 1-2.121-2.121l7.856-7.856H18.75a1.5 1.5 0 0 1 0-3h21.379l-7.856-7.856a1.5 1.5 0 0 1 0-2.121Z'
        clipRule='evenodd'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-25.816}
          x2={61.095}
          y1={17.185}
          y2={35.801}
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

export default LogOutMainSvg;
