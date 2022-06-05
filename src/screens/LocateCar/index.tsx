import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {BurgerMenuButton} from '@components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {generalNavigator} from '@navigation';

type Props = {componentId: string};

export default function LocateCar({componentId}: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View size="full" style={[{paddingTop: insets.top}]}>
      <BurgerMenuButton
        onPress={() => generalNavigator.openDrawer(componentId)}
      />
      {/* <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  );
}
