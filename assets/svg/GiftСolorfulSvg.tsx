import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const GiftСolorfulSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        fill='url(#a)'
        d='M45.833 14.583H25v31.25h16.667V25h4.166V14.583Z'
      />
      <Path fill='url(#b)' d='M5 14.583h20.833v31.25H9.167V25H5V14.583Z' />
      <Path fill='url(#c)' d='M5 15h41v10H5z' />
      <Path
        fill='#1E2538'
        fillRule='evenodd'
        d='M15.625 5.667a3.708 3.708 0 1 0 0 7.416h7.4a18.42 18.42 0 0 0-1.292-2.985c-1.345-2.445-3.296-4.431-6.108-4.431ZM8.917 9.375c0 1.329.394 2.617 1.118 3.708H4.167a1.5 1.5 0 0 0-1.5 1.5V25a1.5 1.5 0 0 0 1.5 1.5h2.666v19.333a1.5 1.5 0 0 0 1.5 1.5h33.334a1.5 1.5 0 0 0 1.5-1.5V26.5h2.666a1.5 1.5 0 0 0 1.5-1.5V14.583a1.5 1.5 0 0 0-1.5-1.5h-5.868a6.709 6.709 0 0 0-5.59-10.416c-4.48 0-7.216 3.221-8.736 5.985-.236.429-.448.856-.639 1.273-.19-.417-.403-.844-.639-1.273-1.52-2.764-4.256-5.985-8.736-5.985a6.708 6.708 0 0 0-6.708 6.708Zm25.462 3.708h-7.403c.29-.865.712-1.93 1.291-2.985 1.345-2.445 3.296-4.431 6.108-4.431a3.708 3.708 0 0 1 .004 7.416Zm-7.879 3V23.5h17.833v-7.417H26.5Zm-10.875 0H23.5V23.5H5.667v-7.417h9.958ZM23.5 26.5H9.833v17.833H23.5V26.5Zm3 17.833V26.5h13.667v17.833H26.5Z'
        clipRule='evenodd'
      />
      <Defs>
        <LinearGradient
          id='a'
          x1={-28.444}
          x2={99.563}
          y1={23.695}
          y2={78.533}
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
          x1={53.679}
          x2={-74.131}
          y1={25.446}
          y2={74.302}
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
          x1={-103.517}
          x2={-26.035}
          y1={15.479}
          y2={108.775}
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

export default GiftСolorfulSvg;
