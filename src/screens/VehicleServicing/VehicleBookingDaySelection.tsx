import React, {useState} from 'react';
import {View, Text, Center, Divider, Image, Button, VStack} from 'native-base';
import {Calendar} from 'react-native-calendars';
import {Container, VehicleForServicingCard} from '../../components';
import {Image as Images} from '../../assets';
import {Colors} from '@styles';
import {ms} from 'react-native-size-matters';
import moment from 'moment';

export const VehicleBookingDaySelection = ({navigation, route}: any) => {
  const currentDate: string = moment(new Date()).format('YYYY-MM-DD');
  const {image, brand, model, booking_id, date_booked} = route.params;
  const bookingDate = date_booked && moment(date_booked).format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState<any>(bookingDate ?? null);

  const [markedDates, setMarkedDates] = useState<any>({});

  if (date_booked) {
    markedDates[bookingDate] = {selected: true};
  }

  const handleOnSelectDay = ({dateString}: any) => {
    let _marked = Object.assign({});

    _marked[dateString] = {selected: true, selectedColor: 'red'};
    setMarkedDates(_marked);
    setSelectedDate(dateString);
  };

  const handleConfirmSelectedDate = () => {
    navigation.goBack();
  };

  return (
    <Container iconName="arrow-back" title="Vehicle Servicing">
      <View paddingBottom={ms(20)}>
        <View padding={ms(20)}>
          <Center>
            <Text fontSize={ms(16)}>Booking Dates</Text>
          </Center>
        </View>

        <Divider />

        <VehicleForServicingCard
          {...{booking_id, model, brand, image}}
          showDateBooked={false}
        />

        <View flex="1">
          <Calendar
            // Initially visible month. Default = now
            current={date_booked ? bookingDate : currentDate}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2100-01-01'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={handleOnSelectDay}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'MMMM yyyy'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            // renderArrow={direction => <Arrow />}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={false}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={false}
            // Replace default month and year title with custom one. the function receive a date as parameter
            // renderHeader={date => {
            //   console.log('date ', date);
            //   return <Text>test</Text>;
            // }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            markedDates={markedDates}
          />
          <VStack
            padding={ms(20)}
            space={ms(20)}
            flex="1"
            justifyContent="flex-end"
            alignItems="flex-end">
            <Text>
              Date Selected:{' '}
              <Text fontWeight="bold">{selectedDate ? selectedDate : '-'}</Text>
            </Text>
            <Button colorScheme="dark" onPress={handleConfirmSelectedDate}>
              <Text fontSize={ms(16)} color={Colors.white}>
                Confirm/Change Date
              </Text>
            </Button>
          </VStack>
        </View>
      </View>
    </Container>
  );
};
