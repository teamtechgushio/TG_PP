import React, {useState} from 'react';
import {View, Text, HStack, Pressable} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors, CustomStyles} from '@styles';

type Props = {
  tabContent1: React.ReactNode;
  tabContent2: React.ReactNode;
  moreContent?: React.ReactNode;
  hasMore?: boolean;
};

enum TABS {
  ONGOING,
  HISTORY,
}

export const TabContainer = ({
  tabContent1,
  tabContent2,
  moreContent,
  hasMore = false,
}: Props) => {
  const [hasShown, setHasShown] = useState<Boolean>(true);
  const [selectedTab, setSelectedTab] = useState<TABS>(TABS.HISTORY);

  const isOnGoingSelected = selectedTab === TABS.ONGOING;
  const isHistorySelected = selectedTab === TABS.HISTORY;

  const renderTab1 = () => {
    if (tabContent1) {
      return <>{tabContent1}</>;
    } else {
      return <></>;
    }
  };

  const renderTab2 = () => {
    if (tabContent2) {
      return <>{tabContent2}</>;
    } else {
      return <></>;
    }
  };

  const renderMoreContent = () => {
    if (moreContent) {
      return <>{moreContent}</>;
    } else {
      return <></>;
    }
  };

  const toggleMore = () => {
    setHasShown(prev => !prev);
  };

  return (
    <>
      <View
        backgroundColor={Colors.white}
        borderRadius="2xl"
        padding={ms(20)}
        style={CustomStyles.shadowed}>
        <HStack
          direction="row"
          justifyContent="space-evenly"
          marginBottom={ms(20)}>
          <Pressable
            alignItems="center"
            backgroundColor={isOnGoingSelected ? '#404040' : Colors.white}
            borderColor="#404040"
            borderWidth={1}
            borderRadius="md"
            borderBottomRightRadius="none"
            borderTopRightRadius="none"
            flex="1"
            justifyContent="center"
            minHeight={ms(40)}
            // isDisabled={true}
            onPress={() => setSelectedTab(TABS.ONGOING)}>
            <Text
              color={isOnGoingSelected ? Colors.white : Colors.darkGrey}
              fontSize={ms(16)}
              fontWeight={isOnGoingSelected ? 'normal' : 'bold'}>
              On-going
            </Text>
          </Pressable>

          <Pressable
            alignItems="center"
            backgroundColor={isHistorySelected ? '#404040' : Colors.white}
            borderColor="#404040"
            borderWidth={1}
            borderRadius="md"
            borderBottomLeftRadius="none"
            borderTopLeftRadius="none"
            flex="1"
            justifyContent="center"
            minHeight={ms(40)}
            onPress={() => setSelectedTab(TABS.HISTORY)}>
            <Text
              color={isHistorySelected ? Colors.white : Colors.darkGrey}
              fontSize={ms(16)}
              fontWeight={isHistorySelected ? 'normal' : 'bold'}>
              History
            </Text>
          </Pressable>
        </HStack>
        {hasMore && hasShown && renderMoreContent()}
        {hasMore && (
          <Pressable onPress={toggleMore}>
            <Text textAlign="right">{hasShown ? 'Done' : 'More'}</Text>
          </Pressable>
        )}
      </View>
      <View
        marginTop={ms(20)}
        // padding={ms(20)}
        backgroundColor={Colors.white}
        borderRadius="2xl"
        style={CustomStyles.shadowed}>
        {selectedTab === TABS.ONGOING ? renderTab1() : renderTab2()}
      </View>
    </>
  );
};
