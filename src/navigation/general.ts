import {Dimensions} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {BottomTabId, Screens} from '../utils/constants';
import Screen from '../layouts/screen';
import Stack from '../layouts/stack';
import MainBottomTabs from '../layouts/main-tabs';
import WelcomeStack from '../layouts/welcome';
import {RNNDrawer} from 'react-native-navigation-drawer-extension';
import {DirectionType} from 'react-native-navigation-drawer-extension/lib/RNNDrawer';
import {Colors} from '@styles';

const {width, height} = Dimensions.get('screen');

async function showWelcome() {
  Navigation.setRoot({root: WelcomeStack});
}

async function showMainTabs(tabId: string) {
  Navigation.setRoot({root: MainBottomTabs});

  Navigation.mergeOptions(BottomTabId, {
    bottomTabs: {
      currentTabId: tabId,
    },
  });
}

async function showMainScreens() {
  Navigation.setRoot({
    root: Stack({
      screen: Screen({
        name: Screens.Account,
        options: {
          topBar: {visible: false},
          statusBar: {
            backgroundColor: Colors.transparent,
          },
        },
      }),
    }),
  });
}

async function openDrawer(componentId: string) {
  RNNDrawer.showDrawer({
    component: {
      name: 'CustomDrawer',
      passProps: {
        animationOpenTime: 300,
        animationCloseTime: 300,
        direction: DirectionType.left,
        dismissWhenTouchOutside: true,
        fadeOpacity: 0.2,
        drawerScreenWidth: width * 0.75,
        drawerScreenHeight: height + 500,
        parentComponentId: componentId,
        style: {
          backgroundColor: 'rgba(0,0,0,0.8)',
        },
      },
      options: {
        layout: {
          // componentBackgroundColor: 'rgba(0,0,0,0.2)',
        },
        topBar: {visible: false},
      },
    },
  });
}

const generalNavigator = {
  showWelcome,
  showMainTabs,
  showMainScreens,
  openDrawer,
};

export default generalNavigator;
