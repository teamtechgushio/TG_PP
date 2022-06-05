import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '@utils';
import {MyBillingHistory, BillingHistoryDetails} from '@screens';

const {Navigator, Screen} = createNativeStackNavigator();

const BillingHistoryStack = () => {
  return (
    <Navigator screenOptions={{header: () => null}}>
      <Screen name="BillingHistory" component={MyBillingHistory} />
      <Screen
        name={Screens.BillingHistoryDetails}
        component={BillingHistoryDetails}
      />
    </Navigator>
  );
};

export default BillingHistoryStack;
