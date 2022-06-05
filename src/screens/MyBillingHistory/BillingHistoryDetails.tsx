import React from 'react';
import {
  Button,
  View,
  Text,
  Divider,
  VStack,
  Image,
  HStack,
  Center,
} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Container} from '@components';
import {Image as Images} from '@assets';
import {Colors} from '@styles';

export const BillingHistoryDetails = ({navigation}: any) => {
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

  const handleOnPressPay = () => {
    //
  };

  return (
    <Container iconName="arrow-back" title="My Billing History">
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
          Contact Person:<Text fontWeight="bold"> {data.contract_person}</Text>
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
          justifyContent="space-evenly"
          alignItems="center"
          padding={ms(20)}>
          <Text textAlign="center">Applied{'\n'}Amnt. $</Text>
          <Text color={Colors.lemon} fontSize="50" fontWeight="bold">
            110
          </Text>
        </View>
        <View height={ms(120)} borderWidth="0.5" />
        <View
          justifyContent="space-evenly"
          alignItems="center"
          padding={ms(20)}>
          <Text textAlign="center">Received{'\n'}Amnt. $</Text>
          <Text color={Colors.neonGreen} fontSize="50" fontWeight="bold">
            50
          </Text>
        </View>
      </HStack>
      <Divider bgColor={Colors.darkGrey} borderWidth="0.5" />

      <Center padding={ms(20)}>
        <Text fontSize="xl">Comments</Text>
        <Text
          fontSize={ms(20)}
          fontWeight="bold"
          textAlign="center"
          marginY={ms(20)}
          color="#3C89BC">
          This vehicle is due for a COE renewal
        </Text>

        <Button
          rounded="2xl"
          size="full"
          height={ms(40)}
          marginTop={ms(20)}
          // backgroundColor={Colors.neonGreen}
          // bgColor={Colors.neonGreen}
          colorScheme="neonGreen"
          onPress={handleOnPressPay}
          _text={{
            fontWeight: 'bold',
            fontSize: 'md',
            color: Colors.white,
          }}>
          PAY
        </Button>
      </Center>
    </Container>
  );
};
