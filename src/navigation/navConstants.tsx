// import {Linking, Platform} from 'react-native';
// import {
//   Options,
//   OptionsStatusBar,
//   OptionsTopBarButton,
//   OptionsBottomTabs,
//   OptionsTopBarTitle,
// } from 'react-native-navigation';
// import colors from '../styles/colors';
// import {NavComponents, NavButtons, Screens} from '../utils/constants';
// // import {NavigationButtonProps} from 'components/NavigationButton';
// // import Analytics from 'utils/Analytics';
// // import {usePermissionsInfo} from 'stores/permissions';

// export const hideBottomTabsOptions = (): OptionsBottomTabs => {
//   return {visible: false, drawBehind: false, animate: true};
// };

// export const showBottomTabsOptions = (): OptionsBottomTabs => {
//   return {visible: true, drawBehind: false, animate: true};
// };

// export const getStatusBarOptionsForColor = (
//   color?: string,
// ): OptionsStatusBar => {
//   return {
//     style: 'dark',
//     backgroundColor: color ?? colors.newBlush,
//     drawBehind: false,
//   };
// };

// export const getCloseButtonOptions = (
//   buttonId: string,
//   parentComponentId: string,
//   left: boolean,
// ): OptionsTopBarButton =>
//   getNavButtonOptions({
//     buttonId,
//     parentComponentId,
//     left,
//     iconName: 'cross',
//     testID: 'modal_close_button',
//   });

// // export const getNavButtonOptions = (
// //   props: NavigationButtonProps,
// // ): OptionsTopBarButton => {
// //   return {
// //     id: props.buttonId,
// //     testID: props.buttonId,
// //     component: {
// //       name: NavComponents.IconButton,
// //       passProps: props,
// //     },
// //   };
// // };

// export const searchScreenOptions = () => {
//   const showBottomTabs = showBottomTabsOptions();
//   const statusBarOptions = getStatusBarOptionsForColor();

//   return {
//     statusBar: statusBarOptions,
//     topBar: {
//       visible: false,
//       height: 0,
//     },
//     bottomTabs: showBottomTabs,
//     animations: {
//       push: {
//         enabled: false,
//       },
//     },
//   };
// };

// export const getProductListingOptions = (topBarTitle?: string) => {
//   const statusBarOptions = getStatusBarOptionsForColor();
//   return {
//     statusBar: statusBarOptions,
//     topBar: {
//       drawBehind: false,
//       visible: true,
//       hideOnScroll: Platform.OS === 'ios',
//       title: {
//         text: topBarTitle,
//       },
//     },
//     bottomTabs: {visible: true},
//     animations: {
//       push: {
//         enabled: true,
//       },
//     },
//   };
// };

// export const getSmallTitleMeccaLogo = (): OptionsTopBarTitle => {
//   return {
//     component: {
//       id: 'BarTitleMeccaLogo',
//       name: NavComponents.TitleMeccaLogo,
//       passProps: {},
//       alignment: 'center',
//     },
//   };
// };

// // export const getNotificationOptions = (): Options => {
// //   return {
// //     statusBar: getStatusBarOptionsForColor(),
// //     topBar: {
// //       visible: true,
// //       drawBehind: false,
// //       noBorder: true,
// //       borderHeight: 0,
// //       elevation: 0,
// //       title: getSmallTitleMeccaLogo(),
// //       leftButtons: [
// //         getCloseButtonOptions(
// //           NavButtons.NotificationSettingsClose,
// //           Screens.NotificationSettings,
// //           true,
// //         ),
// //       ],
// //     },
// //   };
// // };

// // export const getResetPasswordOptions = (): Options => {
// //   return {
// //     statusBar: getStatusBarOptionsForColor(colors.white),
// //     topBar: {
// //       visible: true,
// //       drawBehind: false,
// //       title: getSmallTitleMeccaLogo(),
// //       background: {
// //         color: colors.white,
// //       },
// //       leftButtons: [
// //         getCloseButtonOptions(
// //           NavButtons.ResetPasswordClose,
// //           Screens.Login,
// //           true,
// //         ),
// //       ],
// //       noBorder: true,
// //       borderHeight: 0,
// //       elevation: 0,
// //     },
// //   };
// // };

// // export const getLoginOptions = (): Options => {
// //   return {
// //     statusBar: getStatusBarOptionsForColor(colors.blush),
// //     topBar: {
// //       visible: true,
// //       drawBehind: false,
// //       title: {
// //         text: Screens.Login,
// //       },
// //       rightButtons: [
// //         getCloseButtonOptions(NavButtons.LoginClose, Screens.Login, false),
// //       ],
// //       noBorder: true,
// //       borderHeight: 0,
// //       elevation: 0,
// //     },
// //   };
// // };

// // export const getSignupOptions = (): Options => {
// //   return {
// //     statusBar: getStatusBarOptionsForColor(colors.white),
// //     topBar: {
// //       visible: true,
// //       drawBehind: false,
// //       title: getSmallTitleMeccaLogo(),
// //       background: {
// //         color: colors.white,
// //       },
// //       leftButtons: [
// //         getCloseButtonOptions(NavButtons.SignUpClose, Screens.SignUp, true),
// //       ],
// //       noBorder: true,
// //       borderHeight: 0,
// //       elevation: 0,
// //     },
// //   };
// // };

// // export const disableNotificationPress = async () => {
// //   const {fetchNotificationStatus} = usePermissionsInfo.getState();
// //   await Linking.openSettings();
// //   const afterStatus = await fetchNotificationStatus();
// //   Analytics.trackNotificationEnableEvent(afterStatus);
// //   // cancelPressed();
// // };

// // export const enableNotificationPress = async () => {
// //   const {fetchNotificationStatus} = usePermissionsInfo.getState();
// //   const initialStatus = await fetchNotificationStatus();

// //   if (initialStatus === 'denied') {
// //     await Emarsys.requestPushAuth();
// //   } else {
// //     await Linking.openSettings();
// //   }

// //   const afterStatus = await fetchNotificationStatus();
// //   Analytics.trackNotificationEnableEvent(afterStatus);
// //   // cancelPressed();
// // };
