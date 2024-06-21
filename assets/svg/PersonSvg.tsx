import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const PersonSvg: React.FC = () => {
  return (
    <Svg width={60} height={60} fill='none'>
      <Circle cx={27} cy={18} r={11} fill='url(#a)' />
      <Path
        fill='url(#b)'
        d='M14 34.5h14.5l-1 18L18 51l-5-1.5L9.5 46 8 43l-.5-3.5.5-3 2-2h4Z'
      />
      <Path
        fill='#1E2538'
        d='M27 6a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm-9 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm-5.973 15A6 6 0 0 0 6 39c0 5.073 2.499 8.898 6.405 11.391C16.251 52.842 21.435 54 27 54h.15c-.1-.494-.15-.996-.15-1.5V51c-5.205 0-9.771-1.092-12.981-3.141C10.869 45.849 9 42.93 9 39c0-1.659 1.344-3 3.027-3h16.47a7.5 7.5 0 0 1 4.629-2.874L33.15 33H12.027Z'
      />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M36 34.5V36h-1.5a4.5 4.5 0 0 0-4.5 4.5v12a4.5 4.5 0 0 0 4.5 4.5h18a4.5 4.5 0 0 0 4.5-4.5v-12a4.5 4.5 0 0 0-4.5-4.5H51v-1.5a4.5 4.5 0 0 0-4.5-4.5h-6a4.5 4.5 0 0 0-4.5 4.5ZM46.5 33h-6a1.5 1.5 0 0 0-1.5 1.5V36h9v-1.5a1.5 1.5 0 0 0-1.5-1.5Z'
        clipRule='evenodd'
      />
      <Rect width={21} height={15} x={33} y={39} fill='url(#c)' rx={1} />
      <Defs>
        <LinearGradient
          id='a'
          x1={-40.436}
          x2={72.791}
          y1={13.415}
          y2={86.174}
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
          x1={-20.569}
          x2={81.441}
          y1={40.757}
          y2={108.995}
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
          x1={-22.582}
          x2={60.584}
          y1={39.718}
          y2={73.913}
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

export default PersonSvg;
