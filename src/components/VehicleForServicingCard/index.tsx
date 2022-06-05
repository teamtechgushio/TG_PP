import React from 'react';
import {HStack, Image, VStack, Text} from 'native-base';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';

type Props = {
  image: ImageSourcePropType;
  brand: string;
  model: string;
  booking_id: string;
  date_booked?: string;
  showDateBooked?: boolean;
  onPressCard?: () => any;
};

export const VehicleForServicingCard = ({
  image,
  brand,
  model,
  booking_id,
  date_booked,
  showDateBooked = true,
  onPressCard = () => {},
}: Props) => {
  return (
    <TouchableOpacity onPress={onPressCard}>
      <HStack p="8" space="2" alignItems="center">
        <Image
          alt="Car"
          source={image}
          w={120}
          h={70}
          p="1"
          resizeMode="contain"
        />
        <VStack>
          <Text>
            {brand} {model}
          </Text>
          <Text>{booking_id}</Text>
          {showDateBooked ? (
            <HStack>
              <Text bold>Date booked: </Text>
              <Text>{date_booked ? date_booked : '-'}</Text>
            </HStack>
          ) : null}
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};
