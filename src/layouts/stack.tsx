import {LayoutStack, Options} from 'react-native-navigation';
import {ScreenLayout} from './screen';

interface StackLayout {
  stack: LayoutStack;
}
interface StackComponent<P = {}> {
  (props: P, context?: any): StackLayout;
}

interface StackProps {
  id?: string;
  screen: ScreenLayout;
  options?: Options;
}

const Stack: StackComponent<StackProps> = ({id, screen, options}) => {
  return {
    stack: {
      id,
      children: [
        {
          component: screen.component,
          options,
        },
      ],
    },
  };
};

export default Stack;
