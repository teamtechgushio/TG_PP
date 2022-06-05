import React from 'react';
import {Image} from 'react-native';
// import SVGLogo from '../../assets/images/logo.svg';
import {Image as Images} from '@assets';

type Props = {
  width?: number;
  height?: number;
};

export const Logo = ({width, height}: Props) => {
  return (
    // <>
    // {/* <SVGLogo /> */}
    <Image
      source={Images.logo}
      style={[
        typeof width !== 'undefined' && {width: width},
        typeof height !== 'undefined' && {height: height},
        // eslint-disable-next-line react-native/no-inline-styles
        {resizeMode: 'contain'},
      ]}
    />
    // </>
  );
};
