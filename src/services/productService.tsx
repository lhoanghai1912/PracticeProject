// src/services/productService.tsx

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from '@react-native-firebase/firestore';
import { getApp } from '@react-native-firebase/app';

const app = getApp();
const db = getFirestore(app);

// Lấy dữ liệu sản phẩm từ Firestore
export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products')); // Lấy dữ liệu từ collection 'products'
    const productsList = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id, // Lấy ID của tài liệu trong Firestore
        name: data.name,
        type: data.type,
        price: data.price,
        productType: data.productType,
        rate: data.rate,
        rater: data.rater,
        description: data.description,
      };
    });
    return productsList;
  } catch (error) {
    console.error('Error getting products: ', error);
    throw error;
  }
};
export const addCake = async (
  cakeData: { name: string; type: string; description: string }[],
) => {
  try {
    for (const { name, type, description } of cakeData) {
      const price = (Math.random() * (7 - 5) + 5).toFixed(2); // Giá ngẫu nhiên từ 5 đến 7
      const rate = (Math.random() * (5 - 4.7) + 4.7).toFixed(2); // Giá ngẫu nhiên từ 4.7 đến 5
      const rater = Math.floor(Math.random() * 200) + 1; // Giá ngẫu nhiên từ 4.7 đến 5
      // Thêm bánh vào Firestore
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        type: type, // Loại là 'Cake'
        productType: 'cake',
        price: parseFloat(price), // Chuyển giá thành số thực
        rate: parseFloat(rate),
        rater: rater,
        description: description,
      });

      console.log('Cake added with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding cake: ', error);
  }
};

export const addCoffee = async (
  coffeeData: { name: string; type: string; description: string }[],
) => {
  try {
    for (const { name, type, description } of coffeeData) {
      const price = (Math.random() * (7 - 5) + 5).toFixed(2); // Giá ngẫu nhiên từ 5 đến 7
      const rate = (Math.random() * (5 - 4.7) + 4).toFixed(2); // Giá ngẫu nhiên từ 4.7 đến 5
      const rater = Math.floor(Math.random() * 200) + 1; // Giá ngẫu nhiên từ 4.7 đến 5

      // Thêm cafe vào Firestore
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        type: type, // Loại là 'coffee'
        productType: 'coffee',
        price: parseFloat(price), // Chuyển giá thành số thực
        rate: parseFloat(rate),
        rater: rater,
        description: description,
      });

      console.log('Coffee added with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding coffee: ', error);
  }
};
