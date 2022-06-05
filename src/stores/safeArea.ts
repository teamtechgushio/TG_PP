import create from 'zustand';
import {Dimensions, Platform} from 'react-native';

type SafeAreaStore = {
  notchHeight: number;
  bottomNotchHeight: number;
  fullWindowHeight: number;
  safeWindowHeight: number;
  setNotchHeight: (height: number) => void;
  setBottomNotchHeight: (height: number) => void;
};

// The values are set inside screens/Splash/StoreSafeAreaValues , inside a component because react-native-safe-area-context uses react context

export const useSafeArea = create<SafeAreaStore>((set, get) => {
  const initialWindowHeight = Dimensions.get('window').height;

  function getNewWindowHeights({
    notchHeight,
    bottomNotchHeight,
  }: {
    notchHeight?: number;
    bottomNotchHeight?: number;
  } = {}) {
    // Dimensions windowHeight is within the safe area for android, but the whole window for iOS
    const defaultWindowHeight = Dimensions.get('window').height;

    // const {notchHeight, bottomNotchHeight} = get();
    const safeAreaPadding =
      (notchHeight ?? get().notchHeight) +
      (bottomNotchHeight ?? get().bottomNotchHeight);

    return {
      fullWindowHeight: Platform.select({
        android: defaultWindowHeight + safeAreaPadding,
        ios: defaultWindowHeight,
      }),
      safeWindowHeight: Platform.select({
        android: defaultWindowHeight,
        ios: defaultWindowHeight - safeAreaPadding,
      }),
    };
  }

  // if the window size changes, update the windowHeight props
  Dimensions.addEventListener('change', () => set(getNewWindowHeights()));

  return {
    notchHeight: 0,
    bottomNotchHeight: 0,
    fullWindowHeight: initialWindowHeight,
    safeWindowHeight: initialWindowHeight,
    setNotchHeight: (notchHeight: number) => {
      set({
        notchHeight,
        ...getNewWindowHeights({notchHeight}),
      });
    },
    setBottomNotchHeight: (bottomNotchHeight: number) => {
      set({bottomNotchHeight, ...getNewWindowHeights({bottomNotchHeight})});
    },
  };
});

// simplified hooks
export function useNotchHeight() {
  const notchHeight = useSafeArea(state => state.notchHeight);
  return notchHeight;
}

export function useBottomNotchHeight() {
  const bottomNotchHeight = useSafeArea(state => state.bottomNotchHeight);
  return bottomNotchHeight;
}
