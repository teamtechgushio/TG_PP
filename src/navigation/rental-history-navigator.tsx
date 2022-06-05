import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyRentalHistory, RentalHistoryDetails} from '@screens';
import {Screens} from '@utils';

const {Navigator, Screen} = createNativeStackNavigator();

const RentalHistoryStack = () => {
  return (
    <Navigator screenOptions={{header: () => null}}>
      <Screen name="RentalHistory" component={MyRentalHistory} />
      <Screen
        name={Screens.RentalHistoryDetails}
        component={RentalHistoryDetails}
      />
    </Navigator>
  );
};

export default RentalHistoryStack;
