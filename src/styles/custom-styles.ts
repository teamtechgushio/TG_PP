import {StyleSheet} from 'react-native';

const CustomStyles = StyleSheet.create({
  shadowed: {
    shadowOffset: {
      width: 1,
      height: -7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 5,
  },
});

export default CustomStyles;
