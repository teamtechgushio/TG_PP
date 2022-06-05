import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function resetNavigation(name) {
  if (navigationRef.isReady()) {
    console.log('reset to ', name);
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name}],
      }),
    );
  }
}
