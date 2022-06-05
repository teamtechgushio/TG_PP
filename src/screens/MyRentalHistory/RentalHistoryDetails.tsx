import React from 'react';
import {View, Text, Divider, VStack, Image, HStack, Center} from 'native-base';
import {ms} from 'react-native-size-matters';
import {ListItem, Container} from '@components';
import {Image as Images} from '@assets';
import {Screens} from '@utils';
// import {Navigation} from 'react-native-navigation';
import {Colors} from '@styles';

type Props = {
  componentId: string;
};

enum Types {
  RENTAL,
  BILLING,
}

export const RentalHistoryDetails = ({componentId}: Props) => {
  const data = {
    car_model: 'NISSAN NV350',
    plate_number: 'GBE1234U',
    booking_id: '183ADGH',
    price: '$28.70',
    distance: '10km',
    carImage: Images.nissanVanSmall,
    start: '09/09/19 (Wed), 09:00 pm',
    end: '09/09/19 (Wed), 10:00 pm',
    status: 'Completed',
    location: '10 Telok Kurau Lor Z, Singapore 354029',
    lot_no: '17',
    contract: '123-456-789',
    sales_man: 'Tan Kah Kee',
    contract_person: 'Jason Loh',
    service_due: '05/05/2021',
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
    <Container iconName="arrow-back" title="My Rental History">
      <View padding={ms(20)} alignItems="center">
        <Text fontSize={ms(20)}>{data.car_model}</Text>
        <Text fontSize={ms(20)}>{data.plate_number}</Text>
      </View>
      <Center>
        <Image source={data.carImage} />
      </Center>

      <VStack padding={ms(20)}>
        <Text fontSize={ms(16)}>
          Contract: <Text fontWeight="bold">{data.contract}</Text>
        </Text>
        <Text fontSize={ms(16)}>
          Start: <Text fontWeight="bold">{data.start}</Text>
        </Text>
        <Text fontSize={ms(16)}>
          End: <Text fontWeight="bold">{data.end}</Text>
        </Text>
        <Text fontSize={ms(16)}>
          Salesman: <Text fontWeight="bold">{data.sales_man}</Text>
        </Text>
        <Text fontSize={ms(16)}>
          Contract Person:<Text fontWeight="bold"> {data.contract_person}</Text>
        </Text>
        <Text fontSize={ms(16)}>
          Service Due:<Text fontWeight="bold"> {data.service_due}</Text>
        </Text>
      </VStack>
      <Divider bgColor={Colors.darkGrey} borderWidth="0.5" />
      <HStack justifyContent="space-evenly" paddingY={ms(10)}>
        {/* <ListItem onPress={() => navigateTo(Screens.RentalAgreement)}>
          <Text fontSize={ms(18)}>View Rental Agreement</Text>
        </ListItem> */}
        <View
          justifyContent="space-between"
          alignItems="center"
          padding={ms(20)}>
          <Text>No. of Service</Text>
          <Text color={Colors.lemon} fontSize="50" fontWeight="bold">
            12
          </Text>
        </View>
        <View height={ms(120)} borderWidth="0.5" />
        <View
          justifyContent="space-between"
          alignItems="center"
          padding={ms(20)}>
          <Text textAlign="center">Outstanding{'\n'}Amnt. $</Text>
          <Text color={Colors.brightRed} fontSize="50" fontWeight="bold">
            11770
          </Text>
        </View>
      </HStack>
    </Container>
  );
};
