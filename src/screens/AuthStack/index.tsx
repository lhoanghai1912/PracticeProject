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
} from 'react-native';
import { IMAGES } from '../../utils/constants'; // chứa require ảnh nền
import { Spacing } from '../../utils/spacing';
import { Colors } from '../../utils/color';
import { Fonts } from '../../utils/fontSize';
import { useDispatch } from 'react-redux';
import { setToken, setUserData } from '../../store/reducers/userSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [canLogin, setCanlogin] = useState(false);
  const handleLogin = () => {
    const token = '123abc1';

    console.log('Login with:', username, password);
    // TODO: Gọi API hoặc dispatch action tại đây
    dispatch(
      setUserData({
        userData: {
          username,
          password,
          token,
          fullname: 'User Test',
        },
      }),
    );
    dispatch(setToken({ token }));
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
          <Text style={styles.title}>Login</Text>

          <View>
            <Text style={styles.lableText}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              placeholderTextColor="#ccc"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View>
            <Text style={styles.lableText}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#ccc"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity
            disabled={!(password && username)}
            style={password && username ? styles.button : styles.buttonDisable}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // overlay nhẹ
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: Spacing.large,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    paddingHorizontal: Spacing.medium,
    marginBottom: Spacing.medium,
    color: '#000',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: Spacing.medium,
    borderRadius: 20,
    marginTop: Spacing.large,
  },
  buttonDisable: {
    backgroundColor: Colors.lightGray,
    paddingVertical: Spacing.medium,
    borderRadius: 20,
    marginTop: Spacing.large,
    opacity: 0.5,
  },
  lableText: {
    color: Colors.white,
    fontSize: Fonts.large,
    marginBottom: Spacing.small,
    paddingHorizontal: Spacing.small,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginWrap: {
    paddingVertical: Spacing.xlarge,
    paddingHorizontal: Spacing.medium,
    borderRadius: 50,
    backgroundColor: 'rgba(250, 247, 247, 0.7)', // overlay nhẹ
  },
});

export default LoginScreen;
