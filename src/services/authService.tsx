// src/services/authService.tsx

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';
import { getApp } from '@react-native-firebase/app';

const app = getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// Đăng ký người dùng với email và mật khẩu
export const registerWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const uid = userCredential.user.uid;

    // Lưu thông tin user và role vào Firestore (default role là 'customer')
    await db.collection('users').doc(uid).set({
      email,
      role: 'customer', // mặc định là 'customer'
    });

    return userCredential.user;
  } catch (error: any) {
    const message = mapFirebaseErrorToMessage(error.code);
    throw new Error(message);
  }
};

// Đăng nhập với email và mật khẩu
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error: any) {
    const message = mapFirebaseErrorToMessage(error.code);
    throw new Error(message);
  }
};

// Đăng xuất
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error('Error signing out: ', error.message);
  }
};

// Lấy thông tin người dùng hiện tại
export const getCurrentUser = () => {
  return auth.currentUser;
};

// Chuyển các lỗi Firebase thành thông báo dễ hiểu cho người dùng
export const mapFirebaseErrorToMessage = (code: string): string => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Email không hợp lệ';
    case 'auth/email-already-in-use':
      return 'Email đã được sử dụng';
    case 'auth/weak-password':
      return 'Mật khẩu phải từ 6 ký tự trở lên';
    case 'auth/user-not-found':
      return 'Tài khoản không tồn tại';
    case 'auth/wrong-password':
      return 'Sai mật khẩu';
    case 'auth/network-request-failed':
      return 'Lỗi kết nối mạng. Vui lòng thử lại';
    default:
      return 'Đã xảy ra lỗi. Vui lòng thử lại';
  }
};
