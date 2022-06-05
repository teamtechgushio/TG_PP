import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {View, Image, Text, Pressable, HStack, VStack} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';

enum Types {
  RENTAL,
  BILLING,
}

type Props = {
  item: {
    car_model?: string;
    plate_number?: string;
    booking_id?: string;
    price?: string;
    distance?: string;
    carImage?: ImageSourcePropType;
    start?: string;
    end?: string;
    status?: string;
    contract: string;
    accident_id?: string;
  };
  onPress?: () => any;
  type?: Types;
};

export const AccidentIDCard = ({onPress, item, type}: Props) => {
  return (
    <Pressable
      flexDirection="column"
      borderRadius="xl"
      h="195"
      alignItems="center"
      padding={ms(20)}
      justifyContent="center"
      backgroundColor={Colors.white}
      onPress={onPress}>
      <VStack space={ms(10)} alignItems="center" justifyContent="center">
        <Text fontSize="20">Accident ID</Text>
        <Text
          textAlign="center"
          color={Colors.black}
          fontSize={ms(45)}
          lineHeight={ms(45)}>
          {item.accident_id}
        </Text>
      </VStack>
    </Pressable>
  );
};
