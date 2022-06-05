import React, {useEffect, useState} from 'react';
import {
  Button,
  Center,
  Divider,
  Icon,
  Input,
  Modal,
  Text,
  View,
  VStack,
} from 'native-base';
import {Container, VehicleForServicingCard} from '@components';
import {ms} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomStyles, Colors} from '@styles';

export const VehicleBooking = ({route, navigation}: any) => {
  const booking = route.params;

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDateSelectOnPress = () => {
    navigation.navigate('VehicleBookingDaySelect', {...booking});
  };

  const [bookedTime, setBookedTime] = useState<string>();

  useEffect(() => {
    if (booking.booked_time && parseFloat(booking.booked_time) < 12) {
      setBookedTime(booking.booked_time + ' AM');
    } else {
      setBookedTime(booking.booked_time + ' PM');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container iconName="arrow-back" title="Vehicle Servicing">
      <View bgColor={Colors.white} style={CustomStyles.shadowed} rounded="2xl">
        <Center py="2">
          <Text>Booking Dates</Text>
        </Center>
        <Divider />
        <VehicleForServicingCard {...route.params} />
        <Divider />
        <VStack p={ms(20)} space="5">
          <Input
            placeholder="Date?*"
            value={booking?.date_booked}
            InputRightElement={
              <Icon
                as={<MaterialIcons name="keyboard-arrow-down" />}
                size={6}
                color="gray.500"
                onPress={handleDateSelectOnPress}
              />
            }
          />
          <Input placeholder="Time? *" value={bookedTime} />
          <Button
            colorScheme="dark"
            _text={{
              color: Colors.white,
            }}
            onPress={() => setShowModal(!showModal)}>
            Next
          </Button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              {/* <Modal.Header>Please enter driver's particulars</Modal.Header> */}
              <Center p={ms(15)}>
                <Text fontSize="xl" textAlign="center">
                  Please enter{'\n'} drivers particulars
                </Text>
              </Center>
              <Modal.Body>
                <Input placeholder="First Name? *" />
                <Input placeholder="Last Name? *" />
                <Input placeholder="Email Address? *" />
                <Input placeholder="Phone Number? *" />
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2} flex={1}>
                  <Button
                    flex={1}
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(false);
                    }}>
                    Cancel
                  </Button>
                  <Button
                    flex={1}
                    colorScheme="dark"
                    _text={{
                      color: Colors.white,
                    }}
                    onPress={() => {
                      setShowModal(false);
                    }}>
                    Confirm
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </VStack>
      </View>
    </Container>
  );
};
