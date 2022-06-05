import React from 'react';
import {View, Text, Center, Divider} from 'native-base';
import {Container, VehicleForServicingCard} from '@components';
import {ms} from 'react-native-size-matters';
import {useBookingStore} from '@stores';

const VehicleServicing = ({navigation}: any) => {
  const {items} = useBookingStore();

  const handleOnPressCard = (index: number) => {
    navigation.navigate('VehicleBooking', {...items[index]});
  };

  return (
    <Container iconName="arrow-back" title="Vehicle Servicing">
      <View paddingBottom={ms(20)}>
        <View padding={ms(20)}>
          <Center>
            <Text fontSize={ms(16)}>Vehicles due for servicing</Text>
          </Center>
        </View>
        <Divider />
        {items.map((item, index) => (
          <View key={`${item.booking_id}-${index}`}>
            <VehicleForServicingCard
              {...item}
              onPressCard={() => handleOnPressCard(index)}
            />
            {index < items.length - 1 && <Divider />}
          </View>
        ))}
      </View>
    </Container>
  );
};

export default VehicleServicing;
