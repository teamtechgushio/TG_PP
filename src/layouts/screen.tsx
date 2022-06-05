import {Options, Layout} from 'react-native-navigation';
import {PropsWithChildren} from 'react';

export interface ScreenLayout extends Layout {}
export interface ScreenComponent<P = {}> extends Function {
  (props: PropsWithChildren<P>, context?: any): ScreenLayout;
}

interface ScreenProps {
  name: string;
  id?: string;
  options?: Options;
  passProps?: Record<string, any> | undefined;
}

const Screen: ScreenComponent<ScreenProps> = ({
  name,
  id,
  options,
  passProps,
}) => {
  return {
    component: {
      name,
      id,
      options,
      passProps,
    },
  };
};

export default Screen;
