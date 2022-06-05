import {INVOICE} from '@constants';
import {API} from '../apiService';

type Payload = {
  custcode: string;
};

export const getInvoices = (data: Payload) => {
  return API.post(`${INVOICE}`, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log('Error *getInvoices: ', error);
    });
};
