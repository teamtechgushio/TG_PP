// import {Navigation} from 'react-native-navigation';
import {Screens} from '@utils';
import generalNavigator from './general';

const {showMainScreens} = generalNavigator;

export const useLoginNavigator = (componentId: string) => {
  const login = () => {
    // showMainTabs();
    showMainScreens();
  };

  const showResetPassword = () => {
    // Navigation.setRoot(createRoot(Screens.ForgotPassword));
    // Navigation.push(componentId, {
    //   component: {
    //     name: Screens.ForgotPassword,
    //     options: {
    //       topBar: {
    //         visible: false,
    //       },
    //       animations: {
    //         push: {
    //           content: {
    //             enter: {
    //               alpha: {
    //                 from: 0,
    //                 to: 1,
    //                 duration: 300,
    //               },
    //             },
    //           },
    //         },
    //         pop: {
    //           content: {
    //             exit: {
    //               alpha: {
    //                 from: 1,
    //                 to: 0,
    //                 duration: 300,
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
  };

  const goBack = () => {
    // Navigation.pop(componentId);
  };

  return {
    login,
    goBack,
    showResetPassword,
  };
};
