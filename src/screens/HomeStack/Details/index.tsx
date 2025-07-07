import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Colors } from '../../../utils/color';
import { ICONS, IMAGES } from '../../../utils/constants';
import { navigate } from '../../../navigation/RootNavigator';
import { Screen_Name } from '../../../navigation/ScreenName';
import AppStyles from '../../../components/AppStyle';
import { Spacing } from '../../../utils/spacing';
import { Fonts } from '../../../utils/fontSize';
import AppButton from '../../../components/AppButton';
import { log } from '@react-native-firebase/crashlytics';

const DetailScreen: React.FC = ({ route, navigation }: any) => {
  const data = route.params;
  console.log('Product details:', route.params);
  console.log('name', data.productName);
  console.log('images', data.productImages);

  const [selectedPrice, setSelectedPrice] = React.useState<number>(
    data?.productPrice?.medium ?? 0,
  );
  const [selectedSize, setSelectedSize] = React.useState<
    'S' | 'M' | 'L' | null
  >('M');

  const handleSelectSize = (size: 'S' | 'M' | 'L') => {
    size ? setSelectedSize(size) : setSelectedSize('M');

    if (size === 'S') {
      setSelectedPrice(data.productPrice.small);
    } else if (size === 'M') {
      setSelectedPrice(data.productPrice.medium);
    } else if (size === 'L') {
      setSelectedPrice(data.productPrice.large);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ICONS.back} style={AppStyles.icon} />
          </TouchableOpacity>
          <Text style={AppStyles.title}>Detail</Text>
          <TouchableOpacity
            onPress={() => navigate(Screen_Name.Favourite_Screen)}
          >
            <Image source={ICONS.heart} style={AppStyles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Image
          source={IMAGES[data.productImages as keyof typeof IMAGES]} // Hiển thị hình ảnh nếu có
          style={{
            height: 300,
            width: '100%',
            alignSelf: 'center',
            borderRadius: 20,
            marginBottom: Spacing.medium,
            // resizeMode: 'contain',
          }}
        />
        <ScrollView>
          <View style={{ marginBottom: Spacing.medium }}>
            <Text style={styles.label}>{data.productName}</Text>
            <Text style={styles.text}>{data.productType}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 'auto',
              alignItems: 'center',
              marginBottom: Spacing.large,
            }}
          >
            <Image source={ICONS.rate} style={{ width: 30, height: 30 }} />
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Text style={styles.rate}>{` ${data.productRate}`}</Text>
              <Text style={styles.rater}>{` (${data.productRater})`}</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: Colors.secondary,
              marginHorizontal: Spacing.large,
              marginBottom: Spacing.large,
            }}
          />
          <View style={{ marginBottom: Spacing.large }}>
            <Text style={[styles.label, { marginBottom: Spacing.medium }]}>
              Description
            </Text>
            <Text style={styles.text}>{data.productDescription}</Text>
          </View>
          <View style={{ marginBottom: Spacing.large }}>
            <Text style={[styles.label, { marginBottom: Spacing.medium }]}>
              Size
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <AppButton
                title="S"
                select={selectedSize === 'S'}
                onPress={() => handleSelectSize('S')}
                customStyle={[{ width: '28%' }]}
              />
              <AppButton
                title="M"
                select={selectedSize === 'M'}
                onPress={() => handleSelectSize('M')}
                customStyle={[{ width: '28%' }]}
              />
              <AppButton
                title="L"
                select={selectedSize === 'L'}
                onPress={() => handleSelectSize('L')}
                customStyle={[{ width: '28%' }]}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={[styles.text, { fontSize: Fonts.large }]}>Price</Text>
            <Text style={[styles.label, { color: Colors.primary }]}>
              {`$ ${selectedPrice}`}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: '100%',
              backgroundColor: Colors.primary,
              width: '65%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: Fonts.large,
                color: Colors.white,
                fontWeight: '500',
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 0.2,
    justifyContent: 'flex-end',
    paddingBottom: Spacing.medium,
    paddingHorizontal: Spacing.large,
  },
  body: {
    flex: 1,
    paddingHorizontal: Spacing.large,
  },
  label: {
    fontSize: Fonts.xlarge,
    fontWeight: '600',
    textAlign: 'left',
  },
  text: { fontSize: Fonts.normal, color: Colors.secondary },
  rate: {
    fontSize: Fonts.xlarge,
    fontWeight: '500',
  },
  rater: {
    fontSize: Fonts.normal,
    color: Colors.secondary,
    marginTop: 8,
  },
  description: {},
  size: {},
  price: {},
  footer: {
    flex: 0.15,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: Spacing.large,
    paddingVertical: Spacing.large,
  },
});

export default DetailScreen;
