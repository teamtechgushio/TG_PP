import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {
  Button,
  Input,
  Text,
  VStack,
  View,
  KeyboardAvoidingView,
} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Logo} from '@components';
import {generalNavigator, useLoginNavigator} from '@navigation';
import {Colors, Metrics, Fonts} from '@styles';

type Props = {componentId: string};

const {height} = Dimensions.get('window');
const IMAGE_HEIGHT = height * 0.35;

export default function ForgotPassword({componentId}: Props) {
  const {goBack} = useLoginNavigator(componentId);
  const [email] = useState<string>();
  const [otp, setOtp] = useState<string>();
  const [isUpdatingPassword, setIsUpdatingPassword] = useState<boolean>(false);
  const isNextDisabled = Boolean(!otp) || isUpdatingPassword;

  useEffect(() => {
    clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let timeoutId: NodeJS.Timeout;
  const handleOnPressLogin = () => {
    setIsUpdatingPassword(true);
    timeoutId = setTimeout(() => {
      generalNavigator.showMainScreens();
    }, 3000);
  };

  const generateOTP = () => {
    // generate otp code
  };

  return (
    <KeyboardAvoidingView
      height={{
        base: height,
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <VStack flex="1" justifyContent="space-between" padding={ms(20)}>
        <View alignItems="center">
          <Logo width={ms(IMAGE_HEIGHT)} height={ms(IMAGE_HEIGHT)} />
        </View>
        <VStack>
          <Text fontSize={Fonts.Size.lg} fontWeight={600}>
            Reset Password
          </Text>
          <Text fontSize={Fonts.Size.lg} fontWeight={600}>
            We have sent and email to
          </Text>
          <Text fontSize={Fonts.Size.lg} fontWeight={600}>
            {email}
          </Text>
          <Text fontSize={Fonts.Size.lg} fontWeight={600}>
            Please enter the OTP to continue.
          </Text>
          <Text fontSize={Fonts.Size.lg} fontWeight={600}>
            <TouchableWithoutFeedback onPress={() => generateOTP()}>
              <Text
                fontSize={Fonts.Size.lg}
                fontWeight={600}
                textDecorationLine="underline">
                Click here
              </Text>
            </TouchableWithoutFeedback>{' '}
            if you have yet to{'\n'}receive any OTP.
          </Text>
          <Input
            rounded="full"
            size="full"
            height={ms(60)}
            backgroundColor={Colors.azure}
            placeholder="****************"
            textAlign="center"
            color={Colors.white}
            placeholderTextColor={Colors.white}
            marginTop={Metrics.lg}
            onChangeText={text => setOtp(text)}
          />
          <Button
            disabled={isNextDisabled}
            marginTop={ms(20)}
            rounded="full"
            size="full"
            height={ms(60)}
            backgroundColor={
              isNextDisabled ? Colors.mediumGrey : Colors.darkestGrey
            }
            onPress={handleOnPressLogin}>
            {isUpdatingPassword ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text
                color={isNextDisabled ? Colors.darkGrey : Colors.offWhite}
                bold
                fontSize={ms(16)}>
                NEXT
              </Text>
            )}
          </Button>

          <Button
            rounded="full"
            marginTop={ms(20)}
            size="full"
            height={ms(60)}
            backgroundColor={Colors.lightGrey}
            onPress={() => goBack()}>
            <Text color={Colors.offBlack} bold fontSize={ms(16)}>
              CANCEL
            </Text>
          </Button>
        </VStack>
      </VStack>
    </KeyboardAvoidingView>
  );
}
