import React from 'react';
import {View, Text} from 'react-native';
import {HStack} from 'native-base';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import { DrawerHeaderProps } from '@react-navigation/drawer';

export const Header = (props: NativeStackHeaderProps | DrawerHeaderProps) => {
  return (
    <HStack>
      <Text>{props.route.name}</Text>
    </HStack>
  );
};
