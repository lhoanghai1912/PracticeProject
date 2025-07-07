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
        images: data.images,
      };
    });
    return productsList;
  } catch (error) {
    console.error('Error getting products: ', error);
    throw error;
  }
};
export const addCake = async (
  cakeData: {
    name: string;
    type: string;
    description: string;
    images: string;
  }[],
) => {
  try {
    for (const { name, type, description, images } of cakeData) {
      const rate = (Math.random() * (5 - 4.7) + 4.7).toFixed(2); // Giá ngẫu nhiên từ 4.7 đến 5
      const rater = Math.floor(Math.random() * 200) + 1; // Giá ngẫu nhiên từ 4.7 đến 5
      const small = Math.floor(Math.random() * (4.5 - 3) + 3).toFixed(2);
      const medium = Math.floor(Math.random() * (6 - 4.5) + 4.6).toFixed(2);
      const large = Math.floor(Math.random() * (7.5 - 6) + 6).toFixed(2);
      // Thêm bánh vào Firestore
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        type: type, // Loại là 'Cake'
        productType: 'cake',
        price: {
          small: parseFloat(small),
          medium: parseFloat(medium),
          large: parseFloat(large),
        },
        rate: parseFloat(rate),
        rater: rater,
        description: description,
        images: images,
      });

      console.log('Cake added with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding cake: ', error);
  }
};

export const addCoffee = async (
  coffeeData: {
    name: string;
    type: string;
    description: string;
    images: string;
  }[],
) => {
  try {
    for (const { name, type, description, images } of coffeeData) {
      const rate = (Math.random() * (5 - 4.7) + 4).toFixed(2); // Giá ngẫu nhiên từ 4.7 đến 5
      const rater = Math.floor(Math.random() * 200) + 1; // Giá ngẫu nhiên từ 4.7 đến 5
      const small = (Math.random() * (4.5 - 3) + 3).toFixed(2);
      const medium = (Math.random() * (6 - 4.5) + 4.6).toFixed(2);
      const large = (Math.random() * (7.5 - 6) + 6).toFixed(2);
      // Thêm cafe vào Firestore
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        type: type, // Loại là 'coffee'
        productType: 'coffee',
        price: {
          small: parseFloat(small),
          medium: parseFloat(medium),
          large: parseFloat(large),
        },
        rate: parseFloat(rate),
        rater: rater,
        description: description,
        images: images,
      });

      console.log('Coffee added with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding coffee: ', error);
  }
};
