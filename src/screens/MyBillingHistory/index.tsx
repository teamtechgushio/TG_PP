import React from 'react';
import {View, Divider, Text} from 'native-base';
import {
  BookingCard,
  Container2,
  CustomFilterView,
  TabContainer,
} from '@components';
import {Image as Images} from '../../assets';
import {Screens} from '@utils';

enum Types {
  RENTAL,
  BILLING,
}

export default function MyBillingHistory({navigation}: any) {
  const data = [
    {
      car_model: 'NISSAN NV350',
      plate_number: 'GBE1234U',
      booking_id: '183ADGH',
      price: '$28.70',
      distance: '10km',
      carImage: Images.nissanVanSmall,
      start: '09/09/19 (Wed), 09:00 pm',
      end: '09/09/19 (Wed), 10:00 pm',
      status: 'Completed',
      contract: '123-456-789',
    },
    {
      car_model: 'NISSAN NV350',
      plate_number: 'GBE1234U',
      booking_id: '183ADGH',
      price: '$28.70',
      distance: '10km',
      carImage: Images.nissanVanSmall,
      start: '09/09/19 (Wed), 09:00 pm',
      end: '09/09/19 (Wed), 10:00 pm',
      status: 'Completed',
      contract: '123-456-789',
    },
    {
      car_model: 'NISSAN NV350',
      plate_number: 'GBE1234U',
      booking_id: '183ADGH',
      price: '$28.70',
      distance: '10km',
      carImage: Images.nissanVanSmall,
      start: '09/09/19 (Wed), 09:00 pm',
      end: '09/09/19 (Wed), 10:00 pm',
      status: 'Completed',
      contract: '123-456-789',
    },
  ];

  const showBillingDetails = (item: any) => {
    navigation.navigate(Screens.BillingHistoryDetails, item);
  };

  return (
    <Container2 iconName="arrow-back" title="My Billing History">
      <TabContainer
        tabContent1={
          <View>
            <Text>On-going</Text>
          </View>
        }
        tabContent2={data?.map((item: any) => (
          <>
            <BookingCard
              item={item}
              type={Types.BILLING}
              onPress={() => showBillingDetails(item)}
            />
            <Divider />
          </>
        ))}
        hasMore={true}
        moreContent={
          <>
            <CustomFilterView />
          </>
        }
      />
    </Container2>
  );
}
