import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {useUser} from '@stores';
import {Colors} from '@styles';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawerContent = props => {
  const progress = useDrawerProgress();

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const handleOnPressLogout = () => {
    useUser.getState().clear();
  };

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={{transform: [{translateX}]}}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={handleOnPressLogout}
          activeTintColor={Colors.white}
          inactiveTintColor={Colors.white}
          labelStyle={{fontWeight: 'bold', fontSize: ms(14)}}
          icon={() => (
            <Icon
              name="power-settings-new"
              size={ms(28)}
              color={Colors.white}
              style={{fontWeight: 'bold'}}
            />
          )}
        />
      </Animated.View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
