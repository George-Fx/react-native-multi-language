import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const CommentSvg: React.FC = () => {
  return (
    <Svg width={40} height={40} fill='none'>
      <Path
        fill='url(#a)'
        d='M35 19.167c.006 2.2-.508 4.37-1.5 6.333a14.167 14.167 0 0 1-12.667 7.833c-2.2.006-4.37-.508-6.333-1.5L5 35l3.167-9.5a13.967 13.967 0 0 1-1.5-6.333A14.167 14.167 0 0 1 14.5 6.5 13.967 13.967 0 0 1 20.833 5h.834A14.133 14.133 0 0 1 35 18.333v.834Z'
      />
      <Path
        fill='url(#b)'
        d='M35 19.167c.006 2.2-.508 4.37-1.5 6.333a14.167 14.167 0 0 1-12.667 7.833C14.5 31 6 34.5 6 34.5s.94-.865.767-1.5C5 26.5 29.5-1 35 18.333v.834Z'
      />
      <Path
        fill='url(#c)'
        d='M35 19.167c.006 2.2-.508 4.37-1.5 6.333a14.166 14.166 0 0 1-12.667 7.833C.667 32 34 9 35 18.333v.834Z'
      />
      <Path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        d='M35 19.167c.006 2.2-.508 4.37-1.5 6.333a14.166 14.166 0 0 1-12.667 7.833c-2.2.006-4.37-.508-6.333-1.5L5 35l3.167-9.5a13.966 13.966 0 0 1-1.5-6.333A14.166 14.166 0 0 1 14.5 6.5 13.967 13.967 0 0 1 20.833 5h.834A14.133 14.133 0 0 1 35 18.333v.834Z'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-71.959}
          x2={82.442}
          y1={13.748}
          y2={112.965}
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
          x1={-8}
          x2={61.5}
          y1={7.5}
          y2={63.439}
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
          x1={-40.254}
          x2={44.758}
          y1={16.936}
          y2={46.851}
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

export default CommentSvg;
