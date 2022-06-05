import React from 'react';
import {View, Text, VStack} from 'native-base';
import {AccidentIDCard, Container2, TabContainer} from '../../components';
import {Image as Images} from '../../assets';
import {ms} from 'react-native-size-matters';
import {Screens} from '@utils';

const AccidentClaims = ({navigation}: any) => {
  const data = [
    {
      booking_id: '183ADGH',
      price: '$28.70',
      distance: '10km',
      carImage: Images.carSmallSuv,
      accident_id: '123-456-789 10-MTE',
    },
  ];

  const showAccidentClaimDetail = (item: any) => {
    navigation.navigate(Screens.AccidentClaimDetails, item);
  };

  return (
    <Container2 iconName="arrow-back" title="Accident Claims">
      <TabContainer
        tabContent1={
          <View>
            <Text>On-going</Text>
          </View>
        }
        tabContent2={
          <VStack space={ms(10)}>
            <>
              {data?.map((item: any, idx: number) => (
                <AccidentIDCard
                  item={item}
                  key={`${idx}`}
                  onPress={() => showAccidentClaimDetail(item)}
                />
              ))}
              {/* <Divider /> */}
            </>
          </VStack>
        }
      />
    </Container2>
  );
};

export default AccidentClaims;
