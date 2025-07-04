import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import { Colors } from '../../utils/color';
import AppStyles from '../../components/AppStyle';
import { Spacing } from '../../utils/spacing';
import { ICONS, IMAGES } from '../../utils/constants';
import { Fonts } from '../../utils/fontSize';
import {
  addCake,
  addCoffee,
  fetchProducts,
} from '../../services/productService';
import Toast from 'react-native-toast-message';
import { log } from '@react-native-firebase/crashlytics';
import { navigate } from '../../navigation/RootNavigator';
import { Screen_Name } from '../../navigation/ScreenName';
import { cakeData, coffeeData } from './dataProduct';

interface Product {
  id: string;
  name: string;
  productType: string;
  type: string;
  price: number;
  rate: number;
  rater: number;
  description: string;
}

const HomeScreen = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [products, setProducts] = useState<Product[]>([]); // State để lưu dữ liệu sản phẩm
  const [loading, setLoading] = useState(true);

  const handleAddCake = async () => {
    try {
      await addCake(cakeData); // Gọi hàm addCake để thêm các sản phẩm cà phê vào Firestore
      Toast.show({
        position: 'top',
        type: 'success',
        text1: 'Success',
        text2: 'Cakes added successfully',
        autoHide: true,
        visibilityTime: 1500,
      });
    } catch (error) {
      Toast.show({
        position: 'top',
        type: 'error',
        text1: 'Error',
        text2: 'Failed to add cakes',
        autoHide: true,
        visibilityTime: 1500,
      });
    }
  };

  const handleAddCoffee = async () => {
    try {
      await addCoffee(coffeeData); // Gọi hàm addCoffee để thêm các sản phẩm cà phê vào Firestore
      Toast.show({
        position: 'top',
        type: 'success',
        text1: 'Success',
        text2: 'Coffees added successfully',
        autoHide: true,
        visibilityTime: 1500,
      });
    } catch (error) {
      Toast.show({
        position: 'top',
        type: 'error',
        text1: 'Error',
        text2: 'Failed to add coffee',
        autoHide: true,
        visibilityTime: 1500,
      });
    }
  };
  const fetchData = async () => {
    try {
      const productData = await fetchProducts(); // Gọi hàm fetchProducts từ productService
      setProducts(productData); // Lưu dữ liệu vào state
      console.log('product:', productData);
    } catch (error) {
      console.error('Error fetching products: ', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(); // Gọi fetchData khi component mount
  }, []);

  const sortedProducts = products
    .sort((a, b) => {
      // Sắp xếp loại Cafe lên trước, Cake sau
      if (a.productType === 'coffee' && b.productType !== 'coffee') return -1;
      if (a.productType !== 'coffee' && b.productType === 'coffee') return 1;
      return 0;
    })
    .sort((a, b) => {
      // Sắp xếp sản phẩm theo thứ tự bảng chữ cái trong từng loại
      if (a.productType === b.productType) {
        return a.name.localeCompare(b.name); // So sánh tên sản phẩm theo bảng chữ cái
      }
      return 0;
    });

  const filteredProducts =
    selectedType === 'All'
      ? sortedProducts
      : selectedType === 'Cake'
      ? sortedProducts.filter(item => item.productType === 'cake')
      : sortedProducts.filter(item => item.type === selectedType);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleDetail = (item: any) => {
    navigate(Screen_Name.Details_Screen, {
      productId: item.id,
      productName: item.name,
      productType: item.type,
      productPrice: item.price,
      productRate: item.rate,
      productRater: item.rater,
      productDescription: item.description,
    });
  };
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.productCard}>
        <TouchableOpacity onPress={() => handleDetail(item)}>
          <View>
            <Image
              source={item.productType === 'cake' ? IMAGES.cake : IMAGES.logo} // Hiển thị hình ảnh nếu có
              style={styles.productImage}
            />
          </View>
          <View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productType}>{item.type}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.productPrice}>{`$ ${item.price}`}</Text>
            <TouchableOpacity onPress={() => console.log('add to cart')}>
              <Image source={ICONS.add} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginBottom: Spacing.medium }}>
          <Text style={AppStyles.label}>Location</Text>
          <TouchableOpacity>
            <Text style={[AppStyles.text, { color: Colors.white }]}>abc</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: Spacing.medium,
          }}
        >
          <View
            style={[
              {
                height: 50,
                borderRadius: 10,
                flex: 1,
                marginRight: Spacing.medium,
                backgroundColor: 'rgba(45, 45, 45, 0.9)',
              },
            ]}
          ></View>
          <TouchableOpacity style={{ justifyContent: 'center' }}>
            <Image
              source={ICONS.scan}
              style={[
                AppStyles.icon,
                { backgroundColor: Colors.lightGray, height: 50, width: 50 },
              ]}
            ></Image>
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={IMAGES.promo} // Thay thế với đường dẫn ảnh của bạn
          style={{
            height: 200,
            paddingHorizontal: Spacing.medium,
            overflow: 'hidden', // Đảm bảo các thành phần con không tràn ra ngoài góc bo tròn
            borderRadius: 20,
          }}
          resizeMode="cover"
        >
          <View
            style={{
              backgroundColor: '#ED5151',
              paddingHorizontal: Spacing.small,
              marginTop: Spacing.small,
              alignSelf: 'flex-end',
              borderRadius: 10,
            }}
          >
            <Text
              style={[
                {
                  color: Colors.white,
                  width: 'auto',
                  fontSize: Fonts.large,
                  paddingVertical: 2,
                },
              ]}
            >
              Promo
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing.small,
              marginTop: Spacing.xxlarge,
              alignSelf: 'flex-start',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                alignSelf: 'flex-end',
                color: Colors.white,
                fontSize: Fonts.large,
                // paddingVertical: Spacing.small,
              }}
            >
              {`Buy \n 1 \n Get \n 1 `}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterContainer}
          >
            {[
              'All',
              'Americano',
              'Latte',
              'Cappuccino',
              'Macchiato',
              'Espresso',
              'Mocha',
              'Cake',
            ].map(type => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.filterButton,
                  selectedType === type && styles.filterButtonActive,
                ]}
                onPress={() => setSelectedType(type)}
              >
                <Text
                  style={
                    selectedType === type
                      ? styles.filterTextActive
                      : styles.filterText
                  }
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{ justifyContent: 'center' }}
          renderItem={renderItem}
        />
      </View>

      <View style={{ display: 'none' }}>
        <TouchableOpacity onPress={() => handleAddCake()}>
          <Text>add cake</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'none' }}>
        <TouchableOpacity onPress={() => handleAddCoffee()}>
          <Text>add coffee</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    flex: 0.5,
    backgroundColor: Colors.black,
    paddingHorizontal: Spacing.medium,
  },
  body: {
    paddingTop: 100,
    paddingHorizontal: Spacing.medium,
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Spacing.medium,
  },
  filterButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginRight: Spacing.small,
    marginBottom: Spacing.small,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary, // Bạn có thể thay đổi màu nền khi button được chọn
  },
  filterText: {
    color: Colors.white,
    fontSize: Fonts.normal,
  },
  filterTextActive: {
    color: Colors.white,
    fontSize: Fonts.normal,
    fontWeight: 'bold',
  },
  productCard: {
    flex: 1,
    marginBottom: Spacing.medium,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    elevation: 2,
    padding: Spacing.small,
    marginHorizontal: Spacing.small, // Tạo khoảng cách giữa các sản phẩm
    height: 280, // Đảm bảo các thẻ sản phẩm có cùng chiều cao
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: Spacing.small,
  },
  productName: {
    fontSize: Fonts.normal,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  productType: {
    fontSize: Fonts.small,
    textAlign: 'left',
    color: '#A5A5A5',
  },
  productPrice: {
    fontSize: Fonts.large,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
