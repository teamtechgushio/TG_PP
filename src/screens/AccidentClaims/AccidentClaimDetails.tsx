import React from 'react';
import {View, Text, Divider, VStack, HStack} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Container} from '@components';
import {Image as Images} from '@assets';
import {Colors} from '@styles';

export const AccidentClaimDetails = () => {
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
    accident_id: '123-456-789 10MTE',
    time_of_report: '09/09/19 (Wed), 09:00 pm',
    time_of_incident: '09/09/19 (Wed), 09:00 pm',
    third_party_name: 'Marcus Lim',
    third_party_contact: '98765432',
  };

  return (
    <Container iconName="arrow-back" title="Accident Claims">
      <VStack
        space={ms(10)}
        padding={ms(20)}
        paddingTop={ms(30)}
        alignItems="center">
        <Text fontSize={ms(20)}>Accident ID</Text>
        <Text fontSize={ms(45)} textAlign="center" lineHeight={ms(45)}>
          {data.accident_id}
        </Text>
      </VStack>
      <VStack padding={ms(20)}>
        <Text fontSize="md" noOfLines={2}>
          <Text fontWeight="bold" fontSize="md">
            Time of Report:{' '}
          </Text>
          {data.time_of_report}
        </Text>

        <Text fontSize="md" noOfLines={2}>
          <Text fontWeight="bold" fontSize="md">
            Time of Incident:{' '}
          </Text>
          {data.time_of_incident}
        </Text>

        <Text fontSize="md" noOfLines={2}>
          <Text fontWeight="bold" fontSize="md">
            Location:{' '}
          </Text>
          {data.location}
        </Text>

        <Text fontSize="md" noOfLines={2}>
          <Text fontWeight="bold" fontSize="md">
            3rd Party Name:{' '}
          </Text>
          {data.third_party_name}
        </Text>

        <Text fontSize="md" noOfLines={2}>
          <Text fontWeight="bold" fontSize="md">
            3rd Party Contact:{' '}
          </Text>
          {data.third_party_contact}
        </Text>
      </VStack>
      <Divider bgColor={Colors.darkGrey} borderWidth="0.5" />
      <HStack justifyContent="space-evenly" paddingY={ms(10)}>
        <View
          justifyContent="space-evenly"
          alignItems="center"
          padding={ms(20)}>
          <Text fontSize="sm" textAlign="center">
            Insurance Excess{'\n'}Sec 1 $
          </Text>
          <Text color={Colors.brightRed} fontSize={ms(40)} fontWeight="bold">
            1000
          </Text>
        </View>
        <View height={ms(120)} borderWidth="0.5" />
        <View
          justifyContent="space-evenly"
          alignItems="center"
          padding={ms(20)}>
          <Text fontSize="sm" textAlign="center">
            Insurance Excess{'\n'}Sec 2 $
          </Text>
          <Text color={Colors.brightRed} fontSize={ms(40)} fontWeight="bold">
            500
          </Text>
        </View>
      </HStack>
      <Divider bgColor={Colors.darkGrey} borderWidth="0.5" />
      <VStack padding={ms(20)}>
        <HStack>
          <Text fontSize="md">Own Damage Excess: </Text>
          <Text fontSize="md" fontWeight="bold">
            0
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md">Own Damage Report Cost: </Text>
          <Text fontSize="md" fontWeight="bold">
            0
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md">Wind Screen Excess: </Text>
          <Text fontSize="md" fontWeight="bold">
            0
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md">Late Reporting Fee: </Text>
          <Text fontSize="md" fontWeight="bold">
            0
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md">Admin Legal Fee: </Text>
          <Text fontSize="md" fontWeight="bold">
            0
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md">Others Fee: </Text>
          <Text fontSize="md" fontWeight="bold">
            0
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md">Outstanding Amount: </Text>
          <Text fontSize="md" fontWeight="bold">
            0
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
};
