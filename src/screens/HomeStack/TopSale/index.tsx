import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopSaleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TopSaleScreen</Text>
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

export default TopSaleScreen;
