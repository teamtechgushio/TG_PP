import React, { useState } from 'react';
import {View, Text, Divider} from 'native-base';
import {
  BookingCard,
  Container2,
  CustomFilterView,
  TabContainer,
} from '@components';
import {Image as Images} from '../../assets';
import {navigate} from '@navigation';
import {Screens} from '@utils';
import {API} from '@services';
import Toast from 'react-native-simple-toast';

type Props = {
  componentId: string;
};

enum Types {
  RENTAL,
  BILLING,
}

export default function MyRentalHistory({componentId}: Props) {
  let [data, dataSet] = useState<any[]>([])
  const getData = async () => {
    try {
      const result = await API.getRentalContract();
      dataSet(result);
    } catch (error) {
      console.log('Error - No cars available, Please try again later', error);
      Toast.show('Error - No cars available, Please try again later', 3000);
    }
  };

  getData();
  console.log(data);
  // const data1 = [
  //   {
  //     car_model: 'NISSAN NV350',
  //     plate_number: 'GBE1234U',
  //     booking_id: '183ADGH',
  //     price: '$28.70',
  //     distance: '10km',
  //     carImage: Images.nissanVanSmall,
  //     start: '09/09/19 (Wed), 09:00 pm',
  //     end: '09/09/19 (Wed), 10:00 pm',
  //     status: 'Completed',
  //     contract: '123-456-789',
  //   }
  // ];
  // console.log(data)
  const showRentalDetails = (item: any) => {
    navigate(Screens.RentalHistoryDetails, item);
  };
  return (
    <Container2 iconName="arrow-back" title="My Rental History">
      <TabContainer
        tabContent1={
          <View>
            <Text>On-going</Text>
          </View>
        }
        tabContent2={data?.map((item, index) => (
          <>
            <BookingCard
              key={`${item.CustCode}-${index}`}
              item={item}
              type={Types.RENTAL}
              onPress={() => showRentalDetails(item)}
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
