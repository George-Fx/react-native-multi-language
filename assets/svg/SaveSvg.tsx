import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const SaveSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        fill='url(#a)'
        d='M39.583 43.75H10.417a4.167 4.167 0 0 1-4.167-4.167V10.417a4.167 4.167 0 0 1 4.167-4.167h22.916L43.75 16.667v22.916a4.167 4.167 0 0 1-4.167 4.167Z'
      />
      <Path fill='url(#b)' d='M15 28h21v15H15z' />
      <Path fill='url(#c)' d='M14 7h22l-3 10H14V7Z' />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M10.417 8.25a2.167 2.167 0 0 0-2.167 2.167v29.166a2.167 2.167 0 0 0 2.167 2.167h2.166V27.083a2 2 0 0 1 2-2h20.834a2 2 0 0 1 2 2V41.75h2.166a2.167 2.167 0 0 0 2.167-2.167V17.495L32.505 8.25H16.583v6.417H31.25a2 2 0 1 1 0 4H14.583a2 2 0 0 1-2-2V8.25h-2.166Zm4.166-4h-4.166a6.167 6.167 0 0 0-6.167 6.167v29.166a6.167 6.167 0 0 0 6.167 6.167h29.166a6.167 6.167 0 0 0 6.167-6.167V16.667a2 2 0 0 0-.586-1.415L34.748 4.836a2 2 0 0 0-1.415-.586h-18.75Zm2 24.833V41.75h16.834V29.083H16.583Z'
        clipRule='evenodd'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-89.948}
          x2={103.053}
          y1={17.185}
          y2={141.206}
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
          x1={-40.582}
          x2={42.584}
          y1={28.718}
          y2={62.913}
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
          x1={-15.405}
          x2={44.292}
          y1={10.476}
          y2={85.78}
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

export default SaveSvg;
