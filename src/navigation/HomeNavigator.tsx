import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen_Name } from './ScreenName';
import HomeScreen from '../screens/HomeStack';
import BottomTabNavigator from './BottomTabNavigator';
import CartScreen from '../screens/HomeStack/Cart';
import NotiScreen from '../screens/HomeStack/Noti';
import TopSaleScreen from '../screens/HomeStack/Favourite';
import DetailScreen from '../screens/HomeStack/Details';
import FavouriteScreen from '../screens/HomeStack/Favourite';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      initialRouteName={Screen_Name.BottomTabNavigator}
    >
      <Stack.Screen
        name={Screen_Name.BottomTabNavigator}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={Screen_Name.Home_Screen} component={HomeScreen} />
      <Stack.Screen name={Screen_Name.Cart_Screen} component={CartScreen} />
      <Stack.Screen name={Screen_Name.Noti_Screen} component={NotiScreen} />
      <Stack.Screen
        name={Screen_Name.Favourite_Screen}
        component={FavouriteScreen}
      />
      <Stack.Screen
        name={Screen_Name.Details_Screen}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
