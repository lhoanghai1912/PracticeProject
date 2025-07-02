/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigator />
        <Toast />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
