import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {Button, Input, Text, VStack, View, Checkbox, HStack} from 'native-base';
import {ms} from 'react-native-size-matters';
import {Logo} from '@components';
import {Colors, Metrics} from '@styles';
import {useUser} from '@stores';
import {CommonActions, useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const IMAGE_HEIGHT = height * 0.35;
const LINE_WIDTH = width / 2 - 80;

const Login = () => {
  const navigation = useNavigation();
  const {skip, login, toggleIsLogginIn, isLoggingIn} = useUser(state => state);
  const user = useUser(state => state.user);
  const isLoggedIn = useUser(state => state.isLoggedIn);

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [roc, setRoc] = useState<string>();
  const [isCorporateUser, setIsCorporateUser] = useState<boolean>(false);

  const isLoginDisabled =
    !(Boolean(username) && Boolean(password)) || isLoggingIn;

  let timeoutId: NodeJS.Timeout;

  const handleOnPressLogin = () => {
    login({
      username: username,
      password: password,
      companyroc: roc,
    });
  };

  const handleOnPressSkip = () => {
    toggleIsLogginIn(true);
    timeoutId = setTimeout(() => {
      skip();
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    }, 1000);
  };

  const showResetPassword = () => {
    //
  };

  useEffect(() => {
    if (__DEV__) {
      setUsername('klenco0101@gmail.com');
      setPassword('superdew');
      setRoc('197100402R');
      setIsCorporateUser(true);
    }

    () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (user && user.hasOwnProperty('name')) {
      navigation.dispatch(CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}]
      }));
    }
  }, [user]);

  const imageHeight = isCorporateUser ? height * 0.25 : IMAGE_HEIGHT;

  return (
    <VStack
      flex="1"
      justifyContent="space-between"
      padding={ms(20)}
      backgroundColor={Colors.white}>
      <View alignItems="center">
        <Logo width={ms(imageHeight)} height={ms(imageHeight)} />
      </View>
      <VStack>
        <Input
          rounded="full"
          size="full"
          height={ms(60)}
          backgroundColor={Colors.azure}
          placeholder="Username"
          value={username}
          textAlign="center"
          color={Colors.white}
          placeholderTextColor={Colors.white}
          onChangeText={text => setUsername(text)}
        />
        <Input
          rounded="full"
          size="full"
          height={ms(60)}
          backgroundColor={Colors.azure}
          placeholder="****************"
          value={password}
          textAlign="center"
          color={Colors.white}
          placeholderTextColor={Colors.white}
          marginTop={Metrics.lg}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.linkContainer}>
          <HStack space={ms(5)}>
            <Text style={styles.linkText}>Coporate User?</Text>
            <Checkbox
              isChecked={isCorporateUser}
              value="corporate-user"
              onChange={() => setIsCorporateUser(prev => !prev)}
              accessibilityLabel="Corporate User?"
            />
          </HStack>
        </View>

        {isCorporateUser && (
          <Input
            rounded="full"
            size="full"
            height={ms(60)}
            backgroundColor={Colors.azure}
            placeholder="ROC/UEN"
            value={roc}
            textAlign="center"
            color={Colors.white}
            placeholderTextColor={Colors.white}
            onChangeText={text => setRoc(text)}
          />
        )}
        <Button
          disabled={isLoginDisabled}
          rounded="full"
          size="full"
          height={ms(60)}
          marginTop={ms(Metrics.sm)}
          backgroundColor={
            isLoginDisabled ? Colors.mediumGrey : Colors.darkestGrey
          }
          onPress={handleOnPressLogin}>
          {isLoggingIn ? (
            <ActivityIndicator size="small" />
          ) : (
            <Text
              color={isLoginDisabled ? Colors.darkGrey : Colors.offWhite}
              bold
              fontSize={ms(16)}>
              LOGIN
            </Text>
          )}
        </Button>
        <View
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginY={Metrics.md}>
          <View style={styles.line} />
          <Text marginX={Metrics.xl} color={Colors.offBlack}>
            OR
          </Text>
          <View style={styles.line} />
        </View>
        <Button
          rounded="full"
          size="full"
          height={ms(60)}
          backgroundColor={Colors.lightGrey}
          onPress={handleOnPressSkip}>
          <Text color={Colors.offBlack} bold fontSize={ms(16)}>
            SKIP FOR NOW
          </Text>
        </Button>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Sign Up</Text>
          <Pressable onPress={() => showResetPassword()}>
            <Text style={styles.linkText}>Forgot Password</Text>
          </Pressable>
        </View>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  linkContainer: {
    paddingVertical: Metrics.rg,
    paddingHorizontal: Metrics.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    color: Colors.black,
  },
  line: {
    minWidth: ms(LINE_WIDTH),
    height: ms(1),
    backgroundColor: '#9D9696',
  },
});

export default Login;
