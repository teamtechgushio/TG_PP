import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, Image, Text, View, VStack} from 'native-base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '@styles';
import {ms} from 'react-native-size-matters';
import {DrawerContainer, ListItem} from '../../components';
import {Screens} from '../../utils/constants';
import {Image as Images} from '../../assets';
import {useUser} from '@stores';

type LabelProps = {icon: any; title: string};

export default function Account({navigation}: any) {
  const user = useUser(state => state.user);
  const insets = useSafeAreaInsets();

  const navigateTo = (name: string) => {
    navigation.navigate(name);
  };

  const Label = ({icon, title}: LabelProps) => (
    <View flexDirection="row" justifyContent="flex-start" alignItems="center">
      <View
        borderWidth={ms(1.5)}
        borderRadius="full"
        borderColor={Colors.darkGrey}
        justifyContent="center"
        alignItems="center"
        marginRight={ms(20)}
        padding={ms(8)}>
        <Image
          source={icon}
          alt={`${title}-icon`}
          width={ms(20)}
          height={ms(20)}
        />
      </View>
      <Text fontSize={ms(18)}>{title}</Text>
    </View>
  );

  return (
    <DrawerContainer title="Account" isMainScreen={true} iconName="settings">
      <VStack rounded="3xl" size="full" style={styles.list}>
        <View
          flexDirection="row"
          alignItems="center"
          paddingLeft={ms(10)}
          paddingRight={ms(10)}
          paddingY={ms(20)}>
          {/* <Image source={Images.avatar} alt="avatar" /> */}
          <Text fontSize={ms(14)} lineHeight={ms(14)}>
            Welcome{', ' +user?.name || ''}
          </Text>
        </View>
        <Divider />
        <VStack space={ms(20)} paddingY={ms(20)}>
          <ListItem onPress={() => navigateTo(Screens.MyRentalHistory)}>
            <Label icon={Images.key} title="My Rental History" />
          </ListItem>
          <ListItem onPress={() => navigateTo(Screens.MyBillingHistory)}>
            <Label icon={Images.file} title="My Billing History" />
          </ListItem>
          <ListItem onPress={() => navigateTo(Screens.VehicleServicing)}>
            <Label icon={Images.repairTool} title="Vehicle Servicing" />
          </ListItem>
          <ListItem onPress={() => navigateTo(Screens.AccidentClaims)}>
            <Label icon={Images.user} title="Accident Claims" />
          </ListItem>
          <ListItem>
            <Label icon={Images.favorites} title="Loyalty Programs" />
          </ListItem>
          <ListItem onPress={() => navigateTo(Screens.Settings)}>
            <Label icon={Images.settings} title="Settings" />
          </ListItem>
          <ListItem onPress={() => navigateTo(Screens.Enquiries)}>
            <Label icon={Images.information} title="Enquiries" />
          </ListItem>
        </VStack>
      </VStack>
    </DrawerContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightestGrey,
  },
  content: {
    padding: ms(20),
  },
  list: {
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 1,
      height: -7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 5,
  },
  bgCard: {
    position: 'absolute',
    backgroundColor: Colors.teal,
    height: ms(300),
    padding: ms(20),
  },
});
