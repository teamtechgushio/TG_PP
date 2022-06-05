import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {navigationRef, Home} from '@navigation';
import {Login, Splash} from '@screens';
import {theme} from '@styles';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Navigator
            screenOptions={{
              header: () => null,
            }}>
            <Screen component={Splash} name="Splash" />
            <Screen component={Login} name="Login" />
            <Screen component={Home} name="Home" />
          </Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
