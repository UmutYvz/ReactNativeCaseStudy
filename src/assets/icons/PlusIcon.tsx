import React from 'react';

import Svg, {Path} from 'react-native-svg';

export function PlusIcon({color, size, ...props}: {color: string; size: number}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
      />
    </Svg>
  );
}
export default PlusIcon;
