import React from 'react';
import {View, Text, Divider, VStack, Image} from 'native-base';
import {ms} from 'react-native-size-matters';
import {ListItem, Container} from '@components';
import {Image as Images} from '@assets';
import {Screens} from '@utils';
// import {Navigation} from 'react-native-navigation';
import {ImageBackground} from 'react-native';

type Props = {
  componentId: string;
};

export default function LoyaltyPrograms({componentId}: Props) {
  const data = {
    car_model: 'Mercedez C200',
    plate_number: 'SLM8080Z',
    booking_id: '183ADGH',
    price: '$28.70',
    distance: '10km',
    carImage: Images.carSmallSuv,
    start: '09/09/19 (Wed), 09:00 pm',
    end: '09/09/19 (Wed), 10:00 pm',
    status: 'Completed',
    location: '10 Telok Kurau Lor Z, Singapore 354029',
    lot_no: '17',
  };
  const navigateTo = (name: string) => {
    // Navigation.push(componentId, {
    //   component: {
    //     id: `${componentId}-${name}`,
    //     name,
    //     options: {
    //       topBar: {visible: false},
    //       bottomTabs: {
    //         visible: false,
    //       },
    //     },
    //   },
    // });
  };
  return (
    <Container
      iconName="arrow-back"
      title="Loyalty Programs"
      componentId={componentId}>
      <VStack space={ms(30)}>
        <Text>Test</Text>
        <ImageBackground
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            backgroundColor: 'red',
            resizeMode: 'cover',
            justifyContent: 'center',
          }}
          source={Images.loyalty}
          resizeMethod="resize"
          resizeMode="cover">
          <Text>Eugene</Text>
        </ImageBackground>
      </VStack>
    </Container>
  );
}
