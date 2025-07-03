import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { Colors } from '../../utils/color';
import AppStyles from '../../components/AppStyle';
import { Spacing } from '../../utils/spacing';
import { ICONS, IMAGES } from '../../utils/constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginBottom: Spacing.xlarge }}>
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
            marginBottom: Spacing.xlarge,
          }}
        >
          <View
            style={[
              {
                height: 50,
                borderRadius: 10,
                marginBottom: 0,
                flex: 1,
                marginRight: Spacing.large,
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
            height: 210,
            paddingHorizontal: Spacing.medium,
            overflow: 'hidden', // Đảm bảo các thành phần con không tràn ra ngoài góc bo tròn
            borderRadius: 20,
          }}
          resizeMode="cover"
        >
          <View style={{ backgroundColor: '#ED5151' }}>
            <Text style={[AppStyles.label, { color: Colors.white }]}>
              Promo
            </Text>
          </View>
          {/* Text hiển thị bên trên ảnh */}
        </ImageBackground>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 70,
    flex: 0.5,
    backgroundColor: Colors.black,
    paddingHorizontal: Spacing.medium,
  },
  body: {
    flex: 1,
  },
});

export default HomeScreen;
