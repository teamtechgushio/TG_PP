import React, {useEffect} from 'react';
import {Image} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile, Vehicles} from '@screens';
import CustomDrawerContent from './custom-drawer';
import Account from './accounts-navigator';
import {ms} from 'react-native-size-matters';
import {Image as Images} from '@assets';
import {Colors} from '@styles';
import {useUser} from '@stores';
import {CommonActions} from '@react-navigation/native';

const {Navigator, Screen} = createDrawerNavigator();

const Home = ({navigation}: any) => {
  const {user, userHasSkippedLogin} = useUser();

  useEffect(() => {
    if (!user && !userHasSkippedLogin) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Login'}],
        }),
      );
    }
  }, [navigation, user, userHasSkippedLogin]);

  return (
    <Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: () => null,
        drawerStyle: {
          backgroundColor: 'rgba(0,0,0,0.4)',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          paddingTop: ms(100),
        },
        drawerLabelStyle: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
        },
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.white,
      }}>
      <Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: ({color}) => (
            <Image
              alt="icon"
              source={Images.Icon.account}
              width={ms(25)}
              height={ms(25)}
              tintColor={color}
            />
          ),
        }}
      />
      <Screen
        name="Vehicles"
        component={Vehicles}
        options={{
          drawerIcon: ({color}) => (
            <Image
              alt="icon"
              source={Images.Icon.vehicle}
              width={ms(25)}
              height={ms(25)}
              tintColor={color}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Image
              alt="icon"
              source={Images.Icon.profile}
              width={ms(25)}
              height={ms(25)}
              tintColor={color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Home;
