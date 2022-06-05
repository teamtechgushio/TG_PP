import {Screen, Stack} from '../layouts';
import colors from '../styles/colors';
import {Screens} from '../utils/constants';

const WelcomeStack = Stack({
  screen: Screen({
    name: Screens.Login,
    options: {
      topBar: {visible: false},
      statusBar: {backgroundColor: colors.transparent},
    },
  }),
});

export default WelcomeStack;
