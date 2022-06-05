/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Text, StyleSheet, Pressable} from 'react-native';
import {Image, VStack} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';
import {Image as Images} from '@assets';

type Props = {
  selectCarCarousel: (index: number) => void;
  selectedCar: number;
};

export const CarCarousel = ({selectCarCarousel, selectedCar = 0}: Props) => {
  const vehicles = [
    {
      image: Images.nissanVanSmall,
      type: 'Eco',
      code: '458',
    },
    {
      image: Images.carSmallPrestige,
      type: 'Prestige',
      code: '232',
    },
    {
      image: Images.carSmallSuv,
      type: 'Eco',
      code: '568',
    },
    {
      image: Images.nissanVanSmall,
      type: 'Eco',
      code: '458',
    },
    {
      image: Images.carSmallPrestige,
      type: 'Prestige',
      code: '232',
    },
    {
      image: Images.carSmallSuv,
      type: 'Eco',
      code: '568',
    },
    {
      image: Images.nissanVanSmall,
      type: 'Eco',
      code: '458',
    },
  ];

  const renderItem = ({item, index}: any) => {
    return (
      <Pressable
        onPress={() => selectCarCarousel(index)}
        key={`${item.code}-${index}`}>
        <VStack
          alignItems="center"
          marginLeft="3"
          padding="3"
          rounded="xl"
          w={140}
          bgColor={selectedCar === index ? Colors.azure : 'gray.300'}>
          <Image
            alt="car image"
            source={item.image}
            resizeMode="contain"
            width={ms(110)}
            height={ms(100)}
          />
          <Text
            style={[styles.typeText, selectedCar === index && {color: '#FFF'}]}>
            {item.type}
          </Text>
          <Text
            style={[styles.codeText, selectedCar === index && {color: '#FFF'}]}>
            {item.code}
          </Text>
        </VStack>
      </Pressable>
    );
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: ms(20),
  },
  backDrop: {
    position: 'absolute',
    borderRadius: ms(20),
    width: ms(110),
    height: ms(149),
    backgroundColor: Colors.lightGrey,
  },
  smallCarCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ms(151),
    height: ms(161),
  },
  typeText: {
    fontSize: ms(14),
    fontWeight: '700',
    color: '#333',
  },
  codeText: {
    fontSize: ms(12),
    color: '#333',
  },
});
