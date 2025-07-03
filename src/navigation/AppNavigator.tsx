import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { navigationRef } from './RootNavigator';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import SplashScreen from '../screens/Splash';
import auth from '@react-native-firebase/auth';

const AppNavigator = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return unsubscribe;
  }, []);

  if (showSplash) {
    return <SplashScreen onAnimationEnd={() => setShowSplash(false)} />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {userId ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
