import {ResponseTransform} from 'apisauce';
import camelCaseKeys from 'camelcase-keys';

export const dataToCamelCase: ResponseTransform = (response) => {
  if (response.data) {
    response.data = camelCaseKeys(response.data, {deep: true});
  }
};

