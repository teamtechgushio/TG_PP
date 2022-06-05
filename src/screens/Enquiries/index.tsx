import React from 'react';
import {
  Button,
  Center,
  Input,
  Select,
  Spacer,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Container2} from '@components';
import {CustomStyles} from '@styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Enquiries = ({}) => {
  return (
    <Container2 iconName="arrow-back" title="Enquiries">
      <VStack
        space="1"
        bgColor="white"
        rounded="2xl"
        style={CustomStyles.shadowed}
        padding={ms(20)}>
        <Center rounded="md" bgColor="gray.700" h={10}>
          <Text color="white">Request Quote</Text>
        </Center>
        <Input placeholder="How Many? *" />
        {/* <Input placeholder="Primary Use Of Vehicle?" /> */}
        <Select placeholder="Primary Use of Vehicle? *">
          <Select.Item value="Business 1" label="Business 1" />
          <Select.Item value="Business 2" label="Business 2" />
          <Select.Item value="Biz3" label="Biz 3" />
        </Select>
        <Input placeholder="Duration of Lease?" />
        <Input placeholder="Make? *" />
        <Input placeholder="Mode? *" />
        <Input placeholder="Company Name?" />
      </VStack>
      <Spacer size="3" />
      <VStack
        space="1"
        bgColor="white"
        rounded="2xl"
        style={CustomStyles.shadowed}
        padding={ms(20)}>
        <Input placeholder="First Name? *" />
        <Input placeholder="Last Name? *" />
        <Input placeholder="Email Address? *" />
        <Input placeholder="Phone Number? *" />
        <TextArea placeholder="Additional Information?" />

        <Spacer size="10" />
        <Button
          rounded="50"
          colorScheme="dark"
          _text={{fontWeight: 'bold', color: Colors.white}}>
          Send
        </Button>
      </VStack>
    </Container2>
  );
};

export default Enquiries;
