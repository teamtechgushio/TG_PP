import React from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {View, Image, Text, Pressable, HStack} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';

enum Types {
  RENTAL,
  BILLING,
}

type ItemDetails =  {
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
};

type Props = {
  item: ItemDetails;
  onPress?: (item: ItemDetails) => any;
  type?: Types;
};

export const BookingCard = ({onPress, item, type}: Props) => {
  const renderHistory = () => {
    return (
      <>
        <Text color={Colors.black} fontSize={ms(14)} fontWeight="bold">
          {item.car_model}
        </Text>
        <Text color={Colors.black} fontSize={ms(12)} fontWeight="semibold">
          {item.plate_number}
        </Text>
        <View h={ms(20)} />
        <HStack>
          <Text
            color={Colors.black}
            fontSize={ms(10)}
            fontWeight="bold"
            marginRight={ms(5)}>
            Start:
          </Text>
          <Text color={Colors.black} fontSize={ms(10)}>
            {item.start}
          </Text>
        </HStack>
        <HStack>
          <Text
            color={Colors.black}
            fontSize={ms(10)}
            fontWeight="bold"
            marginRight={ms(5)}>
            End:
          </Text>
          <Text color={Colors.black} fontSize={ms(10)}>
            {item.end}
          </Text>
        </HStack>
        <HStack>
          <Text
            color={Colors.black}
            fontSize={ms(10)}
            fontWeight="bold"
            marginRight={ms(5)}>
            Contract:
          </Text>
          <Text color={Colors.black} fontSize={ms(10)}>
            {item.contract}
          </Text>
        </HStack>
      </>
    );
  };
  const renderOther = () => {
    return (
      <>
        <Text color={Colors.white} fontSize={ms(16)}>
          BOOKING ID: {item.booking_id}
        </Text>
        <Text color={Colors.black} fontSize={ms(20)} fontWeight="bold">
          {item.price}
        </Text>
        <Text color={Colors.white} fontSize={ms(12)}>
          Distance: {item.distance}
        </Text>
      </>
    );
  };
  return (
    <Pressable
      flexDirection="row"
      borderRadius="xl"
      h={ms(157)}
      alignItems="center"
      justifyContent="space-around"
      backgroundColor={Colors.white}
      onPress={onPress}>
      <Image
        source={item.carImage}
        alt="test"
        width={ms(150)}
        height={ms(90)}
      />
      <View>{renderHistory()}</View>
    </Pressable>
  );
};
