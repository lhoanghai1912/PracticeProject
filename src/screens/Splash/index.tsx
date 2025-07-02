import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

import { IMAGES } from '../../utils/constants';
import { Colors } from '../../utils/color';
import { Spacing } from '../../utils/spacing';

const SplashScreen = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // giữ splash 1.5s rồi fade-out trong 0.5s
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        onAnimationEnd();
      });
    }, 1500);
  }, []);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: fadeAnim }] }]}
    >
      <Image source={IMAGES.foxAI} style={styles.splash}></Image>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: Spacing.xxlarge,
    paddingHorizontal: Spacing.large,
  },
  splash: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginVertical: Spacing.xxlarge,
    marginHorizontal: Spacing.large,
  },
});

export default SplashScreen;
