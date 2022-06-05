import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ScrollView, View} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Colors, CustomStyles} from '@styles';
import {ScreenTitle} from '../../components';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

type Props = {
  title?: string;
  iconName?: string;
  children?: React.ReactNode;
  icon?: any;
};

export const Container2 = ({title, iconName, icon, children}: Props) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const handleOnMenuPress = () => {};

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View size="full" style={[styles.container]}>
        <View
          size="full"
          roundedBottom="2xl"
          roundedTop="none"
          style={[styles.bgCard]}
        />
        <View style={styles.content}>
          <ScreenTitle
            title={title}
            iconName={iconName}
            icon={icon}
            position="flex-start"
            onPress={goBack}
          />
          {/* <View rounded="2xl" style={styles.list}> */}
          {children}
          {/* </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightestGrey,
  },
  content: {
    padding: ms(20),
  },
  list: {
    backgroundColor: Colors.white,
    ...CustomStyles.shadowed,
  },
  bgCard: {
    position: 'absolute',
    backgroundColor: Colors.azure,
    height: ms(300),
    padding: ms(20),
    paddingTop: 0,
  },
});
