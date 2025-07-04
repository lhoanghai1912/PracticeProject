import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavouriteScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavouriteScreen;
