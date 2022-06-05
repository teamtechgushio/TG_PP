import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image as Icons} from '@assets';
import DrawerButton from './drawer-button';

const Buttons = [
  {
    id: 1,
    name: 'Account',
    component: 'Account',
    iconName: 'settings',
    icon: Icons.TabAccount,
    disabled: false,
  },
  {
    id: 2,
    name: 'Vehicles',
    component: 'Vehicles',
    icon: Icons.TabVehicle,
    disabled: false,
  },
  {
    id: 3,
    name: 'Profile',
    component: 'Profile',
    icon: Icons.TabProfile,
    disabled: true,
  },
  {
    id: 4,
    name: 'Locate Car',
    component: 'LocateCar',
    icon: Icons.TabLocateCar,
    disabled: true,
  },
];

export const CustomDrawer = (props: any) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        {/* <Text style={styles.bodyText}>Custom Drawer</Text> */}

        {Buttons.map(button => {
          return (
            <DrawerButton
              key={button.id}
              component={button.component}
              name={button.name}
              icon={button.icon}
              parentComponentId={props.parentComponentId}
              disabled={button.disabled}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  bodyText: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
});
