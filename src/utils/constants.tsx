import { logout } from '../store/reducers/userSlice';

export const MESSAGES = {
  loginSuccess: 'Login successful!',
  loginFailed: 'Login failed. Please try again.',
  networkError: 'Network error. Please check your internet connection.',
};

export const TITLES = {
  login: 'Đăng nhập',
  home: 'Home',
  profile: 'Profile',
  settings: 'Settings',
  accept: 'Xác nhận',
  cancel: 'Hủy bỏ',
  logout: 'Logout',
  menu: 'Menu',
  transaction: 'Transaction',
  report: 'Report',
  user: 'User',
};
export const ICONS = {
  back: require('../assets/icons/back.png'),
  show: require('../assets/icons/show_pass.png'),
  hide: require('../assets/icons/hide_pass.png'),
  clear: require('../assets/icons/clear.png'),
  setting: require('../assets/icons/settings.png'),
  scan: require('../assets/icons/scanner.png'),
  logout: require('../assets/icons/logout.png'),
  edit: require('../assets/icons/edit.png'),
  add: require('../assets/icons/add.png'),
  home: require('../assets/icons/home.png'),
  home_focus: require('../assets/icons/home_focus.png'),
  heart: require('../assets/icons/heart.png'),
  heart_focus: require('../assets/icons/heart_focus.png'),
  cart: require('../assets/icons/cart.png'),
  cart_focus: require('../assets/icons/cart_focus.png'),
  noti: require('../assets/icons/noti.png'),
  noti_focus: require('../assets/icons/noti_focus.png'),
  rate: require('../assets/icons/rate.png'),
  loupe: require('../assets/icons/loupe.png'),
};

export const IMAGES = {
  logo: require('../assets/images/coffee.jpg'),
  avtar: require('../assets/images/avt_male.jpg'),
  background: require('../assets/images/background.jpg'),
  promo: require('../assets/images/promo.jpg'),
  cake: require('../assets/images/cake.jpg'),
  ameracano_ice: require('../assets/images/AmericanoIce.jpg'),
  ameracano_hot: require('../assets/images/AmericanoHot.jpg'),
  vani_latte: require('../assets/images/VanillaLatte.jpg'),
  hazeinut_latte: require('../assets/images/HazelnutLatte.jpg'),
  cappuccino: require('../assets/images/ClassicCappuccino.jpg'),
  cappuccino_ice: require('../assets/images/IcedCappuccino.jpg'),
  macchiato_caramel: require('../assets/images/CaramelMacchiato.jpg'),
  macchiato_vani: require('../assets/images/VanillaMacchiato.jpg'),
  espesso_double: require('../assets/images/DoubleEspresso.jpg'),
  espesso: require('../assets/images/EspressoShot.jpg'),
  mocha_chocolate: require('../assets/images/ChocolateMocha.jpg'),
  mocha_matcha: require('../assets/images/MatchMocha.jpg'),
  croissant: require('../assets/images/Croissant.jpg'),
  tiramisu: require('../assets/images/Tiramisu.jpg'),
  cookies: require('../assets/images/Cookies.jpg'),
  tarts: require('../assets/images/Tarts.jpg'),
  strudel: require('../assets/images/Strudel.jpg'),
  apple_pie: require('../assets/images/ApplePie.jpg'),
  pumkin_pie: require('../assets/images/PumpkinPie.jpg'),
  danish: require('../assets/images/DanishPastry.jpg'),
  banhbao: require('../assets/images/banhbao.jpg'),
  mooncake: require('../assets/images/mooncake.jpg'),
};
