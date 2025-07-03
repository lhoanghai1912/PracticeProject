import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { IMAGES } from '../../utils/constants'; // chứa require ảnh nền
import { Spacing } from '../../utils/spacing';
import { Colors } from '../../utils/color';
import { Fonts } from '../../utils/fontSize';
import { navigate } from '../../navigation/RootNavigator';
import { Screen_Name } from '../../navigation/ScreenName';
import { loginWithEmail } from '../../services/authService';
import AppInput from '../../components/AppInput';
import AppStyles from '../../components/AppStyle';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await loginWithEmail(email, password);
      console.log('data', user);
      // TODO: Navigate to HomeScreen
    } catch (error: any) {
      Alert.alert('Lỗi', error.message);
    }
  };

  return (
    <ImageBackground
      source={IMAGES.background}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.loginWrap}>
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.inputGroup}>
            <AppInput
              label="Email"
              placeholder="Enter email"
              onChangeText={setEmail}
              value={email}
            />
            <AppInput
              label="Password"
              placeholder="Enter password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            disabled={!(password && email)}
            style={password && email ? styles.button : styles.buttonDisable}
            onPress={() => handleLogin()}
          >
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              onPress={() => navigate(Screen_Name.Register_Screen)}
            >
              <Text style={AppStyles.linkText}>New user? Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignContent: 'center',
//     paddingHorizontal: 30,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)', // overlay nhẹ
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: Colors.white,
//     marginBottom: Spacing.medium,
//     textAlign: 'center',
//   },
//   inputGroup: {
//     marginBottom: Spacing.medium,
//   },
//   button: {
//     backgroundColor: '#1E90FF',
//     paddingVertical: Spacing.medium,
//     borderRadius: 20,
//     marginBottom: Spacing.medium,
//   },
//   buttonDisable: {
//     backgroundColor: Colors.lightGray,
//     paddingVertical: Spacing.medium,
//     borderRadius: 20,
//     marginBottom: Spacing.medium,
//     opacity: 0.5,
//   },
//   lableText: {
//     color: Colors.white,
//     fontSize: Fonts.large,
//     marginBottom: Spacing.small,
//     paddingHorizontal: Spacing.small,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   loginWrap: {
//     paddingVertical: Spacing.xlarge,
//     paddingHorizontal: Spacing.medium,
//     borderRadius: 50,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//   },
// });

export default LoginScreen;
