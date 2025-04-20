import React from 'react';
import { ImageStyle } from 'react-native';
import { IconElement } from '@ui-kitten/components';
import Svg, { Path, G } from 'react-native-svg';

export const McdonaldsIcon = (style: ImageStyle): IconElement => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <G>
      <Path
        d="M21,21C21,9.35,19.49,3,17,3c-2.72,0-4.5,6.31-5,15C11.5,9.31,9.72,3,7,3,4.51,3,3,9.35,3,21"
        fill="none"
        stroke="#d7e515"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </G>
  </Svg>
);