import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const LogoSvg: React.FC = (props: SvgProps) => {
  return (
    <Svg width={133} height={93} fill='none' {...props}>
      <Path
        fill='#1E2538'
        d='M.993 72.12h3.78c.666 0 1.287.09 1.863.27.576.18 1.04.48 1.395.9.36.42.54.993.54 1.719 0 .486-.093.921-.28 1.305a2.863 2.863 0 0 1-.71.945c-.288.24-.591.393-.91.459.27.03.547.111.829.243.282.132.543.315.783.549.24.234.432.528.576.882.15.354.225.768.225 1.242 0 .66-.144 1.245-.432 1.755-.282.504-.702.9-1.26 1.188-.552.282-1.24.423-2.061.423H.993V72.12Zm2.25 10.062h1.629c.456 0 .819-.075 1.089-.225a1.33 1.33 0 0 0 .594-.612c.12-.258.18-.552.18-.882 0-.528-.168-.933-.504-1.215-.336-.282-.813-.423-1.431-.423H3.243v3.357Zm0-5.139h1.43c.373 0 .679-.072.919-.216.246-.15.432-.348.558-.594.126-.252.189-.525.189-.819 0-.564-.165-.951-.495-1.161-.324-.21-.765-.315-1.323-.315H3.243v3.105ZM16.2 72.12h4.572c.672 0 1.275.141 1.809.423a3.09 3.09 0 0 1 1.269 1.215c.318.528.477 1.167.477 1.917 0 .744-.138 1.356-.414 1.836-.276.474-.61.831-1 1.071-.383.24-.74.378-1.07.414L24.759 84H22.22l-2.637-4.833H18.44V84H16.2V72.12Zm2.24 5.463h1.53c.57 0 1.054-.141 1.45-.423.402-.282.603-.756.603-1.422 0-.666-.198-1.134-.594-1.404-.396-.276-.876-.414-1.44-.414H18.44v3.663Zm16.476-5.463h2.26L41.746 84h-2.394l-.927-2.565h-4.752L32.73 84h-2.403l4.59-11.88Zm-.504 7.326h3.276l-1.629-4.608h-.027l-1.62 4.608Zm13.931-7.326h2.25V84h-2.25V72.12Zm12.003 2.079.153.027V84h-2.24V72.12h3.095l5.328 9.756-.153.036V72.12h2.241V84h-3.114l-5.31-9.801Zm18.092 0 .153.027V84H76.35V72.12h3.096l5.328 9.756-.153.036V72.12h2.24V84h-3.114l-5.31-9.801ZM94.44 72.12h7.371v1.989h-5.14v2.97h5.068v1.926h-5.067v3.006h5.139V84h-7.371V72.12Zm19.048-.216c.714 0 1.335.081 1.863.243.534.156.957.324 1.269.504.318.18.51.297.576.351l-1.098 1.827a4.44 4.44 0 0 0-.495-.324 3.803 3.803 0 0 0-.828-.378 3.151 3.151 0 0 0-1.053-.171c-.546 0-.984.105-1.314.315a.99.99 0 0 0-.486.891c0 .264.087.501.261.711.174.204.429.396.765.576.342.18.759.369 1.251.567.432.168.843.363 1.233.585.396.222.747.483 1.053.783.312.3.558.648.738 1.044.186.396.279.849.279 1.359 0 .57-.117 1.068-.351 1.494a3.074 3.074 0 0 1-.954 1.071 4.336 4.336 0 0 1-1.386.648 6.167 6.167 0 0 1-1.647.216c-.78 0-1.482-.09-2.106-.27-.618-.186-1.119-.384-1.503-.594-.384-.21-.609-.345-.675-.405l1.152-1.899c.072.054.207.141.405.261a6.837 6.837 0 0 0 1.692.693c.348.09.702.135 1.062.135.648 0 1.137-.135 1.467-.405.33-.27.495-.621.495-1.053 0-.324-.105-.609-.315-.855-.21-.246-.507-.471-.891-.675-.378-.21-.831-.423-1.359-.639a9.542 9.542 0 0 1-1.476-.774c-.45-.3-.813-.666-1.089-1.098-.276-.438-.414-.975-.414-1.611 0-.63.177-1.179.531-1.647.36-.468.834-.831 1.422-1.089a4.782 4.782 0 0 1 1.926-.387Zm13.48 2.205h-2.979V72.12h8.199v1.989h-2.97V84h-2.25v-9.891Z'
      />
      <G clipPath='url(#a)'>
        <Path
          fill='#1E2538'
          d='M27.018 31.748c3.169-5.484-1.883-9.126-2.055-9.297-.128.128-1.84 1.97-2.055 4.456-2.183-2.357-5.566-2.186-5.78-2.143 0 .257-.385 6.17 5.438 7.412-2.355 2.571-7.193 7.027-13.53 8.827-1.24.342-3.853.814-5.394.428-1.37-.343-.128 5.399-.128 5.399s15.798-2.357 24.36-.986c4.496.728 11.218 4.07 11.218 4.07-1.584-5.998-3.853-11.225-6.208-14.738-2.098-1.329-4.239-2.528-5.866-3.428Z'
        />
        <Path
          fill='#FCC55E'
          d='M26.076 39.332a4.067 4.067 0 1 1-8.134 0 4.067 4.067 0 0 1 4.067-4.07c2.27.042 4.067 1.842 4.067 4.07Z'
        />
        <Path
          fill='url(#b)'
          d='M120.01 34.919c-.471-.429-1.028-.9-1.67-1.414-3.939 6.64-9.59 12.939-13.015 16.452 0 0 9.461-7.326 14.685-15.038Z'
        />
        <Path
          fill='url(#c)'
          d='M88.756 2.528c-.386 7.284-2.398 23.907-12.117 47.43 0 0 16.184-29.992 16.141-45.76a36.265 36.265 0 0 0-4.024-1.67Z'
        />
        <Path
          fill='url(#d)'
          d='M51.55 49.957h3.297c2.697-25.15-12.159-37.875-12.159-37.875 3.51 6.727 9.248 20.48 8.863 37.875Z'
        />
        <Path
          fill='url(#e)'
          d='M24.492 37.918c-.17-.257-1.027-.857-1.241-1.029-1.884.043-3.04.3-4.239 2.014-.6 1.971.642 4.199 2.57 4.499 2.91.386 5.008-2.87 2.91-5.484Z'
          opacity={0.42}
        />
        <Path
          fill='#fff'
          d='M24.878 39.332a2.824 2.824 0 0 1-2.826 2.827 2.824 2.824 0 0 1-2.826-2.827 2.824 2.824 0 0 1 2.826-2.828c1.541 0 2.826 1.285 2.826 2.828Z'
        />
        <Path
          fill='url(#f)'
          d='M24.664 39.117a2.824 2.824 0 0 1-2.826 2.828 2.824 2.824 0 0 1-2.826-2.828 2.824 2.824 0 0 1 2.826-2.827c1.541 0 2.826 1.285 2.826 2.827Z'
        />
        <Path
          fill='#000'
          d='M22.352 38.775c0 .77-.642 1.413-1.413 1.413-.77 0-1.413-.642-1.413-1.413 0-.772.642-1.414 1.413-1.414.77 0 1.413.642 1.413 1.414Z'
        />
        <Path
          fill='#fff'
          d='M22.01 38.389c0 .257-.172.471-.429.471-.214 0-.428-.214-.428-.471s.171-.471.428-.471.428.214.428.471Z'
        />
        <Path
          fill='url(#g)'
          d='M88.756 2.528c-.386 7.284-2.398 23.907-12.117 47.43h7.578c4.367-8.398 14.985-29.864 15.756-41.646a46.362 46.362 0 0 0-11.217-5.784Z'
        />
        <Path
          fill='url(#h)'
          d='M118.34 33.505c-3.939 6.64-9.59 12.939-13.015 16.452h9.547c1.199-2.742 4.838-10.497 7.15-13.068-2.184-1.928-.557-.857-3.682-3.384Z'
        />
        <Path
          fill='#1E2538'
          d='M114.658 24.807c-1.456 3.985-3.853 8.184-6.508 12.082-.599 8.74-2.783 13.025-2.783 13.025 2.698-2.785 6.808-7.283 10.318-12.339-.128-6.984-1.027-12.768-1.027-12.768Z'
        />
        <Path
          fill='url(#i)'
          d='M42.731 12.082c3.51 6.727 9.248 20.48 8.82 37.875h7.32c1.328-13.582 1.414-34.918-3.553-46.1a47.298 47.298 0 0 0-12.587 8.225Z'
        />
        <Path
          fill='#1E2538'
          d='M66.493 22.15C61.783 10.755 55.36 3.857 55.36 3.857c3.125 7.112 4.239 18.252 4.281 28.963 3.94 9.212 3.982 17.138 3.982 17.138 2.526-10.625 3.125-20.008 2.869-27.806Z'
        />
        <Path
          fill='url(#j)'
          d='M29.759 31.577c3.296 2.656 7.064 9.726 9.333 18.38h7.706C45.6 42.76 42.603 30.334 35.495 20.351c-2.354 3.428-4.324 7.198-5.736 11.226Z'
        />
        <Path
          fill='#1E2538'
          d='M50.052 33.033c-6.807-8.312-14.556-12.682-14.556-12.682 4.195 5.913 6.978 12.725 8.776 18.766 5.352 5.099 7.279 10.84 7.279 10.84a77.565 77.565 0 0 0-1.499-16.924Z'
        />
        <Path
          fill='url(#k)'
          d='m123.734 46.444-3.425-3.042 9.12-4.927-5.695 7.969Z'
        />
        <Path
          fill='#1E2538'
          d='M122.022 36.89c-.771.813-1.627 2.227-2.569 3.813l.813 2.742 3.04-1.628-1.284-4.928ZM67.905 50c-.17-4.542-3.382-8.14-7.278-8.14-3.939 0-7.107 3.598-7.278 8.14h14.556Z'
        />
        <Path
          fill='url(#l)'
          d='M79.251.343A47.19 47.19 0 0 0 73.728 0c-3.64 0-7.15.428-10.532 1.242 2.27 7.498 6.037 25.15.428 48.715h7.535C72.915 44.002 81.22 14.696 79.251.343Z'
        />
        <Path
          fill='#1E2538'
          d='M84.346 27.592C83.019 11.74 79.25.342 79.25.342c1.113 8.056-1.028 20.823-3.425 31.492 1.199 9.897.813 18.123.813 18.123 3.468-8.355 5.952-15.852 7.707-22.365ZM101.514 27.464c.728-12.725-1.498-19.152-1.498-19.152-.471 7.112-4.539 17.78-8.649 26.95-.514 4.284-1.284 9.125-2.355 14.524h.086c5.01-6.855 9.248-15.167 12.416-22.322Z'
        />
        <Path
          fill='#1E2538'
          d='M96.034 49.957c-.171-4.327-3.64-7.798-7.878-7.798-4.238 0-7.663 3.47-7.877 7.798h15.755Z'
        />
        <Path
          fill='url(#m)'
          d='M106.78 14.096c-2.483 7.026-8.905 23.779-17.81 35.861h8.948c4.795-5.441 13.358-15.895 16.74-25.15a48.699 48.699 0 0 0-7.878-10.711Z'
        />
      </G>
      <Defs>
        <LinearGradient
          id='b'
          x1={107.08}
          x2={121.533}
          y1={50.697}
          y2={29.334}
          gradientUnits='userSpaceOnUse'
        >
          <Stop offset={0.121} stopColor='#0006C0' />
          <Stop offset={0.834} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='c'
          x1={73.64}
          x2={92.149}
          y1={45.267}
          y2={6.817}
          gradientUnits='userSpaceOnUse'
        >
          <Stop offset={0.121} stopColor='#0006C0' />
          <Stop offset={0.993} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='d'
          x1={47.742}
          x2={49.822}
          y1={52.956}
          y2={11.149}
          gradientUnits='userSpaceOnUse'
        >
          <Stop offset={0.121} stopColor='#0006C0' />
          <Stop offset={0.993} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='e'
          x1={23.956}
          x2={20.478}
          y1={36.488}
          y2={43.167}
          gradientUnits='userSpaceOnUse'
        >
          <Stop offset={0.091} stopColor='#0FF' />
          <Stop offset={0.099} stopColor='#02FCFB' />
          <Stop offset={0.247} stopColor='#23C4BA' />
          <Stop offset={0.393} stopColor='#409381' />
          <Stop offset={0.532} stopColor='#576C53' />
          <Stop offset={0.665} stopColor='#694D2F' />
          <Stop offset={0.788} stopColor='#763715' />
          <Stop offset={0.9} stopColor='#7E2A05' />
          <Stop offset={0.988} stopColor='#812500' />
        </LinearGradient>
        <LinearGradient
          id='f'
          x1={18.985}
          x2={24.665}
          y1={39.129}
          y2={39.129}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#B3B3B3' />
          <Stop offset={0.921} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='g'
          x1={21.496}
          x2={135.389}
          y1={13.35}
          y2={37.309}
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
          id='h'
          x1={19.615}
          x2={133.506}
          y1={22.297}
          y2={46.257}
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
          id='i'
          x1={20.123}
          x2={134.014}
          y1={19.881}
          y2={43.841}
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
          id='j'
          x1={17.776}
          x2={131.666}
          y1={31.04}
          y2={54.999}
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
          id='k'
          x1={20.095}
          x2={133.988}
          y1={20.006}
          y2={43.966}
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
          id='l'
          x1={21.24}
          x2={135.132}
          y1={14.567}
          y2={38.527}
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
          id='m'
          x1={20.98}
          x2={134.869}
          y1={15.814}
          y2={39.773}
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
          <Path fill='#fff' d='M3 0h126.429v50H3z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LogoSvg;
