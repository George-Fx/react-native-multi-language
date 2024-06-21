import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const HeartColourfulSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          fill='url(#b)'
          d='M24.166 20.833 18.75 7.083 15.416 5 10 5.417 5 8.75l-3.333 3.333v5.834l2.083 5.416 12.916 13.334 7.5-15.834Z'
        />
        <Path
          fill='url(#c)'
          d='m25 11.667 5-5.417 3.334 4.167 2.5 9.166v14.584L25 45l-9.166-8.333s5.074-7.701 5.833-13.334c.933-6.926-3.75-17.5-3.75-17.5L25 11.667Z'
        />
        <Path
          fill='url(#d)'
          d='M34.167 5.417 30 7.5s3.577 6.614 4.583 11.25c1.381 6.363-.416 16.667-.416 16.667.555-.556 1.833-1.75 2.5-2.084.833-.416 4.166-3.75 5-4.166.833-.417 4.583-5.417 4.583-6.25 0-.834 1.667-5 1.667-5.417 0-.417-.834-4.167-.834-4.583 0-.334-1.11-2.361-1.666-3.334l-2.084-2.5c-1.527-.555-4.666-1.666-5-1.666h-4.166Z'
        />
        <Path
          fill='#1E2538'
          d='m25 45-1.18 1.18a1.665 1.665 0 0 0 2.36 0L25 45Zm0-33.333-1.18 1.18a1.666 1.666 0 0 0 2.36 0L25 11.667Zm1.18 32.153L6.297 23.94 3.94 26.297 23.82 46.18l2.36-2.36Zm17.523-19.88L23.82 43.82l2.36 2.36 19.88-19.883-2.357-2.357ZM20.607 9.63l3.213 3.217 2.36-2.36-3.217-3.214-2.356 2.357Zm5.573 3.217 3.213-3.217-2.356-2.357-3.217 3.214 2.36 2.36Zm10.367-9.514a13.448 13.448 0 0 0-9.51 3.94l2.356 2.357a10.124 10.124 0 0 1 7.154-2.963V3.333Zm10.12 13.454c0 2.683-1.067 5.256-2.967 7.153l2.36 2.357a13.453 13.453 0 0 0 3.94-9.51h-3.333Zm3.333 0A13.453 13.453 0 0 0 36.547 3.333v3.334a10.12 10.12 0 0 1 10.12 10.12H50ZM13.453 6.667c2.684 0 5.257 1.066 7.154 2.966l2.356-2.36a13.453 13.453 0 0 0-9.51-3.94v3.334Zm-10.12 10.12a10.12 10.12 0 0 1 10.12-10.12V3.333A13.453 13.453 0 0 0 0 16.787h3.333Zm2.964 7.153a10.117 10.117 0 0 1-2.963-7.153H0c0 3.566 1.417 6.986 3.94 9.51l2.357-2.357Z'
        />
      </G>
      <Defs>
        <LinearGradient
          id='b'
          x1={-56.052}
          x2={79.341}
          y1={14.234}
          y2={76.051}
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
          x1={-10.899}
          x2={118.624}
          y1={19.448}
          y2={57.371}
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
          x1={-17.421}
          x2={63.053}
          y1={6.854}
          y2={20.968}
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
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h50v50H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HeartColourfulSvg;
