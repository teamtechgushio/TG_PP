import React from 'react';
import {VStack, Text, Switch, Button, HStack, Spacer} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Container, Container2} from '../../components';
import {Colors, CustomStyles} from '@styles';

const Settings = ({navigation}: any) => {
  const onPressSave = () => {
    navigation.goBack();
  };

  return (
    <Container2 iconName="arrow-back" title="Settings">
      <VStack
        space="2.5"
        padding={ms(20)}
        bgColor="white"
        rounded="2xl"
        style={[CustomStyles.shadowed]}>
        <Text fontSize="lg">Would you like to:</Text>
        <HStack justifyContent="space-between">
          <Text fontSize="lg" maxWidth="2/3">
            Receive invoices through physical hardcopy?
          </Text>
          <Switch size="lg" />
        </HStack>

        <HStack justifyContent="space-between">
          <Text fontSize="lg" maxWidth="2/3">
            Receive invoices through email?
          </Text>
          <Switch size="lg" />
        </HStack>

        <Button
          marginTop="10"
          borderRadius="full"
          backgroundColor={Colors.darkGrey}
          onPress={onPressSave}>
          <Text fontSize="md" color={Colors.white}>
            Save
          </Text>
        </Button>
      </VStack>
      <Spacer size="5" />
      <VStack
        space="2.5"
        padding={ms(20)}
        bgColor="white"
        rounded="2xl"
        style={[CustomStyles.shadowed]}>
        <Text fontSize="lg" marginBottom="5">
          Allow staff to view:
        </Text>
        <HStack justifyContent="space-between">
          <Text fontSize="lg" maxWidth="2/3">
            Rental History
          </Text>
          <Switch size="lg" />
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="lg" maxWidth="2/3">
            Billing History
          </Text>
          <Switch size="lg" />
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="lg" maxWidth="2/3">
            Accident Claims
          </Text>
          <Switch size="lg" />
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="lg" maxWidth="2/3">
            Vehicle Servicing
          </Text>
          <Switch size="lg" />
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="lg" maxWidth="2/3">
            Loyalty Program
          </Text>
          <Switch size="lg" />
        </HStack>
        <Button
          marginTop="10"
          borderRadius="full"
          backgroundColor={Colors.darkGrey}
          onPress={onPressSave}>
          <Text fontSize="md" color={Colors.white}>
            Save
          </Text>
        </Button>
      </VStack>
    </Container2>
  );
};

export default Settings;
