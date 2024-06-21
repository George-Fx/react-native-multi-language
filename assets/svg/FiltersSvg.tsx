import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FiltersSvg: React.FC = () => {
  return (
    <Svg width={65} height={21} fill='none'>
      <Path
        fill='#60708E'
        d='M27.232 16V6.13h6.16v.952h-4.998v3.458h4.69v.952h-4.69V16h-1.162Zm7.735 0V8.972h1.134V16h-1.134Zm-.14-8.624V6.102h1.4v1.274h-1.4ZM38.303 16V5.696h1.134V16h-1.134Zm5.828.126c-.69 0-1.218-.196-1.582-.588-.364-.401-.546-1.003-.546-1.806V9.854h-1.372v-.882h1.372V7.054l1.134-.322v2.24h2.016v.882h-2.016v3.752c0 .56.093.961.28 1.204.196.233.486.35.868.35.178 0 .336-.014.476-.042.14-.037.266-.08.378-.126v.952a1.95 1.95 0 0 1-.476.126 2.578 2.578 0 0 1-.532.056Zm5.456 0c-1.101 0-1.969-.317-2.604-.952-.634-.644-.952-1.535-.952-2.674 0-.737.14-1.377.42-1.918.28-.55.672-.975 1.176-1.274.504-.308 1.083-.462 1.736-.462.644 0 1.186.135 1.624.406.439.27.775.658 1.008 1.162.234.495.35 1.083.35 1.764v.42H46.9v-.714h4.704l-.238.182c0-.747-.168-1.33-.504-1.75-.336-.42-.835-.63-1.498-.63-.7 0-1.246.247-1.638.742-.392.485-.588 1.143-.588 1.974v.126c0 .877.215 1.545.644 2.002.439.448 1.05.672 1.834.672.42 0 .812-.06 1.176-.182.374-.13.728-.34 1.064-.63l.392.798c-.308.299-.7.532-1.176.7a4.578 4.578 0 0 1-1.484.238ZM54.053 16v-5.334c0-.28-.01-.565-.028-.854-.01-.29-.028-.57-.056-.84h1.092l.14 1.708-.196.014c.093-.42.256-.765.49-1.036.233-.27.508-.471.826-.602.317-.14.648-.21.994-.21.14 0 .26.005.364.014.112.01.214.033.308.07l-.014 1.008a1.646 1.646 0 0 0-.392-.084 2.412 2.412 0 0 0-.392-.028c-.411 0-.77.098-1.078.294a1.975 1.975 0 0 0-.686.756c-.15.308-.224.635-.224.98V16h-1.148Zm7.383.126c-.56 0-1.083-.075-1.568-.224-.485-.159-.887-.378-1.204-.658l.392-.798c.346.27.719.471 1.12.602.41.13.835.196 1.274.196.56 0 .98-.098 1.26-.294a.976.976 0 0 0 .434-.84c0-.27-.093-.485-.28-.644-.177-.168-.471-.299-.882-.392l-1.302-.266c-.597-.13-1.045-.35-1.344-.658-.298-.317-.448-.719-.448-1.204 0-.41.108-.77.322-1.078.215-.317.527-.565.938-.742.41-.187.891-.28 1.442-.28.513 0 .985.08 1.414.238.439.15.803.369 1.092.658l-.406.784a2.676 2.676 0 0 0-.966-.602 2.986 2.986 0 0 0-1.106-.21c-.55 0-.966.112-1.246.336-.27.215-.406.5-.406.854 0 .27.084.495.252.672.177.168.448.294.812.378l1.302.266c.635.14 1.106.36 1.414.658.318.29.476.681.476 1.176 0 .42-.116.789-.35 1.106-.233.308-.56.546-.98.714-.41.168-.896.252-1.456.252Z'
      />
      <Path
        stroke='#60708E'
        strokeLinecap='round'
        strokeWidth={1.2}
        d='M3.75 17.75v-9m10.5-4.5v3-3Zm0 13.5v-7.5 7.5ZM9 4.25v9-9Zm0 13.5v-1.5 1.5ZM3.75 4.25v1.5-1.5ZM12.75 8.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM7.5 14.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM2.25 7.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z'
      />
    </Svg>
  );
};

export default FiltersSvg;
