import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '@styles';

type Props = TouchableOpacityProps;

export const BurgerMenuButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingVertical: ms(20)}}>
      <Icon name="menu" size={ms(30)} color={Colors.offWhite} />
    </TouchableOpacity>
  );
};
