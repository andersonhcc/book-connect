/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Props } from './types';

const FadeAnimation = ({ children, ...rest }: Props) => {
  const { width: displayWidth } = useWindowDimensions();
  const cardOpacity = useSharedValue(0);
  const cardOffset = useSharedValue(0.25 * displayWidth);

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      opacity: cardOpacity.value,
      transform: [
        {
          translateX: cardOffset.value,
        },
      ],
    };
  });

  useEffect(() => {
    cardOpacity.value = withTiming(1, { duration: 1000 });
    cardOffset.value = withTiming(0, { duration: 1000 });
  }, []);

  return (
    <Animated.View {...rest} style={animatedStyle}>
      {children}
    </Animated.View>
  );
};

export { FadeAnimation };
