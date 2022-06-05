import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '@utils';
import {AccidentClaims, AccidentClaimDetails} from '@screens';

const {Navigator, Screen} = createNativeStackNavigator();

const AccidentClaimsStack = () => {
  return (
    <Navigator screenOptions={{header: () => null}}>
      <Screen name={Screens.AccidentClaims} component={AccidentClaims} />
      <Screen
        name={Screens.AccidentClaimDetails}
        component={AccidentClaimDetails}
      />
    </Navigator>
  );
};

export default AccidentClaimsStack;
