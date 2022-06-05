import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Account as AccountScreen,
  LoyaltyPrograms,
  Settings,
  Enquiries,
} from '@screens';
import RentalHistoryStack from './rental-history-navigator';
import BillingHistoryStack from './billing-history-navigator';
import AccidentClaimsStack from './accident-claims-navigator';
import VehicleServicingStack from './vehicle-servicing-navigator';

const {Navigator, Screen} = createNativeStackNavigator();

const Account = () => {
  return (
    <Navigator screenOptions={{header: () => null}}>
      <Screen name="Accounts" component={AccountScreen} />
      <Screen name="MyRentalHistory" component={RentalHistoryStack} />
      <Screen name="MyBillingHistory" component={BillingHistoryStack} />
      <Screen name="VehicleServicing" component={VehicleServicingStack} />
      <Screen name="AccidentClaims" component={AccidentClaimsStack} />
      <Screen name="LoyaltyProgram" component={LoyaltyPrograms} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Enquiries" component={Enquiries} />
    </Navigator>
  );
};

export default Account;
