import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const LogoSmallSvg: React.FC = () => {
  return (
    <Svg width={76} height={30} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          fill='#1E2538'
          d='M14.411 19.049c1.9-3.29-1.13-5.476-1.233-5.579-.077.078-1.105 1.183-1.233 2.674-1.31-1.414-3.34-1.311-3.468-1.285 0 .154-.231 3.701 3.262 4.447-1.413 1.542-4.315 4.216-8.117 5.296-.745.205-2.312.488-3.237.257-.822-.206-.077 3.239-.077 3.239s9.48-1.414 14.617-.592c2.697.437 6.73 2.443 6.73 2.443-.95-3.6-2.312-6.736-3.725-8.844a69.521 69.521 0 0 0-3.519-2.056Z'
        />
        <Path
          fill='#FCC55E'
          d='M13.846 23.599a2.44 2.44 0 1 1-4.88 0 2.44 2.44 0 0 1 2.44-2.442c1.36.026 2.44 1.105 2.44 2.442Z'
        />
        <Path
          fill='url(#b)'
          d='M70.206 20.951a21.08 21.08 0 0 0-1.002-.848c-2.363 3.984-5.754 7.763-7.81 9.871 0 0 5.678-4.396 8.812-9.023Z'
        />
        <Path
          fill='url(#c)'
          d='M51.453 1.517c-.23 4.37-1.438 14.344-7.27 28.457 0 0 9.71-17.995 9.685-27.455a21.747 21.747 0 0 0-2.415-1.002Z'
        />
        <Path
          fill='url(#d)'
          d='M29.13 29.974h1.978c1.619-15.09-7.295-22.725-7.295-22.725 2.106 4.036 5.549 12.288 5.317 22.725Z'
        />
        <Path
          fill='url(#e)'
          d='M12.895 22.75c-.102-.154-.616-.514-.745-.616-1.13.025-1.823.18-2.543 1.208-.36 1.182.386 2.52 1.542 2.7 1.746.23 3.005-1.723 1.746-3.291Z'
          opacity={0.42}
        />
        <Path
          fill='#fff'
          d='M13.127 23.599a1.694 1.694 0 1 1-3.391 0c0-.951.77-1.697 1.695-1.697s1.696.771 1.696 1.697Z'
        />
        <Path
          fill='url(#f)'
          d='M12.998 23.47a1.694 1.694 0 1 1-3.39 0c0-.95.77-1.696 1.695-1.696.924 0 1.695.771 1.695 1.696Z'
        />
        <Path
          fill='#000'
          d='M11.61 23.265a.856.856 0 0 1-.847.848.856.856 0 0 1-.847-.848c0-.463.385-.849.847-.849.463 0 .848.386.848.849Z'
        />
        <Path
          fill='#fff'
          d='M11.405 23.033c0 .155-.102.283-.256.283-.129 0-.257-.128-.257-.283 0-.154.103-.282.257-.282.154 0 .257.128.257.282Z'
        />
        <Path
          fill='url(#g)'
          d='M51.453 1.517c-.23 4.37-1.438 14.344-7.27 28.457h4.547c2.62-5.038 8.991-17.917 9.454-24.987a27.815 27.815 0 0 0-6.73-3.47Z'
        />
        <Path
          fill='url(#h)'
          d='M69.204 20.103c-2.363 3.984-5.754 7.763-7.81 9.871h5.73c.718-1.645 2.902-6.298 4.289-7.84-1.31-1.157-.334-.515-2.21-2.031Z'
        />
        <Path
          fill='#1E2538'
          d='M66.995 14.884c-.874 2.391-2.312 4.91-3.905 7.25-.36 5.244-1.67 7.815-1.67 7.815 1.619-1.671 4.085-4.37 6.191-7.404-.077-4.19-.616-7.66-.616-7.66Z'
        />
        <Path
          fill='url(#i)'
          d='M23.839 7.25c2.106 4.035 5.548 12.287 5.291 22.724h4.393c.796-8.149.848-20.95-2.132-27.66a28.38 28.38 0 0 0-7.552 4.935Z'
        />
        <Path
          fill='#1E2538'
          d='M38.096 13.29c-2.826-6.838-6.68-10.976-6.68-10.976 1.876 4.267 2.544 10.95 2.57 17.378 2.363 5.526 2.388 10.282 2.388 10.282C37.89 23.6 38.25 17.97 38.095 13.291Z'
        />
        <Path
          fill='url(#j)'
          d='M16.055 18.946c1.978 1.594 4.239 5.835 5.6 11.028h4.624c-.72-4.319-2.517-11.773-6.782-17.763a28.715 28.715 0 0 0-3.442 6.735Z'
        />
        <Path
          fill='#1E2538'
          d='M28.231 19.82c-4.084-4.987-8.734-7.61-8.734-7.61 2.518 3.548 4.188 7.636 5.266 11.26 3.211 3.06 4.367 6.504 4.367 6.504a46.545 46.545 0 0 0-.899-10.154Z'
        />
        <Path
          fill='url(#k)'
          d='m72.44 27.866-2.055-1.825 5.472-2.956-3.416 4.781Z'
        />
        <Path
          fill='#1E2538'
          d='M71.413 22.134c-.462.488-.976 1.336-1.541 2.288l.488 1.645 1.824-.977-.771-2.956ZM38.943 30c-.102-2.725-2.03-4.884-4.367-4.884-2.363 0-4.264 2.16-4.367 4.884h8.734Z'
        />
        <Path
          fill='url(#l)'
          d='M45.75.206A28.316 28.316 0 0 0 42.438 0c-2.184 0-4.29.257-6.32.746 1.362 4.498 3.623 15.09.257 29.228h4.521C41.95 26.401 46.932 8.817 45.752.206Z'
        />
        <Path
          fill='#1E2538'
          d='M48.807 16.555C48.011 7.044 45.752.205 45.752.205c.668 4.834-.617 12.494-2.055 18.895.719 5.939.488 10.874.488 10.874 2.08-5.013 3.57-9.511 4.623-13.419ZM59.108 16.478c.437-7.635-.899-11.49-.899-11.49-.282 4.266-2.723 10.668-5.189 16.169-.308 2.57-.77 5.475-1.413 8.715h.052c3.005-4.114 5.548-9.1 7.45-13.394Z'
        />
        <Path
          fill='#1E2538'
          d='M55.82 29.974c-.102-2.596-2.183-4.678-4.726-4.678s-4.599 2.082-4.727 4.678h9.453Z'
        />
        <Path
          fill='url(#m)'
          d='M62.268 8.458c-1.49 4.216-5.343 14.267-10.686 21.516h5.369c2.877-3.265 8.014-9.537 10.044-15.09a29.223 29.223 0 0 0-4.727-6.426Z'
        />
      </G>
      <Defs>
        <LinearGradient
          id='b'
          x1={62.448}
          x2={71.12}
          y1={30.418}
          y2={17.601}
          gradientUnits='userSpaceOnUse'
        >
          <Stop offset={0.121} stopColor='#0006C0' />
          <Stop offset={0.834} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='c'
          x1={42.384}
          x2={53.489}
          y1={27.16}
          y2={4.09}
          gradientUnits='userSpaceOnUse'
        >
          <Stop offset={0.121} stopColor='#0006C0' />
          <Stop offset={0.993} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='d'
          x1={26.845}
          x2={28.093}
          y1={31.773}
          y2={6.689}
          gradientUnits='userSpaceOnUse'
        >
          <Stop offset={0.121} stopColor='#0006C0' />
          <Stop offset={0.993} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='e'
          x1={12.574}
          x2={10.487}
          y1={21.893}
          y2={25.9}
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
          x1={9.591}
          x2={12.999}
          y1={23.478}
          y2={23.478}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#B3B3B3' />
          <Stop offset={0.921} stopColor='#fff' />
        </LinearGradient>
        <LinearGradient
          id='g'
          x1={11.098}
          x2={79.433}
          y1={8.01}
          y2={22.386}
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
          x1={9.969}
          x2={78.303}
          y1={13.379}
          y2={27.754}
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
          x1={10.274}
          x2={78.609}
          y1={11.929}
          y2={26.305}
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
          x1={8.865}
          x2={77.199}
          y1={18.624}
          y2={32.999}
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
          x1={10.257}
          x2={78.593}
          y1={12.003}
          y2={26.379}
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
          x1={10.944}
          x2={79.279}
          y1={8.74}
          y2={23.116}
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
          x1={10.788}
          x2={79.122}
          y1={9.488}
          y2={23.864}
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
          <Path fill='#fff' d='M0 0h75.857v30H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LogoSmallSvg;
