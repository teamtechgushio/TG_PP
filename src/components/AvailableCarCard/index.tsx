import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, HStack, Text, View} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';
import {Image as Images} from '@assets';

type Props = {
  item: any;
  index: number;
  handleOnPressCarCard: (index: number) => any;
  handleOnPressCancelCarCard: (index: number) => any;
};

export const AvailableCarCard = ({
  item,
  index,
  handleOnPressCarCard,
  handleOnPressCancelCarCard,
}: Props) => {
  let rate = item?.hourlyRate;
  if (item.billFrequency === 'Daily') {
    rate = item.dailyRate;
  } else if(item.billFrequency === 'Weekly') {
    rate = item.weeklyRate;
  } else if (item.billFrequency === 'Monthly') {
    rate = item.monthlyRate;
  } else {
    rate = item.hourlyRate;
  }
  return (
    <View p="2">
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => handleOnPressCarCard(index)}>
        <View style={[styles.cardHeader]}>
          <Text
            style={[styles.textBrand]}
            fontFamily="NotoSans"
            fontSize={ms(34)}>
            {item.make}
          </Text>
          <Text
            style={[styles.textPrice]}
            fontSize={ms(34)}
            fontFamily="mono"
            fontWeight="bold">
            ${rate}
          </Text>
        </View>
        <View flexDirection="row" justifyContent="space-between">
          <Text fontSize="sm" noOfLines={2} flex={1}>{item.model}</Text>
          <Text fontSize="sm">/ {item.billFrequency}</Text>
        </View>
        <View flexDirection="row" justifyContent="space-between">
          <Text>Engine</Text>
          <Text>{item.gear ? `${item.gear} `: null}</Text>
        </View>
        {item.selected && (
          <View flexDirection="row" justifyContent="space-between">
            <Text>Location</Text>
            <Text>{item.currentLocation}</Text>
          </View>
        )}

        <View justifyContent="flex-end" flex="1">
          {item.selected ? (
            <HStack space="5">
              <Button
                flex={1}
                variant="solid"
                size="md"
                borderColor={Colors.offBlack}
                colorScheme="dark"
                marginY={ms(20)}
                _text={{
                  color: Colors.white,
                }}>
                Book
              </Button>
              <Button
                flex={1}
                variant="outline"
                size="md"
                borderColor={Colors.offBlack}
                colorScheme="dark"
                color={Colors.offBlack}
                marginY={ms(20)}
                onPress={() => handleOnPressCancelCarCard(index)}>
                Cancel
              </Button>
            </HStack>
          ) : (
            <Image source={Images.nissanVanSmall} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: ms(320),
    backgroundColor: Colors.lightGrey,
    borderRadius: ms(35),
    marginBottom: ms(35),
    paddingHorizontal: ms(37),
    paddingTop: ms(35),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBrand: {
    fontSize: ms(34),
    fontWeight: '700',
    color: '#212121',
  },
  engineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: ms(10),
  },
  textPrice: {
    fontSize: ms(34),
    color: Colors.azure,
  },
});
