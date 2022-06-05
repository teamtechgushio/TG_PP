import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Input, SearchIcon} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';

const {width} = Dimensions.get('screen');

export const SearchBar = ({}) => {
  const [value, setValue] = useState('Search here');

  return (
    <Input
      mx="3"
      placeholder="Search for a car category"
      placeholderTextColor={Colors.black}
      flex="1"
      h={ms(60)}
      fontSize={ms(14)}
      fontWeight="bold"
      color={Colors.darkGrey}
      lineHeight={ms(21)}
      padding={ms(20)}
      marginY={ms(10)}
      maxWidth={width}
      variant="unstyled"
      alignSelf="center"
      bgColor={Colors.lightGrey}
      borderRadius={ms(74)}
      InputRightElement={<SearchIcon style={styles.searchIcon} />}
    />
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    height: ms(17),
    width: ms(17),
    marginRight: ms(20),
  },
});
