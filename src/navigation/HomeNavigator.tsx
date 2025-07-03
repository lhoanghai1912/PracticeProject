import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen_Name } from './ScreenName';
import HomeScreen from '../screens/HomeStack';
import BottomTabNavigator from './BottomTabNavigator';
import CartScreen from '../screens/HomeStack/Cart';
import NotiScreen from '../screens/HomeStack/Noti';
import TopSaleScreen from '../screens/HomeStack/TopSale';

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
        name={Screen_Name.Top_SaleScreen}
        component={TopSaleScreen}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
