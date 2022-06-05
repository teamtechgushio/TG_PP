import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ms} from 'react-native-size-matters';

type Props = TouchableOpacityProps;

export const ListItem = (props: Props) => {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: ms(15),
        paddingVertical: ms(5),
      }}
      onPress={props.onPress}>
      {props.children}
      <Icon name="chevron-right" size={ms(20)} />
    </TouchableOpacity>
  );
};
