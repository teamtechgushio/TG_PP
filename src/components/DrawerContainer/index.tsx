import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ScrollView, View, VStack} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors} from '@styles';
import {BurgerMenuButton, ScreenTitle} from '../../components';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

type Props = {
  title?: string;
  iconName?: string;
  children?: React.ReactNode;
  icon?: any;
  isMainScreen?: boolean;
};

export const DrawerContainer = ({
  title,
  iconName,
  icon,
  children,
  isMainScreen,
}: Props) => {
  const navigation = useNavigation();

  const goBack = () => {};

  const handleOnMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <VStack space={ms(10)}>
        <View
          size="full"
          roundedBottom="2xl"
          roundedTop="none"
          style={[styles.bgCard]}>
          <BurgerMenuButton onPress={handleOnMenuPress} />
        </View>
        <View style={styles.content}>
          <ScreenTitle
            title={title}
            iconName={iconName}
            icon={icon}
            onPress={goBack}
            position="flex-end"
          />
          <View rounded="2xl" style={styles.list}>
            {children}
          </View>
        </View>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightestGrey,
    flex: 1,
  },
  content: {
    padding: ms(20),
  },
  list: {
    backgroundColor: Colors.white,
  },
  bgCard: {
    position: 'absolute',
    backgroundColor: Colors.azure,
    height: ms(300),
    padding: ms(20),
    paddingTop: 0,
  },
});
