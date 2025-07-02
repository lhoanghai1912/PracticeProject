import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../../App';
import { Screen_Name } from './ScreenName';
import LoginScreen from '../screens/AuthStack';
import { useState } from 'react';
import LoadingScreen from '../components/Loading';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name={Screen_Name.Login_Screen} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
