import React from 'react';
import {Button, IButtonProps} from 'native-base';

type Props = IButtonProps;

export const Round = (props: Props) => {
  return <Button rounded="lg" {...props} />;
};
