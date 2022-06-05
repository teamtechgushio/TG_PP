import React from 'react';
import {
  View,
  Text,
  VStack,
  HStack,
  Select,
  Button,
  Flex,
  CheckIcon,
  Input,
  Stack,
} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';

export const CustomFilterView = () => {
  const [position, setPosition] = React.useState<string>();
  return (
    <VStack space="3" marginBottom="4">
      <View
        backgroundColor="#404040"
        h={ms(40)}
        justifyContent="center"
        alignItems="center"
        rounded="md">
        <Text color={Colors.white} fontSize={ms(16)}>
          Search By
        </Text>
      </View>
      {/* <View
        backgroundColor="#CCCCCF"
        h={ms(40)}
        justifyContent="center"
        alignItems="flex-start"
        rounded="md"
        padding="3"> */}
      {/* <Text>Department</Text> */}
      <Flex>
        <Select
          flex={1}
          selectedValue={position}
          onValueChange={nextValue => setPosition(nextValue)}
          placeholder="Department"
          _selectedItem={{
            bg: 'gray.700',
            _text: {
              color: Colors.white,
            },
            endIcon: <CheckIcon size={4} />,
          }}>
          <Select.Item label="Department 1" value="Department 1" />
          <Select.Item label="Department 2" value="Department 2" />
          <Select.Item label="Department 3" value="Department 3" />
        </Select>
      </Flex>
      {/* </View> */}
      <HStack space="2">
        <VStack
          backgroundColor="gray.200"
          h={ms(50)}
          justifyContent="center"
          alignItems="flex-start"
          rounded="md"
          padding="3"
          flex={1}>
          <Text fontSize="xs">Start Date</Text>

          <Input
            paddingX={0}
            marginX={0}
            w="100%"
            size="md"
            placeholder="mm/dd/yy"
          />
        </VStack>
        <VStack
          backgroundColor="gray.200"
          h={ms(50)}
          justifyContent="center"
          alignItems="flex-start"
          rounded="md"
          padding="3"
          flex={1}>
          <Text fontSize="xs">End Date</Text>
          {/* <Text color="coolGray.500">mm/dd/yy</Text> */}
          <Input
            paddingX={0}
            marginX={0}
            w="100%"
            size="md"
            placeholder="mm/dd/yy"
          />
        </VStack>
      </HStack>
      <View
        h={ms(40)}
        justifyContent="center"
        alignItems="flex-start"
        rounded="md">
        <Input w="100%" size="md" placeholder="Contact Number" />
      </View>
    </VStack>
  );
};
