import React from 'react';
import {View, Text, Center, VStack, Divider} from 'native-base';
import {BookingCard, Container, TabContainer} from '../../components';
import {Image as Images} from '../../assets';
import {Navigation} from 'react-native-navigation';
import {Screens} from '@utils';
import {ms} from 'react-native-size-matters';

type Props = {
  componentId: string;
};

enum Types {
  RENTAL,
  BILLING,
}

export default function RentalAgreement({componentId}: Props) {
  return (
    <Container
      iconName="arrow-back"
      title="Rental Agreement"
      componentId={componentId}>
      <Center padding={ms(20)}>
        <Text fontSize={ms(20)}>Rental Agreement</Text>
      </Center>
      <Divider />
      <VStack padding={ms(20)} space={ms(10)}>
        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>

        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>
        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>
        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>
        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>
        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>
        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>
        <Text fontSize={ms(16)}>
          Chapter 1.3.4
          {'\n'}
          Any damages to the car will be subjected to.....
        </Text>
      </VStack>
    </Container>
  );
}
