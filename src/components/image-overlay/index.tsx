import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface OverlayImageStyle extends ViewStyle {
  overlayColor?: string;
}

export interface ImageOverlayProps extends ImageBackgroundProps {
  style?: StyleProp<OverlayImageStyle>;
  children?: React.ReactNode;
}

const DEFAULT_OVERLAY_COLOR = 'rgba(0, 0, 0, 0.45)';

export const ImageOverlay = (props?: ImageOverlayProps): React.ReactElement<ImageBackgroundProps> => {
  const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(props?.style);

  return (
    <ImageBackground
      {...props}
      style={imageBackgroundStyle}>
      <View style={[
        StyleSheet.absoluteFill,
        { backgroundColor: overlayColor || DEFAULT_OVERLAY_COLOR },
      ]}/>
      {props?.children}
    </ImageBackground>
  );
};
