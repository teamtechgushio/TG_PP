import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import {Center, VStack} from 'native-base';
import {Logo} from '@components';
import {useUser} from '@stores';
import {CommonActions, useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Splash = () => {
  const navigation = useNavigation();
  const user = useUser(state => state.user);
  const timer = useRef<any>();

  useEffect(() => {
    timer.current = setTimeout(() => {
      if (user) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Home'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Login'}],
          }),
        );
      }
    }, 3000);
    () => {
      clearTimeout(timer.current);
    };
  }, [user]);

  return (
    <VStack flex="1">
      <Center>
        <Logo width={width * 0.75} />
        <ActivityIndicator size="large" />
      </Center>
    </VStack>
  );
};

export default Splash;
