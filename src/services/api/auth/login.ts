import {USER, LOGIN} from '@constants';
import {Credentials} from '@types';
import {apiConfig} from '@config';
import moment from 'moment';
import {API} from '../apiService';
import {Buffer} from 'buffer';

export const login = (data: Credentials) => {
  let buff = Buffer.from(data.username + apiConfig.apiKey + data.password);
  let base64input = buff.toString('base64');
  let requestBody = {
    transid: `${moment().unix()}`,
    companyroc: data.companyroc || null,
    input: base64input,
  };

  return API.post(USER + '/' + LOGIN, requestBody)
    .then((response: any) => {
      if (response.data?.hasOwnProperty('name')) {
        API.setHeader('Authorization', `Bearer: ${base64input}`);
      }
      return response;
    })
    .catch((error: any) => {
      console.log('Error *AUTHENTICATE: ', error);
    });
};
