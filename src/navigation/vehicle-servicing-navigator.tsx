import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  VehicleBooking,
  VehicleBookingDaySelection,
  VehicleServicing,
} from '@screens';

const {Navigator, Screen, Group} = createNativeStackNavigator();

const VehicleServicingStack = () => {
  return (
    <Navigator screenOptions={{header: () => null}}>
      <Group>
        <Screen name="VehicleServicingDashboard" component={VehicleServicing} />
        <Screen
          name="VehicleBookingDaySelect"
          component={VehicleBookingDaySelection}
        />
      </Group>
      <Group screenOptions={{presentation: 'modal'}}>
        <Screen name="VehicleBooking" component={VehicleBooking} />
      </Group>
    </Navigator>
  );
};

export default VehicleServicingStack;
