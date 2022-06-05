import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    neonGreen: {
      500: '#18FA3C',
      700: '#0EC52C',
    },
    dark: {
      10: '#666a66',
      100: '#5b5f5b',
      200: '#515451',
      300: '#474a47',
      400: '#3d3f3d',
      500: '#333533',
      600: '#282a28',
      700: '#1e1f1e',
      800: '#141514',
      900: '#0a0a0a',
    },
  },
  components: {
    Button: {
      defaultProps: {
        allowFontScaling: false,
      },
    },
    Text: {
      defaultProps: {
        allowFontScaling: false,
      },
    },
    Input: {
      defaultProps: {
        allowFontScaling: false,
        variant: 'filled',
      },
    },
  },
  fontConfig: {
    NotoSans: {
      400: {
        normal: 'NotoSans-Regular',
        italic: 'NotoSans-Italic',
      },
      700: {
        normal: 'NotoSans-Bold',
        italic: 'NotoSans-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Noto Sans',
    body: 'Noto Sans',
    mono: 'Noto Sans',
  },
});
