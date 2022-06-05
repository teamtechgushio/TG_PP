import React from 'react';
import {Image, Pressable, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';

type Props = {
  title?: string;
  textSize?: number;
  textColor?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: any;
  icon?: any;
  position?: string;
  onPress?: () => any;
};

export const ScreenTitle = ({
  title,
  textSize,
  textColor,
  iconName,
  iconSize,
  iconColor,
  icon,
  position = 'center',
  onPress,
}: Props) => {
  return (
    <Pressable
      flexDirection="row"
      alignItems="center"
      justifyContent={position}
      marginY={ms(20)}
      onPress={onPress}>
      {iconName && (
        <Icon
          name={iconName}
          size={iconSize ?? ms(30)}
          color={iconColor ?? Colors.white}
        />
      )}
      {icon && (
        <Image
          tintColor={iconColor ?? Colors.white}
          source={icon}
          alt="title Icon"
          width={ms(25)}
          height={ms(25)}
        />
      )}
      {title && (
        <Text
          color={textColor ?? Colors.white}
          fontSize={textSize ?? ms(30)}
          fontWeight="bold"
          marginLeft={ms(20)}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
