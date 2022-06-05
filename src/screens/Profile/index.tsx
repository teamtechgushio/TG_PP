import React from 'react';
import {
  Center,
  Image,
  Text,
  VStack,
  View,
  HStack,
  Divider,
  Spacer,
} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Image as Images} from '@assets';
import {DrawerContainer} from '@components';
import {CustomStyles, Colors} from '@styles';
import {useUser} from '@stores';

const Profile = () => {
  const {user} = useUser();
  return (
    <DrawerContainer icon={Images.Icon.profile} title="Profile">
      <VStack style={CustomStyles.shadowed} padding={ms(20)}>
        <Center paddingTop="8">
          <Text>
            Hello, <Text bold>{user.name}</Text>
          </Text>
        </Center>
        <Center>
          <Image
            alt="profile car pic"
            source={Images.nissanVanSmall}
            w={ms(200)}
            h={ms(120)}
            resizeMode="contain"
          />
        </Center>

        <View flexDirection="row">
          <Text bold>Address: </Text>
          <Text>Telor Kurau Rd 6, S12345</Text>
        </View>
        <View flexDirection="row">
          <Text bold>Billing: </Text>
          <Text>Telor Kurau Rd 6, S12345</Text>
        </View>
        <View flexDirection="row">
          <Text bold>ROC No.: </Text>
          <Text>8888880G</Text>
        </View>
        <View flexDirection="row">
          <Text bold>Telephone: </Text>
          <Text>+65 5212 2222</Text>
        </View>
        <View flexDirection="row">
          <Text bold>Contact Person: </Text>
          <Text>Chen Long Dong</Text>
        </View>
        <View flexDirection="row">
          <Text bold>Email: </Text>
          <Text>sales@fnn.com.sg</Text>
        </View>
        <View flexDirection="row">
          <Text bold>Salesman: </Text>
          <Text>Selina Tan</Text>
        </View>
        <View flexDirection="row">
          <Text bold>Service Due: </Text>
          <Text>05/05/2021</Text>
        </View>
        <View flexDirection="row">
          <Text bold>Rental Item: </Text>
          <Text>C.O.D.</Text>
        </View>
      </VStack>
      <Divider />
      <HStack justifyContent="center" flex={1}>
        <VStack h={ms(200)} flex={1}>
          <Center h={ms(100)} paddingY="5" justifyContent="center">
            <Text textAlign="center">On-going Contract</Text>
            <Text
              textAlign="center"
              bold
              fontSize={ms(20)}
              marginTop="6"
              color={Colors.azure}>
              9
            </Text>
          </Center>
          <Divider />
          <Center h={ms(100)} paddingY="5" justifyContent="center">
            <Text textAlign="center">Loyalty Points</Text>
            <Text
              textAlign="center"
              bold
              fontSize={ms(20)}
              marginTop="3"
              color={Colors.lemon}>
              100
            </Text>
          </Center>
        </VStack>
        <Divider orientation="vertical" />
        <VStack h={ms(200)} flex={1}>
          <Center h={ms(100)} paddingY="5" justifyContent="center">
            <Text textAlign="center">Servicing pending{'\n'}Vehices</Text>
            <Text
              textAlign="center"
              bold
              fontSize={ms(20)}
              marginTop="1"
              color={Colors.azure}>
              7
            </Text>
          </Center>
          <Divider />
          <Center h={ms(100)} paddingY="5" justifyContent="center">
            <Text textAlign="center">Staff Members</Text>
            <Text
              textAlign="center"
              bold
              fontSize={ms(20)}
              marginTop="3"
              color={Colors.neonGreen}>
              50
            </Text>
          </Center>
        </VStack>
      </HStack>

      <Divider />
      <Center paddingY="4">
        <Text fontSize="lg">Email us</Text>
        <Text bold fontSize="lg" color={Colors.azure}>
          sales@panpacificleasing.com.sg
        </Text>
        <Spacer size="2" />
        <Text fontSize="lg">Contact</Text>
        <Text bold fontSize="lg" color={Colors.azure}>
          +65 8482 30003
        </Text>
      </Center>
    </DrawerContainer>
  );
}

export default Profile;