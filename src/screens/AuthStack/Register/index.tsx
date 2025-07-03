import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { IMAGES } from '../../../utils/constants';
import {
  mapFirebaseErrorToMessage,
  registerWithEmail,
} from '../../../services/authService';
import Toast from 'react-native-toast-message';
import AppStyles from '../../../components/AppStyle';
import AppInput from '../../../components/AppInput';
import styles from '../styles';

interface Props {
  navigation: any;
  route: any;
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async () => {
    if (confirmPassword !== password) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Mật khẩu và xác nhận mật khẩu phải trùng khớp',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else {
      try {
        const user = await registerWithEmail(email, password);
        Toast.show({
          type: 'success',
          text1: 'Thành công',
          text2: `Xin chào ${user.email}`,
          position: 'top',
          visibilityTime: 3000,
          autoHide: true,
        });
      } catch (error: any) {
        const message = mapFirebaseErrorToMessage(error.code);
        Toast.show({
          type: 'error',
          text1: 'Lỗi',
          text2: message,
          position: 'top',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
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
          <Text style={styles.title}>Register</Text>
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

            <AppInput
              label="Confirm Password"
              placeholder="Enter confirm password"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            disabled={!(email && password && confirmPassword)}
            style={email && password ? styles.button : styles.buttonDisable}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={AppStyles.linkText}>Quay lại đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegisterScreen;
