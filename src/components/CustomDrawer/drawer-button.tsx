import React from 'react';
import {
  ImageSourcePropType,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
// import {Navigation} from 'react-native-navigation';
// import {RNNDrawer} from 'react-native-navigation-drawer-extension';
import {ms} from 'react-native-size-matters';
import {createRoot} from '@utils';
import {Colors} from '@styles';

/**
 * A workaround to avoid pushing
 * the same screen multiple times.
 *
 * For details, check:
 * https://github.com/aspect-apps/react-native-navigation-drawer-extension/issues/31
 */

/**
 * We set this to HomePage because,
 * in this project, HomePage
 * is the initial component.
 */
let lastPageName = 'HomePage';
const CurrentComponentName = 'CustomDrawer';

// Navigation.events().registerComponentDidAppearListener(event => {
//   if (event.componentName !== CurrentComponentName) {
//     lastPageName = event.componentName;
//   }
// });

type Props = {
  parentComponentId: string;
  name: string;
  component: string;
  icon: ImageSourcePropType;
  iconSize?: number;
  disabled?: boolean;
};

const DrawerButton = ({
  name,
  component,
  parentComponentId,
  icon,
  iconSize,
  disabled,
}: Props) => {
  const handleOpenPage = () => {
    // RNNDrawer.dismissDrawer();

    if (lastPageName === component) {
      return;
    }

    // Navigation.setRoot({
    //   component: {
    //     name: Screens.Vehicles,
    //   },
    // });
    if (disabled === false) {
      // Navigation.push(parentComponentId, {
      //   component: {
      //     name: component,
      //   },
      // });
    }
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleOpenPage}>
      {/* <Icon name={iconName} size={iconSize ?? ms(30)} */}
      <Image source={icon} resizeMethod="auto" style={styles.icon} />
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: ms(10),
    padding: ms(10),
    // paddingVertical: ms(20),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: ms(20),
    height: ms(20),
    resizeMode: 'contain',
    marginRight: ms(20),
  },
});

export default DrawerButton;
