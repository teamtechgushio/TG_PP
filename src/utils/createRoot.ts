import {Screen} from '../layouts';

export function createRoot(name: string, passProps?: any, options?: any) {
  return {
    root: Screen({
      name,
      passProps,
      options,
    }),
  };
}
