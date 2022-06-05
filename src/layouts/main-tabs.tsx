import {Layout} from 'react-native-navigation';
import {Image} from '../assets/images';
import {Stack, Screen} from '../layouts';
import {BottomTabId, Tab, Screens} from '../utils/constants';

const beautyLoopIconInset = {top: 3, bottom: 0, left: 0, right: 0};
const bottomTabsIconInset = {top: 4, bottom: 0, left: 0, right: 0};

const BottomTabs: Layout = {
  bottomTabs: {
    id: Tab.LocateCar,
    children: [
      Stack({
        id: Tab.LocateCar,
        screen: Screen({
          name: Screens.LocateCar,
          options: {
            topBar: {
              visible: false,
            },
            bottomTab: {
              testID: 'locate-car-tab',
              text: Screens.LocateCar,
              icon: Image.TabLocateCar,
              iconInsets: bottomTabsIconInset,
            },
            bottomTabs: {drawBehind: true, animate: true},
          },
        }),
      }),
      Stack({
        id: Tab.Vehicles,
        screen: Screen({
          name: Screens.Vehicles,
          options: {
            topBar: {
              visible: false,
            },
            bottomTab: {
              testID: 'vehicles-tab',
              text: Screens.Vehicles,
              icon: Image.TabVehicle,
              iconInsets: bottomTabsIconInset,
            },
            bottomTabs: {drawBehind: false, animate: true},
          },
        }),
      }),
      Stack({
        id: Tab.Profile,
        screen: Screen({
          name: Screens.Profile,
          options: {
            statusBar: {
              drawBehind: false,
            },
            topBar: {visible: false},
            bottomTab: {
              testID: 'profile-tab',
              text: Screens.Profile,
              icon: Image.TabProfile,
              iconInsets: beautyLoopIconInset,
            },
            bottomTabs: {drawBehind: true, animate: true},
          },
        }),
      }),
      Stack({
        id: Tab.Account,
        screen: Screen({
          name: Screens.Account,
          options: {
            topBar: {visible: false},
            bottomTab: {
              testID: 'account-tab',
              text: Screens.Account,
              icon: Image.TabAccount,
              iconInsets: bottomTabsIconInset,
            },
            bottomTabs: {drawBehind: false, animate: true},
          },
        }),
      }),
    ],
    options: {
      bottomTabs: {
        currentTabIndex: 0,
      },
    },
  },
};

export default BottomTabs;
