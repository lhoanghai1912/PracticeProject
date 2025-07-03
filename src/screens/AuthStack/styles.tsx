import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/color';
import { Fonts } from '../../utils/fontSize';
import { Spacing } from '../../utils/spacing';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: Spacing.large,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: Spacing.large,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: Spacing.medium,
    borderRadius: 20,
    marginBottom: Spacing.medium,
  },
  buttonDisable: {
    backgroundColor: Colors.lightGray,
    paddingVertical: Spacing.medium,
    borderRadius: 20,
    marginBottom: Spacing.large,
    opacity: 0.5,
  },
  lableText: {
    color: Colors.white,
    fontSize: Fonts.large,
    marginBottom: Spacing.large,
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default styles;
